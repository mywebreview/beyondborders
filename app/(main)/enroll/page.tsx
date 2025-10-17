// app/enroll/page.tsx
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
import { supabase } from '@/lib/supabase/client'
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

export default function Enroll() {
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
        const parsedData = JSON.parse(savedData)
        setFormData(parsedData.formData || {})
        setCurrentStep(parsedData.currentStep || 1)
      } catch (error) {
        console.error('Error loading saved data:', error)
      }
    }
  }, [])

  // Set destination country from URL params
  useEffect(() => {
    const country = searchParams?.get('country')
    if (country === 'UK' || country === 'Canada') {
      setFormData(prev => ({ ...prev, destination_country: country }))
    }
  }, [searchParams])

  // Save data to localStorage whenever formData or currentStep changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ formData, currentStep }))
  }, [formData, currentStep])

  const updateFormData = (stepData: any) => {
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
      // Prepare the payload for the API
      const payload = {
        applicationData: {
          first_name: completeData.first_name,
          last_name: completeData.last_name,
          phone: completeData.phone,
          email: completeData.email,
          address: completeData.address,
          address_line_2: completeData.address_line_2,
          city: completeData.city,
          state: completeData.state,
          zip_code: completeData.zip_code,
          country: completeData.country,
          date_of_birth: completeData.date_of_birth,
          passport_number: completeData.passport_number,
          passport_issuance_date: completeData.passport_issuance_date,
          passport_expiry_date: completeData.passport_expiry_date,
          gender: completeData.gender,
          marital_status: completeData.marital_status,
          nationality: completeData.nationality,
          destination_country: completeData.destination_country,
          proposed_course: completeData.proposed_course,
          countries_visited: completeData.countries_visited,
          visa_refused: completeData.visa_refused,
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
          declaration_accepted: completeData.declaration_accepted,
        },
        educationData: completeData.education || [],
        documentData: completeData.documents || []
      }

      // Submit to API route which handles database insertion and email sending
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

      // Clear localStorage on successful submission
      localStorage.removeItem(STORAGE_KEY)

      nextStep() // Move to completion step

    } catch (error) {
      console.error('Submission error:', error)
      alert(error instanceof Error ? error.message : 'Failed to submit application. Please try again.')
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

  const renderCurrentStep = () => {
    if (isSubmitting) {
      return (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-yellow mx-auto mb-4"></div>
          <p className="text-gray-600">Submitting your application...</p>
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
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-blue to-blue-900 text-white py-40 lg:py-40">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Start Your Application
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Begin your journey to studying in the UK or Canada with our streamlined application process
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Section */}
          {currentStep < 10 && (
            <div className="mb-8 lg:mb-12">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    Application Progress
                  </h2>
                  <p className="text-gray-600">
                    Complete all steps to submit your application
                  </p>
                </div>

                <FormProgress
                  currentStep={currentStep}
                  totalSteps={STEPS.length}
                  stepTitles={STEPS}
                />
              </div>
            </div>
          )}

          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {currentStep < 10 && (
              <CardHeader className="bg-gradient-to-r from-brand-blue to-blue-800 text-white py-6">
                <CardTitle className="text-xl lg:text-2xl font-bold text-center">
                  {STEPS[currentStep - 1]}
                </CardTitle>
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
                <div className="text-blue-700 text-sm">
                  <p>📞 +234 800 123 4567</p>
                  <p>✉️ support@BeyondBorders.com</p>
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