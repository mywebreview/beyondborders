'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function WhyTrusted() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    }, [])

    return (
        <section className="relative py-20 bg-gradient-to-b from-white to-gray-50/30 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-brand-yellow/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div
                        className="inline-flex items-center gap-2 bg-brand-yellow/10 text-brand-blue px-4 py-2 rounded-full text-sm font-semibold mb-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse"></div>
                        TRUSTED BY THOUSANDS
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        data-aos="fade-up"
                    >
                        Why Students & Parents
                        <span
                            className="block text-brand-blue mt-2"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Trust Our Expertise
                        </span>
                    </h2>
                    <p
                        className="text-xl text-gray-600 leading-relaxed"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        With over 15 years of dedicated service, we've perfected the art of transforming
                        study abroad dreams into successful realities for Nigerian students.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Trust Indicators */}
                    <div className="space-y-8">
                        {/* Trust Metrics */}
                        <div className="grid grid-cols-2 gap-6">
                            <TrustMetric
                                number="5,000+"
                                label="Successful Students"
                                description="Nigerian students placed in top universities"
                                delay="200"
                            />
                            <TrustMetric
                                number="98%"
                                label="Visa Success Rate"
                                description="Highest success rate in the industry"
                                accent
                                delay="300"
                            />
                            <TrustMetric
                                number="500+"
                                label="Partner Universities"
                                description="Across UK & Canada's best institutions"
                                delay="400"
                            />
                            <TrustMetric
                                number="15+"
                                label="Years Experience"
                                description="Dedicated to Nigerian students' success"
                                delay="500"
                            />
                        </div>

                        {/* Trust Badges */}
                        <div
                            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <h3 className="font-bold text-gray-900 mb-4">Our Accreditations</h3>
                            <div className="flex flex-wrap gap-4">
                                <TrustBadge
                                    icon={<ShieldIcon />}
                                    text="British Council Certified"
                                    delay="500"
                                />
                                <TrustBadge
                                    icon={<AwardIcon />}
                                    text="ICEF Certified Agency"
                                    delay="600"
                                />
                                <TrustBadge
                                    icon={<VerifiedIcon />}
                                    text="UCAS Registered"
                                    delay="700"
                                />
                            </div>
                        </div>

                        {/* CTA Card */}
                        <div
                            className="bg-gradient-to-br from-brand-blue to-blue-900 rounded-2xl p-6 text-white"
                            data-aos="zoom-in"
                            data-aos-delay="600"
                        >
                            <h3 className="font-bold text-xl mb-3">Ready to Start Your Journey?</h3>
                            <p className="text-blue-100 mb-4">
                                Join thousands of successful students who trusted us with their future.
                            </p>
                            <Link
                                href="/free-consultation"
                                className="inline-flex items-center gap-2 bg-brand-yellow text-brand-blue px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-yellow-400/30 transform hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <CalendarIcon />
                                Book Free Consultation
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TrustFeature
                            icon={<ExpertGuidanceIcon />}
                            title="Expert Guidance"
                            description="Our consultants have first-hand experience studying abroad and understand the unique challenges Nigerian students face."
                            stats="100+ Qualified Consultants"
                            delay="200"
                        />
                        <TrustFeature
                            icon={<PersonalizedSupportIcon />}
                            title="Personalized Support"
                            description="From application to arrival, we provide end-to-end support tailored to your specific goals and background."
                            stats="24/7 Student Support"
                            delay="300"
                        />
                        <TrustFeature
                            icon={<ScholarshipIcon />}
                            title="Scholarship Access"
                            description="We help you unlock exclusive scholarships and funding opportunities available to international students."
                            stats="$2M+ Scholarships Secured"
                            delay="400"
                        />
                        <TrustFeature
                            icon={<SuccessIcon />}
                            title="Proven Success"
                            description="Our track record speaks for itself - thousands of successful placements with life-changing outcomes."
                            stats="5,000+ Success Stories"
                            delay="500"
                        />
                    </div>
                </div>

                {/* Testimonial Section */}
                <div className="mt-20">
                    <div
                        className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Testimonial Content */}
                            <div>
                                <div
                                    className="flex items-center gap-1 mb-4"
                                    data-aos="fade-right"
                                    data-aos-delay="300"
                                >
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <StarIcon key={star} />
                                    ))}
                                </div>
                                <blockquote
                                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight"
                                    data-aos="fade-right"
                                    data-aos-delay="400"
                                >
                                    "BeyondBorders transformed my dream into reality. Their guidance made the complex visa process so simple!"
                                </blockquote>
                                <div
                                    className="flex items-center gap-4"
                                    data-aos="fade-right"
                                    data-aos-delay="500"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                                        CA
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Chiamaka Adebayo</div>
                                        <div className="text-gray-600">Computer Science, University of Toronto</div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <StatCard
                                    number="4.9/5"
                                    label="Student Satisfaction"
                                    description="Based on 2,000+ reviews"
                                    delay="300"
                                />
                                <StatCard
                                    number="96%"
                                    label="Admission Success"
                                    description="University acceptance rate"
                                    delay="400"
                                />
                                <StatCard
                                    number="48h"
                                    label="Average Response"
                                    description="Quick support response time"
                                    delay="500"
                                />
                                <StatCard
                                    number="100%"
                                    label="Ethical Practice"
                                    description="Transparent & honest guidance"
                                    delay="600"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partner Universities */}
                <div
                    className="mt-20 text-center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <p className="text-gray-600 mb-8 font-medium">Trusted by leading universities worldwide</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
                        <UniversityLogo name="University of Toronto" delay="300" />
                        <UniversityLogo name="University of British Columbia" delay="400" />
                        <UniversityLogo name="University of Manchester" delay="500" />
                        <UniversityLogo name="University of Birmingham" delay="600" />
                        <UniversityLogo name="McGill University" delay="700" />
                    </div>
                </div>
            </div>
        </section>
    )
}

