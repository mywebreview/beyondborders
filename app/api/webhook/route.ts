import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { supabase } from '@/lib/supabase'
import { sendStudentConfirmation, sendAdminNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('x-paystack-signature')
    
    const secret = process.env.PAYSTACK_SECRET_KEY || ''
    const hash = crypto
      .createHmac('sha512', secret)
      .update(body)
      .digest('hex')
    
    if (hash !== signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }
    
    const event = JSON.parse(body)
    
    if (event.event === 'charge.success') {
      const { reference, metadata } = event.data
      const enrollmentId = metadata?.enrollmentId
      
      if (!enrollmentId) {
        console.error('No enrollment ID in webhook metadata')
        return NextResponse.json({ error: 'Missing enrollment ID' }, { status: 400 })
      }
      
      const { data: enrollment, error: fetchError } = await supabase
        .from('enrollments')
        .select('*')
        .eq('id', enrollmentId)
        .single()
      
      if (fetchError || !enrollment) {
        console.error('Enrollment not found:', fetchError)
        return NextResponse.json({ error: 'Enrollment not found' }, { status: 404 })
      }
      
      const { error: updateError } = await supabase
        .from('enrollments')
        .update({
          payment_status: 'completed',
          payment_reference: reference,
        })
        .eq('id', enrollmentId)
      
      if (updateError) {
        console.error('Failed to update enrollment:', updateError)
        return NextResponse.json({ error: 'Update failed' }, { status: 500 })
      }
      
      try {
        await sendStudentConfirmation(
          {
            email: enrollment.email,
            name: enrollment.full_name,
            reference: reference,
            country: enrollment.country,
            program: enrollment.program,
          },
          enrollment.country as 'UK' | 'Canada'
        )
        
        await sendAdminNotification(
          {
            studentName: enrollment.full_name,
            studentEmail: enrollment.email,
            studentPhone: enrollment.phone,
            country: enrollment.country,
            program: enrollment.program,
            reference: reference,
            documentUrl: enrollment.document_url,
          },
          enrollment.country as 'UK' | 'Canada'
        )
      } catch (emailError) {
        console.error('Email sending failed:', emailError)
      }
    }
    
    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}
