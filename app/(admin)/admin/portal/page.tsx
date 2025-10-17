// app/admin/portal/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'
import Link from 'next/link'

// Define proper types based on your database schema
type ApplicationStatus = 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected'

interface Application {
    id: string
    first_name: string
    last_name: string
    email: string
    status: ApplicationStatus | null
    destination_country: 'UK' | 'Canada' | null
    created_at: string
}

interface DashboardStats {
    totalApplications: number
    pendingApplications: number
    approvedApplications: number
    rejectedApplications: number
}

export default function AdminDashboard() {
    const [stats, setStats] = useState<DashboardStats>({
        totalApplications: 0,
        pendingApplications: 0,
        approvedApplications: 0,
        rejectedApplications: 0
    })
    const [recentApplications, setRecentApplications] = useState<Application[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchDashboardData()
    }, [])

    const fetchDashboardData = async () => {
        try {
            // Fetch applications count by status
            const { data: applications, error } = await supabase
                .from('applications')
                .select('status')

            if (error) throw error

            if (!applications) {
                setStats({
                    totalApplications: 0,
                    pendingApplications: 0,
                    approvedApplications: 0,
                    rejectedApplications: 0
                })
                setRecentApplications([])
                return
            }

            const totalApplications = applications.length
            const pendingApplications = applications.filter(app =>
                app.status === 'submitted' || app.status === 'under_review'
            ).length
            const approvedApplications = applications.filter(app => app.status === 'approved').length
            const rejectedApplications = applications.filter(app => app.status === 'rejected').length

            setStats({
                totalApplications,
                pendingApplications,
                approvedApplications,
                rejectedApplications
            })

            // Fetch recent applications
            const { data: recentApps, error: recentError } = await supabase
                .from('applications')
                .select('id, first_name, last_name, email, status, destination_country, created_at')
                .order('created_at', { ascending: false })
                .limit(5)

            if (recentError) throw recentError

            setRecentApplications(recentApps as Application[] || [])
        } catch (error) {
            console.error('Error fetching dashboard data:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const getStatusColor = (status: string | null) => {
        if (!status) return 'bg-gray-100 text-gray-800'

        switch (status) {
            case 'approved': return 'bg-green-100 text-green-800'
            case 'rejected': return 'bg-red-100 text-red-800'
            case 'under_review': return 'bg-yellow-100 text-yellow-800'
            case 'submitted': return 'bg-blue-100 text-blue-800'
            case 'draft': return 'bg-gray-100 text-gray-800'
            default: return 'bg-gray-100 text-gray-800'
        }
    }

    const formatStatus = (status: string | null) => {
        if (!status) return 'Unknown'
        return status.replace('_', ' ')
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                    <p className="text-gray-600">Manage and review student applications</p>
                </div>
                <div className="mt-4 sm:mt-0">
                    <Link
                        href="/admin/portal/application"
                        className="bg-brand-blue text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium inline-flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        View All Applications
                    </Link>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Total Applications</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.totalApplications}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Pending Review</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.pendingApplications}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Approved</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.approvedApplications}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Rejected</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.rejectedApplications}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Applications - Horizontal Scroll */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Recent Applications</h3>
                        <span className="text-sm text-gray-600">
                            {recentApplications.length} applications
                        </span>
                    </div>
                </div>
                <div className="p-6">
                    {recentApplications.length === 0 ? (
                        <div className="text-center py-8">
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className="mt-2 text-gray-600">No applications yet</p>
                            <p className="text-sm text-gray-500 mt-1">Applications will appear here once students start applying</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto"> {/* Horizontal scroll container */}
                            <div className="flex space-x-4 pb-4 min-w-max"> {/* Flex container for horizontal layout */}
                                {recentApplications.map((application) => (
                                    <div
                                        key={application.id}
                                        className="w-70 flex-shrink-0 border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                                    >
                                        {/* Applicant Header */}
                                        <div className="flex items-center space-x-3 mb-3">
                                            <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-semibold">
                                                {application.first_name?.[0]}{application.last_name?.[0]}
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="font-medium text-gray-900 truncate">
                                                    {application.first_name} {application.last_name}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate">{application.email}</p>
                                            </div>
                                        </div>

                                        {/* Application Details */}
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Status:</span>
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                                                    {formatStatus(application.status)}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Country:</span>
                                                <span className="text-gray-900 capitalize">
                                                    {application.destination_country || 'Not specified'}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Applied:</span>
                                                <span className="text-gray-900">
                                                    {new Date(application.created_at).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Action Button */}
                                        <div className="mt-4">
                                            <Link
                                                href={`/admin/portal/application/${application.id}`}
                                                className="w-full bg-brand-blue text-white text-center py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium inline-flex items-center justify-center gap-1 text-sm"
                                            >
                                                View Details
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {recentApplications.length > 0 && (
                        <div className="mt-6 text-center pt-4 border-t border-gray-200">
                            <Link
                                href="/admin/portal/application"
                                className="bg-brand-blue text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium inline-flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                                View All Applications
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link
                        href="/admin/portal/application"
                        className="p-4 border border-gray-200 rounded-lg hover:border-brand-blue hover:bg-blue-50 transition-colors group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Manage Applications</p>
                                <p className="text-sm text-gray-600">Review and process applications</p>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/admin/portal/analytics"
                        className="p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">View Analytics</p>
                                <p className="text-sm text-gray-600">Application insights and reports</p>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/admin/portal/settings"
                        className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Settings</p>
                                <p className="text-sm text-gray-600">Manage portal settings</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}