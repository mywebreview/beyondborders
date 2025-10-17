// app/admin/applications/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'
import Link from 'next/link'

// Define proper types based on your database schema
type ApplicationStatus = 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected'
type DestinationCountry = 'UK' | 'Canada'

interface Application {
    id: string
    first_name: string
    last_name: string
    email: string
    phone: string
    destination_country: DestinationCountry | null
    proposed_course: string | null
    status: ApplicationStatus | null
    created_at: string
}

export default function ApplicationsList() {
    const [applications, setApplications] = useState<Application[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [filter, setFilter] = useState<string>('all')
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetchApplications()
    }, [filter])

    const fetchApplications = async () => {
        try {
            setIsLoading(true)
            let query = supabase
                .from('applications')
                .select('id, first_name, last_name, email, phone, destination_country, proposed_course, status, created_at')
                .order('created_at', { ascending: false })

            if (filter !== 'all') {
                query = query.eq('status', filter)
            }

            const { data, error } = await query

            if (error) throw error
            setApplications(data as Application[] || [])
        } catch (error) {
            console.error('Error fetching applications:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const filteredApplications = applications.filter(app =>
        app.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.phone?.toLowerCase().includes(searchTerm.toLowerCase())
    )

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

    const getCountryFlag = (country: string | null) => {
        if (country === 'UK') return '🇬🇧'
        if (country === 'Canada') return '🇨🇦'
        return '🌍'
    }

    const getInitials = (firstName: string, lastName: string) => {
        return `${firstName?.[0] || ''}${lastName?.[0] || ''}`.toUpperCase()
    }

    const getStatusCounts = () => {
        const counts = {
            all: applications.length,
            submitted: applications.filter(app => app.status === 'submitted').length,
            under_review: applications.filter(app => app.status === 'under_review').length,
            approved: applications.filter(app => app.status === 'approved').length,
            rejected: applications.filter(app => app.status === 'rejected').length,
            draft: applications.filter(app => app.status === 'draft').length,
        }
        return counts
    }

    const statusCounts = getStatusCounts()

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
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Applications</h1>
                    <p className="text-gray-600">Manage and review student applications</p>
                </div>
                <div className="mt-4 lg:mt-0">
                    <button
                        onClick={fetchApplications}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium inline-flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Refresh
                    </button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-gray-900">{statusCounts.all}</div>
                    <div className="text-sm text-gray-600">Total</div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-blue-600">{statusCounts.submitted}</div>
                    <div className="text-sm text-gray-600">Submitted</div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-yellow-600">{statusCounts.under_review}</div>
                    <div className="text-sm text-gray-600">Review</div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-green-600">{statusCounts.approved}</div>
                    <div className="text-sm text-gray-600">Approved</div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-red-600">{statusCounts.rejected}</div>
                    <div className="text-sm text-gray-600">Rejected</div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-gray-600">{statusCounts.draft}</div>
                    <div className="text-sm text-gray-600">Draft</div>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${filter === 'all'
                                ? 'bg-brand-blue text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            All ({statusCounts.all})
                        </button>
                        <button
                            onClick={() => setFilter('submitted')}
                            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${filter === 'submitted'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Submitted ({statusCounts.submitted})
                        </button>
                        <button
                            onClick={() => setFilter('under_review')}
                            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${filter === 'under_review'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Under Review ({statusCounts.under_review})
                        </button>
                        <button
                            onClick={() => setFilter('approved')}
                            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${filter === 'approved'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Approved ({statusCounts.approved})
                        </button>
                        <button
                            onClick={() => setFilter('rejected')}
                            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${filter === 'rejected'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Rejected ({statusCounts.rejected})
                        </button>
                    </div>

                    <div className="lg:w-64">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search applications..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                            />
                            <svg className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Applications Table */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                {filteredApplications.length === 0 ? (
                    <div className="text-center py-12">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="mt-2 text-gray-600">
                            {applications.length === 0 ? 'No applications found' : 'No applications match your search'}
                        </p>
                        {applications.length === 0 && (
                            <p className="text-sm text-gray-500 mt-1">Applications will appear here once students start applying</p>
                        )}
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Applicant
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Contact
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Destination
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Course
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredApplications.map((application) => (
                                    <tr key={application.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-semibold">
                                                    {getInitials(application.first_name, application.last_name)}
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {application.first_name} {application.last_name}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        ID: {application.id.slice(0, 8)}...
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{application.email}</div>
                                            <div className="text-sm text-gray-500">{application.phone}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center text-sm text-gray-900">
                                                <span className="text-lg mr-2">{getCountryFlag(application.destination_country)}</span>
                                                {application.destination_country || 'Not specified'}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900 max-w-xs truncate">
                                                {application.proposed_course || 'Not specified'}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(application.status)}`}>
                                                {formatStatus(application.status)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(application.created_at).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Link
                                                href={`/admin/portal/application/${application.id}`}
                                                className="text-brand-blue hover:text-blue-800 font-medium inline-flex items-center gap-1"
                                            >
                                                View
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Results Count */}
                {filteredApplications.length > 0 && (
                    <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                        <p className="text-sm text-gray-600">
                            Showing {filteredApplications.length} of {applications.length} applications
                            {searchTerm && ` matching "${searchTerm}"`}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}