// app/enroll/EnrollForm.tsx
'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import FormProgress from '@/components/multi-step-form/FormProgress'
import PersonalInfoStep from '@/components/multi-step-form/steps/PersonalInfoStep'
import AddressStep from '@/components/multi-step-form/steps/AddressStep'
import PassportStep from '@/components/multi-step-form/steps/PassportStep'
import TravelHistoryStep from '@/components/multi-step-form/steps/TravelHistoryStep'
import EducationStep from '@/components/multi-step-form/steps/EducationStep'
import RefereeStep from '@/components/multi-step-form/steps/RefereeStep'
import NextOfKinStep from '@/components/multi-step-form/steps/NextOfKinStep'
import DeclarationStep from '@/components/multi-step-form/steps/DeclarationStep'
import DocumentsStep from '@/components/multi-step-form/steps/DocumentsStep'
import CompletionStep from '@/components/multi-step-form/steps/CompletionStep'
import { CompleteApplication, PersonalInfo, Address, PassportDetails, TravelHistory, Education, Referee, NextOfKin, Declaration, Documents } from '@/lib/schemas'
import { useSearchParams } from 'next/navigation'

const STEPS = [
    'Personal Info',
    'Address',
    'Passport Details',
    'Travel History',
    'Education',
    'Referee',
    'Next of Kin',
    'Declaration',
    'Documents',
    'Complete'
]

const STORAGE_KEY = 'study_abroad_application'

interface StoredApplicationData {
    formData: Partial<CompleteApplication>
    currentStep: number
}

