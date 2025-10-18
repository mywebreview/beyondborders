// app/enroll/page.tsx
import { Suspense } from 'react'
import EnrollForm from './EnrollForm'

export default function EnrollPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading application form...</p>
        </div>
      </div>
    }>
      <EnrollForm />
    </Suspense>
  )
}