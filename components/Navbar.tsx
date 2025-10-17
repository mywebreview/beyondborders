'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isStudyDestinationsOpen, setIsStudyDestinationsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all bg-white/95 duration-500 ${isScrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-900/10 py-2'
        : 'bg-transparent py-4'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
          >
            <Image
                          src="/logo.png"
                          alt="Company Logo"
                          width={120}
                          height={40}
                          priority 
                        />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink href="/" isScrolled={isScrolled}>
              Home
            </NavLink>
            <NavLink href="/about" isScrolled={isScrolled}>
              About
            </NavLink>
            <NavLink href="/programs" isScrolled={isScrolled}>
              Programs
            </NavLink>

            {/* Study Destinations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsStudyDestinationsOpen(true)}
              onMouseLeave={() => setIsStudyDestinationsOpen(false)}
            >
              <button className={`relative px-4 py-2 font-medium transition-all duration-300 group flex items-center gap-1 ${isScrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-gray-700 hover:text-brand-blue'
                }`}>
                <span>Study Destinations</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isStudyDestinationsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-yellow to-yellow-400 group-hover:w-full transition-all duration-300"></div>
              </button>

              {/* Dropdown Menu */}
              {isStudyDestinationsOpen && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                  <Link
                    href="/study-uk"
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-brand-blue transition-colors duration-200 group"
                  >
                    <span>Study in UK</span>
                  </Link>
                  <Link
                    href="/study-canada"
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-brand-blue transition-colors duration-200 group"
                  >
                    <span>Study in Canada</span>
                  </Link>
                </div>
              )}
            </div>

            <NavLink href="/ielts" isScrolled={isScrolled}>
              IELTS
            </NavLink>

            <div className="w-px h-6 bg-gray-300 mx-2"></div>

            <Link
              href="/contact"
              className="relative group bg-gradient-to-r from-brand-yellow to-yellow-400 text-brand-blue px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg hover:shadow-xl hover:shadow-yellow-400/30 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${isScrolled
                  ? 'bg-gray-100 hover:bg-gray-200'
                  : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm'
                }`}
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 top-1 w-6 h-0.5 bg-brand-blue transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : ''
                  }`}></span>
                <span className={`absolute left-0 top-3 w-6 h-0.5 bg-brand-blue transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                <span className={`absolute left-0 top-5 w-6 h-0.5 bg-brand-blue transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : ''
                  }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 scroll-m-0 overflow-hidden ${isOpen ? 'max-h-full opacity-100 py-4' : 'max-h-0 opacity-0'
          }`}>
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6 space-y-4">
            <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
              <HomeIcon />
              Home
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>
              <AboutIcon />
              About Us
            </MobileNavLink>
            <MobileNavLink href="/programs" onClick={() => setIsOpen(false)}>
              <ProgramsIcon />
              Programs
            </MobileNavLink>

            {/* Mobile Study Destinations */}
            <div className="space-y-2">
              <div className="px-4 py-2 text-sm font-semibold text-gray-500">Study Destinations</div>
              <MobileNavLink href="/study-uk" onClick={() => setIsOpen(false)}>
                <UKIcon />
                Study in UK
              </MobileNavLink>
              <MobileNavLink href="/study-canada" onClick={() => setIsOpen(false)}>
                <CanadaIcon />
                Study in Canada
              </MobileNavLink>
            </div>

            <MobileNavLink href="/ielts" onClick={() => setIsOpen(false)}>
              <IELTSIcon />
              IELTS Preparation
            </MobileNavLink>

            <div className="pt-4 space-y-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 w-full px-4 py-3 bg-gradient-to-r from-brand-yellow to-yellow-400 text-brand-blue font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <EnrollIcon />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Desktop Navigation Link Component
function NavLink({ href, children, isScrolled }: { href: string; children: React.ReactNode; isScrolled: boolean }) {
  return (
    <Link
      href={href}
      className={`relative px-4 py-2 font-medium transition-all duration-300 group ${isScrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-gray-700 hover:text-brand-blue'
        }`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-yellow to-yellow-400 group-hover:w-full transition-all duration-300"></div>
    </Link>
  )
}

// Mobile Navigation Link Component
function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-xl transition-all duration-200 group"
    >
      {children}
    </Link>
  )
}

// Icon Components for Mobile Menu
function HomeIcon() {
  return (
    <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-yellow transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )
}

function AboutIcon() {
  return (
    <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-yellow transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function ProgramsIcon() {
  return (
    <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-yellow transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )
}

function UKIcon() {
  return (
    <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-yellow transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )
}

function CanadaIcon() {
  return (
    <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-yellow transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  )
}

function IELTSIcon() {
  return (
    <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-yellow transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

function ContactIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function EnrollIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  )
}