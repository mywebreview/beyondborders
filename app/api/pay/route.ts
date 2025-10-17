import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // For development - mock successful payment initialization
  if (process.env.NODE_ENV === 'development') {
    console.log('🟡 DEVELOPMENT MODE: Using mock payment')

    const body = await request.json()
    const { email, amount, enrollmentId } = body

    // Return a mock Paystack response
    return NextResponse.json({
      authorization_url: `http://localhost:5000/payment/mock-success?reference=mock-${Date.now()}&enrollmentId=${enrollmentId}`,
      access_code: 'mock_access_code',
      reference: `mock-${Date.now()}`,
    })
  }

  // Production code
  try {
    const body = await request.json()
    const { email, amount, enrollmentId } = body

    console.log('🔵 Payment request received:', { email, amount, enrollmentId })

    if (!email || !amount || !enrollmentId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY
    if (!paystackSecretKey) {
      return NextResponse.json(
        { error: 'Payment gateway not configured' },
        { status: 500 }
      )
    }

    const paymentData = {
      email,
      amount: amount * 100,
      callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/verify`,
      metadata: {
        enrollment_id: enrollmentId,
      }
    }

    const paystackResponse = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${paystackSecretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    })

    const responseData = await paystackResponse.json()

    if (responseData.status && responseData.data) {
      return NextResponse.json({
        authorization_url: responseData.data.authorization_url,
        access_code: responseData.data.access_code,
        reference: responseData.data.reference,
      })
    } else {
      console.error('Paystack error:', responseData.message)
      return NextResponse.json(
        { error: responseData.message || 'Payment initialization failed' },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Payment error:', error)
    return NextResponse.json(
      { error: 'Payment initialization failed' },
      { status: 500 }
    )
  }
}