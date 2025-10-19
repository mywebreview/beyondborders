// app/admin/login/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function AdminLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        // Simple admin authentication (replace with secure authentication in production)
        if (email === 'portalforadmin@beyondborders.com' && password === 'hardtogetpassword123!') {
            localStorage.setItem('admin_token', 'admin_authenticated')
            router.push('/admin/portal')
        } else {
            setError('Invalid credentials')
        }

        setIsLoading(false)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-blue to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <div className="mx-auto h-16 w-16 bg-white rounded-2xl flex items-center justify-center">
                        <Image
                            src="/favicon.png"
                            alt="Company Logo"
                            width={40}
                            height={40}
                            priority
                        />
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        Admin Portal
                    </h2>
                    <p className="mt-2 text-center text-sm text-blue-200">
                        BeyondBorders Administration
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-brand-blue focus:border-brand-blue focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-brand-blue focus:border-brand-blue focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-md p-4">
                            <p className="text-red-800 text-sm">{error}</p>
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-yellow text-brand-blue hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow transition-colors"
                        >
                            {isLoading ? 'Signing in...' : 'Sign in'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}