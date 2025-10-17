// app/admin/portal/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'
import Link from 'next/link'

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
    const [recentApplications, setRecentApplications] = useState<any[]>([])
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

            const totalApplications = applications.length
            const pendingApplications = applications.filter(app => app.status === 'submitted' || app.status === 'under_review').length
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
                .select('*')
                .order('created_at', { ascending: false })
                .limit(5)

            if (recentError) throw recentError

            setRecentApplications(recentApps || [])
        } catch (error) {
            console.error('Error fetching dashboard data:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'approved': return 'bg-green-100 text-green-800'
            case 'rejected': return 'bg-red-100 text-red-800'
            case 'under_review': return 'bg-yellow-100 text-yellow-800'
            default: return 'bg-blue-100 text-blue-800'
        }
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

            {/* Recent Applications */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Applications</h3>
                </div>
                <div className="p-6">
                    {recentApplications.length === 0 ? (
                        <div className="text-center py-8">
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className="mt-2 text-gray-600">No applications yet</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {recentApplications.map((application) => (
                                <div key={application.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-semibold">
                                                {application.first_name[0]}{application.last_name[0]}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">
                                                {application.first_name} {application.last_name}
                                            </p>
                                            <p className="text-sm text-gray-600">{application.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                                            {application.status.replace('_', ' ')}
                                        </span>
                                        <span className="text-sm text-gray-600 capitalize">
                                            {application.destination_country}
                                        </span>
                                        <Link
                                            href={`/admin/portal/application/${application.id}`}
                                            className="text-brand-blue hover:text-blue-800 font-medium text-sm"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {recentApplications.length > 0 && (
                        <div className="mt-6 text-center">
                            <Link
                                href="/admin/portal/application"
                                className="bg-brand-blue text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                            >
                                View All Applications
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}