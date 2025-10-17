'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function SuccessStories() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    }, [])

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        data-aos="fade-up"
                    >
                        Success
                        <span
                            className="block text-brand-blue"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Stories
                        </span>
                    </h2>
                    <p
                        className="text-xl text-gray-600"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        Real students, real dreams, real success. Read inspiring stories from Nigerian students who achieved their study abroad goals with us.
                    </p>
                </div>

                {/* Success Stories Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
                    {/* Story 1 - Canada */}
                    <div
                        className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700">
                            <div className="absolute inset-0 bg-black/20"></div>
                            <div className="absolute bottom-4 left-6">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 inline-flex items-center gap-1">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-white text-sm font-medium">2023 Intake</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    CA
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Chiamaka Adebayo</h3>
                                    <p className="text-brand-blue font-semibold">University of Toronto</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                "BeyondBorders made my Canadian dream come true! From university selection to visa approval, their guidance was exceptional. I received a $15,000 scholarship!"
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-sm text-gray-500">Computer Science</span>
                            </div>
                        </div>
                    </div>

                    {/* Story 2 - UK */}
                    <div
                        className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <div className="relative h-48 bg-gradient-to-br from-red-500 to-red-700">
                            <div className="absolute inset-0 bg-black/20"></div>
                            <div className="absolute bottom-4 left-6">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 inline-flex items-center gap-1">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-white text-sm font-medium">2023 Intake</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    AO
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Adeola Okafor</h3>
                                    <p className="text-brand-blue font-semibold">University of Manchester</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                "The visa process seemed daunting, but BeyondBorders's mock interviews prepared me perfectly. Got my UK visa in 3 weeks! Now pursuing my Masters in Business."
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-sm text-gray-500">Business Administration</span>
                            </div>
                        </div>
                    </div>

                    {/* Story 3 - Canada */}
                    <div
                        className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <div className="relative h-48 bg-gradient-to-br from-green-500 to-green-700">
                            <div className="absolute inset-0 bg-black/20"></div>
                            <div className="absolute bottom-4 left-6">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 inline-flex items-center gap-1">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-white text-sm font-medium">2024 Intake</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    KE
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Kunle Eze</h3>
                                    <p className="text-brand-blue font-semibold">University of British Columbia</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                "As a medical student, the requirements were strict. BeyondBorders helped me navigate the complex process and secured my admission with a partial scholarship."
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-sm text-gray-500">Medicine</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics Section */}
                <div
                    className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-12"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div
                            className="text-center"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div className="text-3xl font-bold text-brand-blue mb-2">5,000+</div>
                            <div className="text-gray-600">Students Placed</div>
                        </div>
                        <div
                            className="text-center"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <div className="text-3xl font-bold text-brand-yellow mb-2">98%</div>
                            <div className="text-gray-600">Visa Success Rate</div>
                        </div>
                        <div
                            className="text-center"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            <div className="text-3xl font-bold text-green-600 mb-2">96%</div>
                            <div className="text-gray-600">Admission Success</div>
                        </div>
                        <div
                            className="text-center"
                            data-aos="fade-up"
                            data-aos-delay="700"
                        >
                            <div className="text-3xl font-bold text-red-600 mb-2">4.9/5</div>
                            <div className="text-gray-600">Student Rating</div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div
                    className="text-center"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <div className="bg-gradient-to-r from-brand-blue to-blue-900 rounded-3xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Be Our Next Success Story</h3>
                        <p className="text-blue-100 mb-6 text-lg">
                            Join thousands of Nigerian students who have successfully studied abroad with our guidance
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/free-consultation"
                                className="bg-brand-yellow text-brand-blue px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-colors duration-300"
                                data-aos="zoom-in"
                                data-aos-delay="500"
                            >
                                Start Your Journey
                            </a>
                            <a
                                href="/testimonials"
                                className="bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors duration-300"
                                data-aos="zoom-in"
                                data-aos-delay="600"
                            >
                                Read More Stories
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}