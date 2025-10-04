'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'

const enrollmentSchema = z.object({
  full_name: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  country: z.enum(['UK', 'Canada'], { required_error: 'Please select a country' }),
  program: z.string().min(5, 'Please specify your program of interest'),
})

type EnrollmentFormData = z.infer<typeof enrollmentSchema>

export default function Enroll() {
  const searchParams = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [uploadError, setUploadError] = useState('')
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EnrollmentFormData>({
    resolver: zodResolver(enrollmentSchema),
    defaultValues: {
      country: (searchParams?.get('country') as 'UK' | 'Canada') || undefined,
    },
  })

  useEffect(() => {
    const country = searchParams?.get('country')
    if (country === 'UK' || country === 'Canada') {
      setValue('country', country)
    }
  }, [searchParams, setValue])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError('')
    const file = e.target.files?.[0]
    
    if (file) {
      const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png']
      const maxSize = 5 * 1024 * 1024
      
      if (!validTypes.includes(file.type)) {
        setUploadError('Only PDF, JPG, and PNG files are allowed')
        setUploadedFile(null)
        return
      }
      
      if (file.size > maxSize) {
        setUploadError('File size must be less than 5MB')
        setUploadedFile(null)
        return
      }
      
      setUploadedFile(file)
    }
  }

  const onSubmit = async (data: EnrollmentFormData) => {
    setIsSubmitting(true)
    
    try {
      let documentUrl = ''
      
      if (uploadedFile) {
        const fileExt = uploadedFile.name.split('.').pop()
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
        const filePath = `enrollments/${fileName}`
        
        const { error: uploadError } = await supabase.storage
          .from('documents')
          .upload(filePath, uploadedFile)
        
        if (uploadError) {
          throw new Error('Failed to upload document')
        }
        
        const { data: urlData } = supabase.storage
          .from('documents')
          .getPublicUrl(filePath)
        
        documentUrl = urlData.publicUrl
      }
      
      const enrollmentData = {
        ...data,
        document_url: documentUrl,
        payment_status: 'pending',
      }
      
      const { data: enrollment, error: dbError } = await supabase
        .from('enrollments')
        .insert([enrollmentData])
        .select()
        .single()
      
      if (dbError) {
        throw new Error('Failed to save enrollment')
      }
      
      const response = await fetch('/api/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          amount: 50000,
          enrollmentId: enrollment.id,
        }),
      })
      
      const paymentData = await response.json()
      
      if (paymentData.authorization_url) {
        window.location.href = paymentData.authorization_url
      } else {
        throw new Error('Failed to initialize payment')
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Enroll Now</h1>
          <p className="text-xl text-primary-100">
            Start your study abroad journey today
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Enrollment Application</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  {...register('full_name')}
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="John Doe"
                />
                {errors.full_name && (
                  <p className="mt-1 text-sm text-red-600">{errors.full_name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                  Country of Study *
                </label>
                <select
                  {...register('country')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                >
                  <option value="">Select a country</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Canada">Canada</option>
                </select>
                {errors.country && (
                  <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                  Program of Interest *
                </label>
                <input
                  {...register('program')}
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="e.g., Computer Science, Business Administration"
                />
                {errors.program && (
                  <p className="mt-1 text-sm text-red-600">{errors.program.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="document" className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Documents (Optional)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, JPG, PNG up to 5MB</p>
                    {uploadedFile && (
                      <p className="text-sm text-green-600 mt-2">✓ {uploadedFile.name}</p>
                    )}
                    {uploadError && (
                      <p className="text-sm text-red-600 mt-2">{uploadError}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                <h3 className="font-semibold text-primary-900 mb-2">Application Fee: $500</h3>
                <p className="text-sm text-primary-800">
                  You will be redirected to our secure payment gateway to complete your enrollment.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
              </button>

              <p className="text-sm text-gray-600 text-center">
                By submitting this form, you agree to our terms and conditions
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
