// app/admin/layout.tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem('admin_token')
            setIsAuthenticated(!!token)
            setIsLoading(false)

            if (!token && pathname !== '/admin/login') {
                router.push('/admin/login')
            }
        }

        checkAuth()
    }, [pathname, router])

    useEffect(() => {
        // Close mobile menu when route changes
        setIsMobileMenuOpen(false)
    }, [pathname])

    const handleLogout = () => {
        localStorage.removeItem('admin_token')
        setIsAuthenticated(false)
        router.push('/admin/login')
    }

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
            </div>
        )
    }

    if (!isAuthenticated && pathname !== '/admin/login') {
        return null
    }

    if (pathname === '/admin/login') {
        return <>{children}</>
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
            {/* Mobile Header */}
            <header className="lg:hidden bg-white shadow-sm border-b border-gray-200">
                <div className="px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                        <div>
                            <h1 className="text-lg font-bold text-gray-900">StudyAbroad Admin</h1>
                            <p className="text-xs text-gray-600">Administration Portal</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600 hidden sm:block">Welcome, Admin</span>
                        <button
                            onClick={handleLogout}
                            className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                            title="Logout"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}

                {/* Mobile Sidebar */}
                <div className={`
                    fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden
                    ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                `}>
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">StudyAbroad Admin</h1>
                                <p className="text-sm text-gray-600">Administration Portal</p>
                            </div>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <nav className="p-4">
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/admin/portal"
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname === '/admin/portal'
                                            ? 'bg-brand-blue text-white'
                                            : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/admin/portal/application"
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname.includes('/admin/portal/application')
                                            ? 'bg-brand-blue text-white'
                                            : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Applications
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors w-full text-left"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-64 bg-white shadow-lg">
                <div className="p-6 border-b border-gray-200">
                    <h1 className="text-xl font-bold text-gray-900">StudyAbroad Admin</h1>
                    <p className="text-sm text-gray-600">Administration Portal</p>
                </div>

                <nav className="p-4">
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/admin/portal"
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname === '/admin/portal'
                                        ? 'bg-brand-blue text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/portal/application"
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname.includes('/admin/portal/application')
                                        ? 'bg-brand-blue text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Applications
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors w-full text-left"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                Logout
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen lg:min-h-0">
                {/* Desktop Header */}
                <header className="hidden lg:block bg-white shadow-sm border-b border-gray-200">
                    <div className="px-6 py-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold text-gray-900">
                                {pathname === '/admin/portal' && 'Dashboard'}
                                {pathname.includes('/admin/portal/application') && 'Applications Management'}
                            </h2>
                            <div className="text-sm text-gray-600">
                                Welcome, Admin
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-4 lg:p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}