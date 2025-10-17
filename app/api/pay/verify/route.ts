import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { reference } = body

        if (!reference) {
            return NextResponse.json({ error: 'Reference is required' }, { status: 400 })
        }

        // Verify payment with Paystack
        const verifyResponse = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
            headers: {
                'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            },
        })

        const verificationData = await verifyResponse.json()

        if (verificationData.status && verificationData.data.status === 'success') {
            const enrollmentId = verificationData.data.metadata.enrollment_id

            // Update enrollment status
            const { error: updateError } = await supabaseAdmin
                .from('enrollments')
                .update({
                    payment_status: 'completed',
                    payment_reference: reference,
                    updated_at: new Date().toISOString(),
                })
                .eq('id', enrollmentId)

            if (updateError) {
                console.error('Failed to update enrollment:', updateError)
            }

            return NextResponse.json({
                status: 'success',
                message: 'Payment verified successfully',
                data: verificationData.data
            })
        } else {
            return NextResponse.json({
                status: 'error',
                message: verificationData.message || 'Payment verification failed'
            }, { status: 400 })
        }
    } catch (error) {
        console.error('Payment verification error:', error)
        return NextResponse.json(
            { error: 'Payment verification failed' },
            { status: 500 }
        )
    }
}