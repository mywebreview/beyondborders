export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-blue to-blue-900 text-white py-40">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Study Programs
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Discover world-class education opportunities in the UK and Canada across various academic levels and disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Program Categories</h2>
            <p className="text-xl text-gray-600">
              Explore programs tailored to your academic goals and career aspirations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-brand-blue mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Undergraduate</h3>
              <p className="text-gray-600 text-sm">
                Bachelor's degree programs in various fields with direct entry options
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Postgraduate</h3>
              <p className="text-gray-600 text-sm">
                Master's and PhD programs with research and taught course options
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Diploma & Certificates</h3>
              <p className="text-gray-600 text-sm">
                Short-term programs for skill development and career advancement
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Courses</h3>
              <p className="text-gray-600 text-sm">
                Industry-focused programs with practical training and certifications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UK Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <h2 className="text-4xl font-bold text-gray-900">Study in United Kingdom</h2>
            </div>
            <p className="text-xl text-gray-600">
              World-renowned universities with rich academic heritage and excellent career prospects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard
              title="Business & Management"
              duration="1-3 years"
              universities={["London School of Economics", "University of Manchester", "Warwick Business School"]}
              features={["ACCA Accreditation", "Industry Placements", "Global Networking"]}
            />
            <ProgramCard
              title="Engineering & Technology"
              duration="3-4 years"
              universities={["Imperial College London", "University of Cambridge", "University of Bristol"]}
              features={["MEng Options", "Research Projects", "Professional Accreditation"]}
            />
            <ProgramCard
              title="Computer Science & IT"
              duration="1-4 years"
              universities={["University of Oxford", "University of Edinburgh", "King's College London"]}
              features={["AI Specializations", "Industry Certifications", "Startup Incubation"]}
            />
            <ProgramCard
              title="Medicine & Health Sciences"
              duration="4-6 years"
              universities={["University College London", "University of Glasgow", "Newcastle University"]}
              features={["Clinical Placements", "Research Opportunities", "NMC Registration"]}
            />
            <ProgramCard
              title="Law & International Relations"
              duration="3-4 years"
              universities={["University of Law", "University of Nottingham", "Durham University"]}
              features={["LLB Qualifying Law", "Mooting Competitions", "Legal Clinics"]}
            />
            <ProgramCard
              title="Creative Arts & Design"
              duration="1-3 years"
              universities={["Royal College of Art", "University of the Arts London", "Goldsmiths University"]}
              features={["Portfolio Development", "Industry Mentors", "Exhibition Opportunities"]}
            />
          </div>
        </div>
      </section>

      {/* Canada Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <h2 className="text-4xl font-bold text-gray-900">Study in Canada</h2>
            </div>
            <p className="text-xl text-gray-600">
              High-quality education with affordable tuition and excellent post-study work opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard
              title="Information Technology"
              duration="2-4 years"
              universities={["University of Toronto", "University of British Columbia", "University of Waterloo"]}
              features={["Co-op Programs", "Silicon Valley Connections", "Startup Visa Pathway"]}
            />
            <ProgramCard
              title="Business Administration"
              duration="1-2 years"
              universities={["McGill University", "University of Alberta", "Western University"]}
              features={["MBA Options", "Case Competitions", "Canadian Business Network"]}
            />
            <ProgramCard
              title="Healthcare & Nursing"
              duration="2-4 years"
              universities={["McMaster University", "University of Calgary", "Dalhousie University"]}
              features={["Clinical Rotations", "NCLEX Preparation", "PR Pathway"]}
            />
            <ProgramCard
              title="Engineering"
              duration="4 years"
              universities={["University of Toronto", "University of Waterloo", "University of Alberta"]}
              features={["P.Eng Eligibility", "Co-op Education", "Industry Projects"]}
            />
            <ProgramCard
              title="Hospitality & Tourism"
              duration="2-3 years"
              universities={["Thompson Rivers University", "George Brown College", "Vancouver Community College"]}
              features={["Industry Certifications", "Paid Internships", "Global Career Opportunities"]}
            />
            <ProgramCard
              title="Environmental Science"
              duration="3-4 years"
              universities={["University of British Columbia", "University of Guelph", "University of Saskatchewan"]}
              features={["Field Research", "Government Partnerships", "Sustainability Focus"]}
            />
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Admission Requirements</h2>
            <p className="text-xl text-gray-600">
              General requirements for international students from Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Undergraduate Programs</h3>
              <ul className="space-y-4">
                <RequirementItem text="WAEC/NECO with minimum 5 credits including English and Mathematics" />
                <RequirementItem text="JAMB result (for some universities)" />
                <RequirementItem text="Proof of English proficiency (IELTS 6.0 or TOEFL 80)" />
                <RequirementItem text="Academic transcripts and certificates" />
                <RequirementItem text="Personal statement and letters of recommendation" />
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Postgraduate Programs</h3>
              <ul className="space-y-4">
                <RequirementItem text="Bachelor's degree with minimum Second Class Upper" />
                <RequirementItem text="Proof of English proficiency (IELTS 6.5 or TOEFL 90)" />
                <RequirementItem text="Academic transcripts and degree certificates" />
                <RequirementItem text="CV/Resume and statement of purpose" />
                <RequirementItem text="Letters of recommendation (academic/professional)" />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Program Card Component
function ProgramCard({ title, duration, universities, features }: {
  title: string;
  duration: string;
  universities: string[];
  features: string[];
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{duration}</span>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Featured Universities:</h4>
        <ul className="space-y-1">
          {universities.map((uni, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
              <div className="w-1 h-1 bg-brand-yellow rounded-full"></div>
              {uni}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Program Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
              <div className="w-1 h-1 bg-brand-blue rounded-full"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// Scholarship Card Component
function ScholarshipCard({ title, amount, description, eligibility }: {
  title: string;
  amount: string;
  description: string;
  eligibility: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="text-2xl font-bold text-brand-yellow mb-3">{amount}</div>
      <p className="text-blue-100 mb-4 text-sm">{description}</p>
      <div className="text-sm">
        <span className="font-semibold">Eligibility:</span>
        <p className="text-blue-100 mt-1">{eligibility}</p>
      </div>
    </div>
  )
}

// Requirement Item Component
function RequirementItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="w-5 h-5 bg-brand-yellow rounded-full flex items-center justify-center mt-1 flex-shrink-0">
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-gray-700">{text}</span>
    </li>
  )
}