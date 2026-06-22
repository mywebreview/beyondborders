import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-blue to-blue-900 text-white py-40">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About BeyondBorders
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Your trusted partner in transforming study abroad dreams into successful realities for Nigerian students since 2018.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-brand-yellow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To help students secure international education opportunities through structured guidance, accurate documentation, and strategic application support.
                  </p>
                </div>
                <div className="bg-yellow-50 rounded-2xl p-6 border-l-4 border-brand-blue">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To become a trusted bridge between students and global education opportunities, known for integrity, precision, and consistent results.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-brand-blue to-blue-800 rounded-3xl p-8 text-white">
                <div className="text-6xl font-bold text-brand-yellow mb-4">8+</div>
                <h3 className="text-2xl font-bold mb-4">Years of Excellence</h3>
                <p className="text-blue-100 leading-relaxed">
                  For over 8 years, we've been dedicated to helping Nigerian students navigate the complex journey of international education with confidence and success.
                </p>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-yellow rounded-full flex items-center justify-center text-brand-blue font-bold text-lg">
                5K+
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white border-4 border-brand-blue rounded-full flex items-center justify-center text-brand-blue font-bold">
                98%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600">
              BeyondBorders was built on years of international education experience to help students and families navigate admissions and study visas with expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Beginning</h3>
                <p className="text-gray-700 leading-relaxed">
                  BeyondBorders was built from years of hands-on experience in international education and a deep understanding of the challenges students face when pursuing opportunities abroad.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Today & Beyond</h3>
                <p className="text-gray-700 leading-relaxed">
                  BeyondBorders was created to provide students and families with expert guidance, strategic support, and a structured pathway through international admissions and study visa processes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-brand-blue to-blue-800 rounded-2xl p-6 text-white text-center">
                <div className="text-3xl font-bold text-brand-yellow mb-2">300+</div>
                <div className="text-blue-100">Students Placed</div>
              </div>
              <div className="bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-2xl p-6 text-brand-blue text-center">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div>Visa Success Rate</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div>Partner Universities</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">8+</div>
                <div>Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose BeyondBorders?</h2>
            <p className="text-xl text-gray-600">
              What sets us apart in helping Nigerian students achieve their international education dreams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-blue-800 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Consultants</h3>
              <p className="text-gray-600">
                Our team includes former international students and education experts who understand the unique challenges Nigerian students face.
              </p>
            </div>

            <div className="text-center p-6 group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-blue-800 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-gray-600">
                With 98% visa success rate and thousands of successful placements, we have the experience to guide you to success.
              </p>
            </div>

            <div className="text-center p-6 group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-blue-800 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">End-to-End Support</h3>
              <p className="text-gray-600">
                From university selection to post-arrival support, we're with you every step of your study abroad journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-brand-blue to-blue-800 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                FM
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fasan Michael</h3>
              <p className="text-brand-blue font-semibold mb-4">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Professional International Education Consultant with over 10 years of experience guiding students through admissions and visa processes, with more than 800 successful visa approvals across multiple study destinations.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-full flex items-center justify-center text-brand-blue text-2xl font-bold mx-auto mb-4">
                DA
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deji Adeyemi</h3>
              <p className="text-brand-blue font-semibold mb-4">Admissions Officer</p>
              <p className="text-gray-600 text-sm">
                Specializes in application processing, document review, and university placement coordination, ensuring students meet institutional requirements accurately and on time.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                FV
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Faith Victoria</h3>
              <p className="text-brand-blue font-semibold mb-4">Visa Support Specialist</p>
              <p className="text-gray-600 text-sm">
                Handles visa documentation, compliance checks, and application guidance to help students prepare strong and complete submissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful students who trusted us with their future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-consultation"
              className="bg-brand-yellow text-brand-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-colors duration-300"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/contact"
              className="bg-white text-brand-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}