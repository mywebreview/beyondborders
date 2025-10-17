// app/admin/applications/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'
import Link from 'next/link'

interface Application {
    id: string
    first_name: string
    last_name: string
    email: string
    phone: string
    destination_country: 'UK' | 'Canada' | null
    proposed_course: string | null
    status: string
    created_at: string
}

export default function ApplicationsList() {
    const [applications, setApplications] = useState<Application[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [filter, setFilter] = useState('all')
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetchApplications()
    }, [filter])

    const fetchApplications = async () => {
        try {
            let query = supabase
                .from('applications')
                .select('*')
                .order('created_at', { ascending: false })

            if (filter !== 'all') {
                query = query.eq('status', filter)
            }

            const { data, error } = await query

            if (error) throw error
            setApplications(data || [])
        } catch (error) {
            console.error('Error fetching applications:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const filteredApplications = applications.filter(app =>
        app.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'approved': return 'bg-green-100 text-green-800'
            case 'rejected': return 'bg-red-100 text-red-800'
            case 'under_review': return 'bg-yellow-100 text-yellow-800'
            case 'submitted': return 'bg-blue-100 text-blue-800'
            default: return 'bg-gray-100 text-gray-800'
        }
    }

    const getCountryFlag = (country: string | null) => {
        if (country === 'UK') return '🇬🇧'
        if (country === 'Canada') return '🇨🇦'
        return '🌍'
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
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Applications</h1>
                    <p className="text-gray-600">Manage and review student applications</p>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 rounded-lg font-medium text-sm ${filter === 'all'
                                    ? 'bg-brand-blue text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            All Applications
                        </button>
                        <button
                            onClick={() => setFilter('submitted')}
                            className={`px-4 py-2 rounded-lg font-medium text-sm ${filter === 'submitted'
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Submitted
                        </button>
                        <button
                            onClick={() => setFilter('under_review')}
                            className={`px-4 py-2 rounded-lg font-medium text-sm ${filter === 'under_review'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Under Review
                        </button>
                        <button
                            onClick={() => setFilter('approved')}
                            className={`px-4 py-2 rounded-lg font-medium text-sm ${filter === 'approved'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Approved
                        </button>
                        <button
                            onClick={() => setFilter('rejected')}
                            className={`px-4 py-2 rounded-lg font-medium text-sm ${filter === 'rejected'
                                    ? 'bg-red-100 text-red-800'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Rejected
                        </button>
                    </div>

                    <div className="lg:w-64">
                        <input
                            type="text"
                            placeholder="Search applications..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        />
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
                        <p className="mt-2 text-gray-600">No applications found</p>
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
                                    <tr key={application.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-semibold">
                                                    {application.first_name[0]}{application.last_name[0]}
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {application.first_name} {application.last_name}
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
                                                {application.destination_country}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 max-w-xs truncate">
                                                {application.proposed_course || 'Not specified'}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(application.status)}`}>
                                                {application.status.replace('_', ' ')}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(application.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Link
                                                href={`/admin/portal/application/${application.id}`}
                                                className="text-brand-blue hover:text-blue-800 font-medium"
                                            >
                                                View Details
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}