'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function WhatWeOffer() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    }, [])

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        data-aos="fade-up"
                    >
                        Our
                        <span
                            className="block text-brand-blue"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Services
                        </span>
                    </h2>
                    <p
                        className="text-xl text-gray-600"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        Comprehensive study abroad services designed to make your international education journey seamless and successful
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Admission Processing */}
                    <div
                        className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-yellow/30 transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-blue-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:transform group-hover:rotate-6 transition-transform duration-300">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Admission Processing</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We guide students through school selection, application preparation, and submission to institutions across the UK, Canada, Australia, and other study destinations.
                        </p>
                    </div>

                    {/* Visa Guidance & Support */}
                    <div
                        className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-yellow/30 transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-blue-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:transform group-hover:rotate-6 transition-transform duration-300">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Visa Guidance & Support</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We assist with documentation review, application preparation, and compliance checks to improve visa approval outcomes.
                        </p>
                    </div>

                    {/* SOP & Documentation Support */}
                    <div
                        className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-yellow/30 transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-blue-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:transform group-hover:rotate-6 transition-transform duration-300">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">SOP & Documentation Support</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We help students prepare strong Statements of Purpose, Letters of Explanation, and other required documents for admission and visa applications.
                        </p>
                    </div>

                    {/* Scholarship Guidance */}
                    <div
                        className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-yellow/30 transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-blue-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:transform group-hover:rotate-6 transition-transform duration-300">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Scholarship Guidance</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We identify and guide students toward scholarship opportunities and funding options where applicable.
                        </p>
                    </div>

                    {/* Pre-Departure Support */}
                    <div
                        className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-yellow/30 transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-blue-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:transform group-hover:rotate-6 transition-transform duration-300">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Pre-Departure Support</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We prepare students for relocation, including travel guidance, documentation checks, and basic settlement orientation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}