// Component for Trust Metrics
function TrustMetric({ number, label, description, accent = false, delay = "0" }: {
    number: string;
    label: string;
    description: string;
    accent?: boolean;
    delay?: string;
}) {
    return (
        <div
            className={`text-center p-4 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1 ${accent
                ? 'bg-brand-yellow/10 border border-brand-yellow/20'
                : 'bg-white border border-gray-100 shadow-sm'
                }`}
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div className={`text-3xl font-bold mb-2 ${accent ? 'text-brand-yellow' : 'text-brand-blue'
                }`}>
                {number}
            </div>
            <div className="font-semibold text-gray-900 mb-1">{label}</div>
            <div className="text-sm text-gray-600">{description}</div>
        </div>
    )
}

// Component for Trust Features
function TrustFeature({ icon, title, description, stats, delay = "0" }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    stats: string;
    delay?: string;
}) {
    return (
        <div
            className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-brand-yellow/30 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-blue-800 rounded-xl flex items-center justify-center text-white mb-4 group-hover:transform group-hover:rotate-6 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">{title}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
            <div className="text-sm font-semibold text-brand-yellow">{stats}</div>
        </div>
    )
}

// Component for Trust Badges
function TrustBadge({ icon, text, delay = "0" }: { icon: React.ReactNode; text: string; delay?: string }) {
    return (
        <div
            className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div className="text-brand-yellow">
                {icon}
            </div>
            <span className="text-sm font-medium text-gray-700">{text}</span>
        </div>
    )
}

// Component for Stats
function StatCard({ number, label, description, delay = "0" }: {
    number: string;
    label: string;
    description: string;
    delay?: string;
}) {
    return (
        <div
            className="text-center p-4 bg-gray-50 rounded-xl"
            data-aos="zoom-in"
            data-aos-delay={delay}
        >
            <div className="text-2xl font-bold text-brand-blue mb-1">{number}</div>
            <div className="font-semibold text-gray-900 text-sm">{label}</div>
            <div className="text-xs text-gray-600">{description}</div>
        </div>
    )
}

// Component for University Logos
function UniversityLogo({ name, delay = "0" }: { name: string; delay?: string }) {
    return (
        <div
            className="text-gray-400 font-bold text-lg hover:text-brand-blue transition-colors duration-300"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            {name.split(' ').map((word, index) => (
                <span key={index} className={index === 0 ? 'text-brand-blue' : ''}>
                    {word}{' '}
                </span>
            ))}
        </div>
    )
}

// Icon Components (keep the same as before)
function ShieldIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    )
}

function AwardIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )
}

function VerifiedIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    )
}

function CalendarIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    )
}

function StarIcon() {
    return (
        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    )
}

function ExpertGuidanceIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
    )
}

function PersonalizedSupportIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    )
}

function ScholarshipIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )
}

function SuccessIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )
}