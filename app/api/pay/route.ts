import { NextRequest, NextResponse } from 'next/server'

const paystack = require('paystack')(process.env.PAYSTACK_SECRET_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, amount, enrollmentId } = body
    
    if (!email || !amount || !enrollmentId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    const response = await paystack.transaction.initialize({
      email,
      amount: amount * 100,
      callback_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:5000'}/enroll?success=true`,
      metadata: {
        enrollmentId,
      },
    })
    
    if (response.status) {
      return NextResponse.json({
        authorization_url: response.data.authorization_url,
        access_code: response.data.access_code,
        reference: response.data.reference,
      })
    }
    
    return NextResponse.json(
      { error: 'Failed to initialize payment' },
      { status: 500 }
    )
  } catch (error) {
    console.error('Payment initialization error:', error)
    return NextResponse.json(
      { error: 'Payment initialization failed' },
      { status: 500 }
    )
  }
}
