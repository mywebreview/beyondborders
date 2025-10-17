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
                        What We
                        <span
                            className="block text-brand-blue"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Offer
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
                    {/* University Selection */}
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
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">University Selection</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Personalized university matching based on your academic profile, budget, and career goals across 500+ institutions in UK and Canada.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Best-fit program identification
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Admission requirements analysis
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Scholarship opportunity matching
                            </li>
                        </ul>
                    </div>

                    {/* Application Support */}
                    <div
                        className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-yellow/30 transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-blue-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:transform group-hover:rotate-6 transition-transform duration-300">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Support</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            End-to-end application guidance including document preparation, personal statements, and submission management.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Document verification & preparation
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Personal statement writing
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Application tracking & follow-up
                            </li>
                        </ul>
                    </div>

                    {/* Visa Assistance */}
                    <div
                        className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-yellow/30 transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-blue-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:transform group-hover:rotate-6 transition-transform duration-300">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Visa Assistance</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Expert visa guidance with 98% success rate. We handle everything from document preparation to interview coaching.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Financial document preparation
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Visa application submission
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Interview preparation & mock sessions
                            </li>
                        </ul>
                    </div>

                    {/* Pre-Departure Support */}
                    <div
                        className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-yellow/30 transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-blue-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:transform group-hover:rotate-6 transition-transform duration-300">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Pre-Departure Support</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Comprehensive preparation for your new life abroad including accommodation, travel, and cultural orientation.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Accommodation arrangement
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Travel & flight booking guidance
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Cultural orientation sessions
                            </li>
                        </ul>
                    </div>

                    {/* Scholarship Guidance */}
                    <div
                        className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-yellow/30 transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-blue-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:transform group-hover:rotate-6 transition-transform duration-300">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Scholarship Guidance</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Access exclusive scholarships and financial aid opportunities worth over $2M annually for Nigerian students.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Scholarship eligibility assessment
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Application essay writing
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Exclusive partner scholarships
                            </li>
                        </ul>
                    </div>

                    {/* Post-Arrival Support */}
                    <div
                        className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-yellow/30 transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay="700"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-blue-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:transform group-hover:rotate-6 transition-transform duration-300">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Post-Arrival Support</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Continuous support after you arrive, helping you settle in and succeed in your new academic environment.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Airport pickup arrangement
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Bank account & phone setup
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                24/7 emergency support
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}