export default function EnrollForm() {
    const searchParams = useSearchParams()
    const [currentStep, setCurrentStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState<Partial<CompleteApplication>>({
        education: [],
        documents: [],
        visa_refused: false,
        declaration_accepted: false,
    })

    // Load saved data from localStorage on component mount
    useEffect(() => {
        const savedData = localStorage.getItem(STORAGE_KEY)
        if (savedData) {
            try {
                const parsedData: StoredApplicationData = JSON.parse(savedData)
                setFormData(parsedData.formData || {})
                setCurrentStep(parsedData.currentStep || 1)
            } catch (error) {
                console.error('Error loading saved data:', error)
                localStorage.removeItem(STORAGE_KEY)
            }
        }
    }, [])

    // Set destination country from URL params
    useEffect(() => {
        const country = searchParams?.get('country')
        if (country === 'UK' || country === 'Canada') {
            setFormData(prev => ({
                ...prev,
                destination_country: country as 'UK' | 'Canada'
            }))
        }
    }, [searchParams])

    // Save data to localStorage whenever formData or currentStep changes
    useEffect(() => {
        const dataToStore: StoredApplicationData = {
            formData,
            currentStep
        }
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToStore))
        } catch (error) {
            console.error('Error saving to localStorage:', error)
        }
    }, [formData, currentStep])

    const updateFormData = (stepData: Partial<CompleteApplication>) => {
        setFormData(prev => ({ ...prev, ...stepData }))
    }

    const nextStep = () => {
        setCurrentStep(prev => Math.min(prev + 1, STEPS.length))
    }

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1))
    }

    const handlePersonalInfo = (data: PersonalInfo) => {
        updateFormData(data)
        nextStep()
    }

    const handleAddress = (data: Address) => {
        updateFormData(data)
        nextStep()
    }

    const handlePassport = (data: PassportDetails) => {
        updateFormData(data)
        nextStep()
    }

    const handleTravelHistory = (data: TravelHistory) => {
        updateFormData(data)
        nextStep()
    }

    const handleEducation = (data: Education) => {
        updateFormData(data)
        nextStep()
    }

    const handleReferee = (data: Referee) => {
        updateFormData(data)
        nextStep()
    }

    const handleNextOfKin = (data: NextOfKin) => {
        updateFormData(data)
        nextStep()
    }

    const handleDeclaration = (data: Declaration) => {
        updateFormData(data)
        nextStep()
    }

    const handleDocuments = async (data: Documents) => {
        updateFormData(data)
        await submitApplication({ ...formData, ...data } as CompleteApplication)
    }

    const submitApplication = async (completeData: CompleteApplication) => {
        setIsSubmitting(true)

        try {
            const requiredFields = [
                'first_name', 'last_name', 'phone', 'email', 'address',
                'city', 'state', 'zip_code', 'country', 'destination_country',
                'proposed_course'
            ]

            const missingFields = requiredFields.filter(field =>
                !completeData[field as keyof CompleteApplication]
            )

            if (missingFields.length > 0) {
                throw new Error(`Missing required fields: ${missingFields.join(', ')}`)
            }

            const payload = {
                applicationData: {
                    first_name: completeData.first_name!,
                    last_name: completeData.last_name!,
                    phone: completeData.phone!,
                    email: completeData.email!,
                    address: completeData.address!,
                    address_line_2: completeData.address_line_2,
                    city: completeData.city!,
                    state: completeData.state!,
                    zip_code: completeData.zip_code!,
                    country: completeData.country!,
                    date_of_birth: completeData.date_of_birth,
                    passport_number: completeData.passport_number,
                    passport_issuance_date: completeData.passport_issuance_date,
                    passport_expiry_date: completeData.passport_expiry_date,
                    gender: completeData.gender,
                    marital_status: completeData.marital_status,
                    nationality: completeData.nationality,
                    destination_country: completeData.destination_country!,
                    proposed_course: completeData.proposed_course!,
                    countries_visited: completeData.countries_visited,
                    visa_refused: completeData.visa_refused || false,
                    visa_refusal_reasons: completeData.visa_refusal_reasons,
                    kin_first_name: completeData.kin_first_name,
                    kin_last_name: completeData.kin_last_name,
                    kin_phone: completeData.kin_phone,
                    kin_email: completeData.kin_email,
                    kin_relationship: completeData.kin_relationship,
                    referee_first_name: completeData.referee_first_name,
                    referee_last_name: completeData.referee_last_name,
                    referee_phone: completeData.referee_phone,
                    referee_email: completeData.referee_email,
                    referee_company: completeData.referee_company,
                    declaration_accepted: completeData.declaration_accepted || false,
                },
                educationData: completeData.education || [],
                documentData: completeData.documents || []
            }

            const response = await fetch('/api/applications/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.error || 'Failed to submit application')
            }

            console.log('Application submitted successfully:', result)
            localStorage.removeItem(STORAGE_KEY)
            nextStep()

        } catch (error) {
            console.error('Submission error:', error)
            const errorMessage = error instanceof Error
                ? error.message
                : 'Failed to submit application. Please try again.'

            alert(errorMessage)
            setCurrentStep(9)
        } finally {
            setIsSubmitting(false)
        }
    }

    const startNewApplication = () => {
        setFormData({
            education: [],
            documents: [],
            visa_refused: false,
            declaration_accepted: false,
        })
        setCurrentStep(1)
        localStorage.removeItem(STORAGE_KEY)
    }

    const clearApplication = () => {
        if (confirm('Are you sure you want to clear your application? All progress will be lost.')) {
            startNewApplication()
        }
    }

    const renderCurrentStep = () => {
        if (isSubmitting) {
            return (
                <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue mx-auto mb-4"></div>
                    <p className="text-gray-600">Submitting your application...</p>
                    <p className="text-sm text-gray-500 mt-2">Please don't close this window</p>
                </div>
            )
        }

        switch (currentStep) {
            case 1:
                return (
                    <PersonalInfoStep
                        data={formData as PersonalInfo}
                        onNext={handlePersonalInfo}
                    />
                )
            case 2:
                return (
                    <AddressStep
                        data={formData as Address}
                        onNext={handleAddress}
                        onBack={prevStep}
                    />
                )
            case 3:
                return (
                    <PassportStep
                        data={formData as PassportDetails}
                        onNext={handlePassport}
                        onBack={prevStep}
                    />
                )
            case 4:
                return (
                    <TravelHistoryStep
                        data={formData as TravelHistory}
                        onNext={handleTravelHistory}
                        onBack={prevStep}
                    />
                )
            case 5:
                return (
                    <EducationStep
                        data={formData as Education}
                        onNext={handleEducation}
                        onBack={prevStep}
                    />
                )
            case 6:
                return (
                    <RefereeStep
                        data={formData as Referee}
                        onNext={handleReferee}
                        onBack={prevStep}
                    />
                )
            case 7:
                return (
                    <NextOfKinStep
                        data={formData as NextOfKin}
                        onNext={handleNextOfKin}
                        onBack={prevStep}
                    />
                )
            case 8:
                return (
                    <DeclarationStep
                        data={formData as Declaration}
                        onNext={handleDeclaration}
                        onBack={prevStep}
                    />
                )
            case 9:
                return (
                    <DocumentsStep
                        data={formData as Documents}
                        onNext={handleDocuments}
                        onBack={prevStep}
                        isSubmitting={isSubmitting}
                    />
                )
            case 10:
                return (
                    <CompletionStep
                        firstName={formData.first_name || ''}
                        destinationCountry={formData.destination_country || ''}
                        onBack={prevStep}
                        onStartNew={startNewApplication}
                    />
                )
            default:
                return (
                    <div className="text-center py-12">
                        <p className="text-gray-600">Invalid step</p>
                        <button
                            onClick={() => setCurrentStep(1)}
                            className="mt-4 bg-brand-blue text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                        >
                            Start Over
                        </button>
                    </div>
                )
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-brand-blue to-blue-900 text-white py-20 lg:py-24">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Start Your Application
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            Begin your journey to studying in the UK or Canada with our streamlined application process
                        </p>
                        {formData.destination_country && (
                            <div className="mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                                <span className="text-lg">
                                    {formData.destination_country === 'UK' ? '🇬🇧' : '🇨🇦'}
                                </span>
                                <span className="font-medium">
                                    Applying to {formData.destination_country}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-8 lg:py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Progress Section */}
                    {currentStep < 10 && (
                        <div className="mb-8 lg:mb-12">
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                                <div className="text-center mb-6 sm:mb-8">
                                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                                        Application Progress
                                    </h2>
                                    <p className="text-sm sm:text-base text-gray-600">
                                        Complete all steps to submit your application
                                    </p>

                                    {/* Mobile Progress Summary */}
                                    <div className="sm:hidden mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-blue-900">
                                                Step {currentStep} of {STEPS.length - 1}
                                            </span>
                                            <span className="text-sm text-blue-700">
                                                {Math.round((currentStep / (STEPS.length - 1)) * 100)}% Complete
                                            </span>
                                        </div>
                                        <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                                            <div
                                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                                style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    {/* Desktop Progress Bar */}
                                    <div className="hidden sm:block w-full bg-gray-200 rounded-full h-3 mb-8">
                                        <div
                                            className="bg-brand-blue h-3 rounded-full transition-all duration-500 ease-out"
                                            style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
                                        ></div>
                                    </div>

                                    {/* Mobile Progress Steps */}
                                    <div className="sm:hidden space-y-4">
                                        {STEPS.slice(0, -1).map((step, index) => {
                                            const stepNumber = index + 1;
                                            const isCompleted = stepNumber < currentStep;
                                            const isCurrent = stepNumber === currentStep;
                                            const isUpcoming = stepNumber > currentStep;

                                            return (
                                                <div
                                                    key={stepNumber}
                                                    className={`flex items-center p-3 rounded-lg border transition-colors ${isCompleted
                                                        ? 'bg-green-50 border-green-200'
                                                        : isCurrent
                                                            ? 'bg-blue-50 border-blue-200 shadow-sm'
                                                            : 'bg-gray-50 border-gray-200'
                                                        }`}
                                                >
                                                    <div
                                                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${isCompleted
                                                            ? 'bg-green-500 text-white'
                                                            : isCurrent
                                                                ? 'bg-brand-blue text-white'
                                                                : 'bg-gray-300 text-gray-600'
                                                            }`}
                                                    >
                                                        {isCompleted ? (
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        ) : (
                                                            stepNumber
                                                        )}
                                                    </div>
                                                    <div className="ml-3 flex-1">
                                                        <p className={`text-sm font-medium ${isCompleted
                                                            ? 'text-green-900'
                                                            : isCurrent
                                                                ? 'text-blue-900'
                                                                : 'text-gray-600'
                                                            }`}>
                                                            {step}
                                                        </p>
                                                        <p className={`text-xs ${isCompleted
                                                            ? 'text-green-700'
                                                            : isCurrent
                                                                ? 'text-blue-700'
                                                                : 'text-gray-500'
                                                            }`}>
                                                            {isCompleted ? 'Completed' : isCurrent ? 'Current Step' : 'Upcoming'}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Desktop Progress Steps */}
                                    <div className="hidden sm:grid grid-cols-2 lg:grid-cols-5 gap-4">
                                        {STEPS.slice(0, -1).map((step, index) => {
                                            const stepNumber = index + 1;
                                            const isCompleted = stepNumber < currentStep;
                                            const isCurrent = stepNumber === currentStep;
                                            const isUpcoming = stepNumber > currentStep;

                                            return (
                                                <div
                                                    key={stepNumber}
                                                    className={`text-center p-4 rounded-xl border-2 transition-all duration-300 ${isCompleted
                                                        ? 'bg-green-50 border-green-200 shadow-sm'
                                                        : isCurrent
                                                            ? 'bg-blue-50 border-brand-blue shadow-md'
                                                            : 'bg-gray-50 border-gray-200'
                                                        }`}
                                                >
                                                    <div
                                                        className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3 ${isCompleted
                                                            ? 'bg-green-500 text-white shadow-sm'
                                                            : isCurrent
                                                                ? 'bg-brand-blue text-white shadow-md'
                                                                : 'bg-gray-300 text-gray-600'
                                                            }`}
                                                    >
                                                        {isCompleted ? (
                                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        ) : (
                                                            stepNumber
                                                        )}
                                                    </div>
                                                    <h3
                                                        className={`font-semibold text-sm mb-1 ${isCompleted
                                                            ? 'text-green-900'
                                                            : isCurrent
                                                                ? 'text-blue-900'
                                                                : 'text-gray-600'
                                                            }`}
                                                    >
                                                        {step.split(' ')[0]}
                                                    </h3>
                                                    <p
                                                        className={`text-xs ${isCompleted
                                                            ? 'text-green-700'
                                                            : isCurrent
                                                                ? 'text-blue-700'
                                                                : 'text-gray-500'
                                                            }`}
                                                    >
                                                        {step.split(' ').slice(1).join(' ')}
                                                    </p>
                                                    <div className="mt-2">
                                                        <span
                                                            className={`inline-block px-2 py-1 text-xs rounded-full ${isCompleted
                                                                ? 'bg-green-100 text-green-800'
                                                                : isCurrent
                                                                    ? 'bg-blue-100 text-blue-800'
                                                                    : 'bg-gray-100 text-gray-600'
                                                                }`}
                                                        >
                                                            {isCompleted ? '✓ Done' : isCurrent ? 'Current' : 'Pending'}
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="text-center sm:text-left">
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold text-brand-blue">{currentStep}</span> of{' '}
                                            <span className="font-semibold">{STEPS.length - 1}</span> steps completed
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {STEPS.length - 1 - currentStep} steps remaining
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="hidden sm:block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                                            {Math.round((currentStep / (STEPS.length - 1)) * 100)}%
                                        </div>

                                        {currentStep > 1 && currentStep < 10 && (
                                            <button
                                                onClick={clearApplication}
                                                className="text-xs sm:text-sm text-gray-500 hover:text-red-600 transition-colors bg-gray-100 hover:bg-red-50 px-3 py-2 rounded-lg"
                                            >
                                                Clear Application
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Form Section */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        {currentStep < 10 && (
                            <CardHeader className="bg-gradient-to-r from-brand-blue to-blue-800 text-white py-6">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-xl lg:text-2xl font-bold text-center flex-1">
                                        {STEPS[currentStep - 1]}
                                    </CardTitle>
                                    <div className="hidden sm:block text-sm bg-white/20 px-3 py-1 rounded-full">
                                        Step {currentStep} of {STEPS.length - 1}
                                    </div>
                                </div>
                            </CardHeader>
                        )}
                        <CardContent className="p-6 lg:p-8">
                            {renderCurrentStep()}
                        </CardContent>
                    </div>

                    {/* Application Info Cards */}
                    {currentStep < 10 && (
                        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Features Card */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                                <h3 className="font-bold text-gray-900 mb-4">What's Included</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm text-gray-700">
                                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        University selection guidance
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700">
                                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        Application review
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700">
                                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        Document verification
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700">
                                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        Personalized support
                                    </li>
                                </ul>
                            </div>

                            {/* Support Card */}
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-blue-900">Need Help?</h3>
                                </div>
                                <p className="text-blue-800 text-sm mb-3">
                                    Our team is here to assist you with any questions about the application process.
                                </p>
                                <div className="text-blue-700 text-sm space-y-1">
                                    <p className="flex items-center gap-2">
                                        <span>📞</span>
                                        <span>+234 800 123 4567</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span>✉️</span>
                                        <span>support@BeyondBorders.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Save Progress Notice */}
                    {currentStep < 10 && (
                        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-blue-800 font-medium">Your progress is saved automatically</p>
                                    <p className="text-xs text-blue-700">You can return anytime to complete your application</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}