'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary-600">StudyAbroad</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              About
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Programs
            </Link>
            <Link href="/enroll" className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700">
              Enroll Now
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
              About
            </Link>
            <Link href="/programs" className="block text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
              Programs
            </Link>
            <Link href="/enroll" className="block bg-primary-600 text-white px-3 py-2 text-base font-medium rounded-md">
              Enroll Now
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
