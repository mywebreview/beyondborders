'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function DreamDestinations() {
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
                        Your Dream
                        <span
                            className="block text-brand-blue"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Study Destination
                        </span>
                    </h2>
                    <p
                        className="text-xl text-gray-600"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        Choose from world-class education in the UK and Canada - two of the most popular destinations for Nigerian students
                    </p>
                </div>

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* UK Card */}
                    <div
                        className="group relative bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500"
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <img src="data:image/png;base64,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" className="w-12 h-8 bg-red-600 relative rounded shadow-lg" alt="" />                            <h3 className="text-2xl font-bold text-gray-900">United Kingdom</h3>
                        </div>

                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                            World-renowned universities with rich history and excellent post-study work opportunities in the heart of Europe.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                <span className="text-gray-700 font-medium">1-3 Year Programs</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                <span className="text-gray-700 font-medium">Post-Study Work</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                <span className="text-gray-700 font-medium">£10K+ Scholarships</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                <span className="text-gray-700 font-medium">World Top 100</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                                <span className="font-semibold text-brand-blue">200+</span> Partner Universities
                            </div>
                            <Link
                                href="/uk-programs"
                                className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300 group"
                            >
                                Explore UK
                                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </Link>
                        </div>
                    </div>

                    {/* Canada Card */}
                    <div
                        className="group relative bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 border border-red-100 hover:shadow-2xl hover:border-red-200 transition-all duration-500"
                        data-aos="fade-left"
                        data-aos-delay="400"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/1024px-Flag_of_Canada.svg.png" className="w-12 h-8 bg-red-600 relative rounded shadow-lg" alt="" />
                            <h3 className="text-2xl font-bold text-gray-900">Canada</h3>
                        </div>

                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                            High-quality education, affordable tuition fees, and excellent immigration pathways for international students.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                <span className="text-gray-700 font-medium">2-4 Year Programs</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                <span className="text-gray-700 font-medium">PR Pathways</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                <span className="text-gray-700 font-medium">Work While Study</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                <span className="text-gray-700 font-medium">Family Friendly</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                                <span className="font-semibold text-brand-blue">300+</span> Partner Universities
                            </div>
                            <Link
                                href="/canada-programs"
                                className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300 group"
                            >
                                Explore Canada
                                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Comparison Section */}
                <div
                    className="bg-gradient-to-r from-brand-blue to-blue-900 rounded-3xl p-8 text-white"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    <h3 className="text-2xl font-bold text-center mb-8">Why Choose Either Destination?</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div
                            className="text-center p-6"
                            data-aos="zoom-in"
                            data-aos-delay="800"
                        >
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-lg mb-2">Affordable Education</h4>
                            <p className="text-blue-100">Competitive tuition fees with numerous scholarship opportunities</p>
                        </div>

                        <div
                            className="text-center p-6"
                            data-aos="zoom-in"
                            data-aos-delay="1000"
                        >
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-lg mb-2">Global Recognition</h4>
                            <p className="text-blue-100">Degrees recognized worldwide with excellent career prospects</p>
                        </div>

                        <div
                            className="text-center p-6"
                            data-aos="zoom-in"
                            data-aos-delay="1200"
                        >
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-lg mb-2">Vibrant Communities</h4>
                            <p className="text-blue-100">Large Nigerian communities and excellent student support systems</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div
                    className="text-center mt-12"
                    data-aos="fade-up"
                    data-aos-delay="1400"
                >
                    <p className="text-gray-600 mb-6 text-lg">
                        Not sure which destination is right for you?
                    </p>
                    <Link
                        href="/free-consultation"
                        className="inline-flex items-center gap-2 bg-brand-yellow text-brand-blue px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-yellow-400/30 transform hover:-translate-y-1 transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Get Free Destination Advice
                    </Link>
                </div>
            </div>
        </section>
    )
}