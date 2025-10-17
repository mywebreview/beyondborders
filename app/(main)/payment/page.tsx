'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function PaymentVerify() {
    const searchParams = useSearchParams()
    const reference = searchParams.get('reference')
    const trxref = searchParams.get('trxref')
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
    const [message, setMessage] = useState('')

    useEffect(() => {
        const verifyPayment = async () => {
            try {
                const response = await fetch('/api/pay/verify', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ reference: reference || trxref }),
                })

                const data = await response.json()

                if (data.status === 'success') {
                    setStatus('success')
                    setMessage('Payment completed successfully! Your enrollment has been confirmed.')
                } else {
                    setStatus('error')
                    setMessage(data.message || 'Payment verification failed. Please contact support.')
                }
            } catch (error) {
                setStatus('error')
                setMessage('Error verifying payment. Please contact support.')
            }
        }

        if (reference || trxref) {
            verifyPayment()
        } else {
            setStatus('error')
            setMessage('No payment reference found.')
        }
    }, [reference, trxref])

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <div className="text-center">
                    {status === 'loading' && (
                        <>
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                            <h2 className="text-xl font-semibold mb-2">Verifying Payment</h2>
                            <p className="text-gray-600">Please wait while we verify your payment...</p>
                        </>
                    )}

                    {status === 'success' && (
                        <>
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold mb-2 text-green-600">Payment Successful!</h2>
                            <p className="text-gray-600 mb-6">{message}</p>
                            <Link
                                href="/"
                                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
                            >
                                Return to Home
                            </Link>
                        </>
                    )}

                    {status === 'error' && (
                        <>
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold mb-2 text-red-600">Payment Failed</h2>
                            <p className="text-gray-600 mb-6">{message}</p>
                            <Link
                                href="/enroll"
                                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
                            >
                                Try Again
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}