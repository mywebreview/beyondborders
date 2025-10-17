// app/admin/applications/[id]/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'

interface Application {
    id: string
    first_name: string
    last_name: string
    email: string
    phone: string
    date_of_birth: string | null
    passport_number: string | null
    passport_issuance_date: string | null
    passport_expiry_date: string | null
    gender: string | null
    marital_status: string | null
    nationality: string | null
    destination_country: 'UK' | 'Canada' | null
    proposed_course: string | null
    kin_first_name: string | null
    kin_last_name: string | null
    kin_phone: string | null
    kin_email: string | null
    kin_relationship: string | null
    referee_first_name: string | null
    referee_last_name: string | null
    referee_phone: string | null
    referee_email: string | null
    referee_company: string | null
    countries_visited: string | null
    visa_refused: boolean | null
    visa_refusal_reasons: string | null
    declaration_accepted: boolean | null
    status: string
    created_at: string
    submission_date: string | null
}

interface EducationItem {
    id: string
    school_name: string
    course_of_study: string
    certification: string
    duration_start: string
    duration_end: string
}

interface DocumentItem {
    id: string
    name: string
    url: string
    size: number
    file_type: string | null
}

export default function ApplicationDetails() {
    const params = useParams()
    const router = useRouter()
    const [application, setApplication] = useState<Application | null>(null)
    const [education, setEducation] = useState<EducationItem[]>([])
    const [documents, setDocuments] = useState<DocumentItem[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [updatingStatus, setUpdatingStatus] = useState(false)

    useEffect(() => {
        if (params.id) {
            fetchApplicationData(params.id as string)
        }
    }, [params.id])

    const fetchApplicationData = async (applicationId: string) => {
        try {
            console.log('Fetching application data for:', applicationId)

            // Fetch application
            const { data: applicationData, error: appError } = await supabase
                .from('applications')
                .select('*')
                .eq('id', applicationId)
                .single()

            if (appError) {
                console.error('Application fetch error:', appError)
                throw appError
            }
            console.log('Application data:', applicationData)
            setApplication(applicationData)

            // Fetch education
            const { data: educationData, error: eduError } = await supabase
                .from('education')
                .select('*')
                .eq('application_id', applicationId)

            if (eduError) {
                console.error('Education fetch error:', eduError)
                throw eduError
            }
            console.log('Education data:', educationData)
            setEducation(educationData || [])

            // Fetch documents
            const { data: documentsData, error: docError } = await supabase
                .from('documents')
                .select('*')
                .eq('application_id', applicationId)

            if (docError) {
                console.error('Documents fetch error:', docError)
                throw docError
            }
            console.log('Documents data:', documentsData)
            setDocuments(documentsData || [])
        } catch (error) {
            console.error('Error fetching application data:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const updateApplicationStatus = async (newStatus: string) => {
        if (!application) return

        setUpdatingStatus(true)
        try {
            const { error } = await supabase
                .from('applications')
                .update({ status: newStatus })
                .eq('id', application.id)

            if (error) throw error

            setApplication({ ...application, status: newStatus })
        } catch (error) {
            console.error('Error updating status:', error)
            alert('Failed to update application status')
        } finally {
            setUpdatingStatus(false)
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'approved': return 'bg-green-100 text-green-800'
            case 'rejected': return 'bg-red-100 text-red-800'
            case 'under_review': return 'bg-yellow-100 text-yellow-800'
            case 'submitted': return 'bg-blue-100 text-blue-800'
            default: return 'bg-gray-100 text-gray-800'
        }
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
            </div>
        )
    }

    if (!application) {
        return (
            <div className="text-center py-12">
                <h2 className="text-xl font-semibold text-gray-900">Application not found</h2>
                <button
                    onClick={() => router.push('/admin/portal/application')}
                    className="mt-4 bg-brand-blue text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                >
                    Back to Applications
                </button>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <button
                        onClick={() => router.push('/admin/portal/application')}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Applications
                    </button>
                    <h1 className="text-2xl font-bold text-gray-900">
                        {application.first_name} {application.last_name}
                    </h1>
                    <p className="text-gray-600">Application ID: {application.id}</p>
                </div>

                {/* Status Controls */}
                <div className="flex items-center gap-4 mt-4 lg:mt-0">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)}`}>
                        {application.status.replace('_', ' ')}
                    </span>
                    <select
                        value={application.status}
                        onChange={(e) => updateApplicationStatus(e.target.value)}
                        disabled={updatingStatus}
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    >
                        <option value="submitted">Submitted</option>
                        <option value="under_review">Under Review</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Personal Information */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-600">Full Name</label>
                                <p className="text-gray-900">{application.first_name} {application.last_name}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Email</label>
                                <p className="text-gray-900">{application.email}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Phone</label>
                                <p className="text-gray-900">{application.phone}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Date of Birth</label>
                                <p className="text-gray-900">{application.date_of_birth || 'Not provided'}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Gender</label>
                                <p className="text-gray-900 capitalize">{application.gender || 'Not provided'}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Marital Status</label>
                                <p className="text-gray-900">{application.marital_status || 'Not provided'}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Nationality</label>
                                <p className="text-gray-900">{application.nationality || 'Not provided'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Passport Details */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Passport Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-600">Passport Number</label>
                                <p className="text-gray-900">{application.passport_number || 'Not provided'}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Issuance Date</label>
                                <p className="text-gray-900">{application.passport_issuance_date || 'Not provided'}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Expiry Date</label>
                                <p className="text-gray-900">{application.passport_expiry_date || 'Not provided'}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Destination Country</label>
                                <p className="text-gray-900">{application.destination_country || 'Not provided'}</p>
                            </div>
                            <div className="md:col-span-2">
                                <label className="text-sm font-medium text-gray-600">Proposed Course</label>
                                <p className="text-gray-900">{application.proposed_course || 'Not provided'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Education History */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">
                            Education History ({education.length})
                        </h2>
                        {education.length === 0 ? (
                            <p className="text-gray-600">No education history provided</p>
                        ) : (
                            <div className="space-y-4">
                                {education.map((eduItem) => (
                                    <div key={eduItem.id} className="border border-gray-200 rounded-lg p-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-sm font-medium text-gray-600">School Name</label>
                                                <p className="text-gray-900">{eduItem.school_name}</p>
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-gray-600">Course of Study</label>
                                                <p className="text-gray-900">{eduItem.course_of_study}</p>
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-gray-600">Certification</label>
                                                <p className="text-gray-900">{eduItem.certification}</p>
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-gray-600">Duration</label>
                                                <p className="text-gray-900">
                                                    {new Date(eduItem.duration_start).toLocaleDateString()} - {new Date(eduItem.duration_end).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Documents */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">
                            Documents ({documents.length})
                        </h2>
                        {documents.length === 0 ? (
                            <p className="text-gray-600">No documents uploaded</p>
                        ) : (
                            <div className="space-y-3">
                                {documents.map((doc) => (
                                    <div key={doc.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                                                <p className="text-xs text-gray-500">{(doc.size / 1024 / 1024).toFixed(2)} MB • {doc.file_type}</p>
                                            </div>
                                        </div>
                                        <a
                                            href={doc.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-brand-blue hover:text-blue-800 text-sm font-medium"
                                        >
                                            View
                                        </a>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Application Details */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Application Details</h2>
                        <div className="space-y-3">
                            <div>
                                <label className="text-sm font-medium text-gray-600">Application Date</label>
                                <p className="text-gray-900">{new Date(application.created_at).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Submission Date</label>
                                <p className="text-gray-900">
                                    {application.submission_date
                                        ? new Date(application.submission_date).toLocaleDateString()
                                        : 'Not submitted'
                                    }
                                </p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Countries Visited</label>
                                <p className="text-gray-900">{application.countries_visited || 'None listed'}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Visa Refused</label>
                                <p className="text-gray-900">{application.visa_refused ? 'Yes' : 'No'}</p>
                            </div>
                            {application.visa_refused && (
                                <div>
                                    <label className="text-sm font-medium text-gray-600">Refusal Reasons</label>
                                    <p className="text-gray-900">{application.visa_refusal_reasons}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Next of Kin */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Next of Kin</h2>
                        <div className="space-y-3">
                            <div>
                                <label className="text-sm font-medium text-gray-600">Name</label>
                                <p className="text-gray-900">
                                    {application.kin_first_name} {application.kin_last_name}
                                </p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Relationship</label>
                                <p className="text-gray-900">{application.kin_relationship}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Phone</label>
                                <p className="text-gray-900">{application.kin_phone}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Email</label>
                                <p className="text-gray-900">{application.kin_email}</p>
                            </div>
                        </div>
                    </div>

                    {/* Referee */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Referee</h2>
                        <div className="space-y-3">
                            <div>
                                <label className="text-sm font-medium text-gray-600">Name</label>
                                <p className="text-gray-900">
                                    {application.referee_first_name} {application.referee_last_name}
                                </p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Company</label>
                                <p className="text-gray-900">{application.referee_company}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Phone</label>
                                <p className="text-gray-900">{application.referee_phone}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Email</label>
                                <p className="text-gray-900">{application.referee_email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}