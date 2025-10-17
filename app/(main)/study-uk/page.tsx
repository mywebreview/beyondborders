import Link from 'next/link'

export default function StudyUK() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 to-brand-blue text-white py-40">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <h1 className="text-5xl md:text-6xl font-bold">
                                Study in United Kingdom
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                            World-class education with rich heritage, excellent career prospects, and global recognition for Nigerian students.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why UK Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Study in the UK?</h2>
                        <p className="text-xl text-gray-600">
                            Discover the advantages of pursuing your education in one of the world's most prestigious education systems
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={<GlobeIcon />}
                            title="World-Renowned Universities"
                            description="Home to Oxford, Cambridge, and other globally ranked institutions with centuries of academic excellence"
                        />
                        <FeatureCard
                            icon={<ClockIcon />}
                            title="Shorter Duration"
                            description="Bachelor's degrees in 3 years, Master's in 1 year - save time and money on your education"
                        />
                        <FeatureCard
                            icon={<BriefcaseIcon />}
                            title="Post-Study Work"
                            description="Graduate Route visa allows 2 years of work experience after completing your studies"
                        />
                        <FeatureCard
                            icon={<CurrencyIcon />}
                            title="Scholarship Opportunities"
                            description="Access to Chevening, Commonwealth, and university-specific scholarships for international students"
                        />
                    </div>
                </div>
            </section>

            {/* Top Universities */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Top UK Universities</h2>
                        <p className="text-xl text-gray-600">
                            Partner institutions offering excellent opportunities for Nigerian students
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <UniversityCard
                            name="University of Oxford"
                            ranking="World Rank: #2"
                            location="Oxford, England"
                            features={["100+ Nigerian Students", "Research Excellence", "Merit Scholarships"]}
                            popularPrograms={["Law", "Medicine", "Computer Science"]}
                        />
                        <UniversityCard
                            name="Imperial College London"
                            ranking="World Rank: #6"
                            location="London, England"
                            features={["STEM Focus", "Industry Partnerships", "Career Support"]}
                            popularPrograms={["Engineering", "Business", "Medicine"]}
                        />
                        <UniversityCard
                            name="University College London"
                            ranking="World Rank: #8"
                            location="London, England"
                            features={["Diverse Community", "Central London", "Global Network"]}
                            popularPrograms={["Architecture", "Economics", "Psychology"]}
                        />
                        <UniversityCard
                            name="University of Manchester"
                            ranking="World Rank: #28"
                            location="Manchester, England"
                            features={["Large Nigerian Community", "Affordable City", "Strong Alumni"]}
                            popularPrograms={["Business", "Engineering", "Social Sciences"]}
                        />
                        <UniversityCard
                            name="University of Edinburgh"
                            ranking="World Rank: #30"
                            location="Edinburgh, Scotland"
                            features={["Scottish Culture", "Research Intensive", "Beautiful Campus"]}
                            popularPrograms={["Veterinary Medicine", "AI", "Literature"]}
                        />
                        <UniversityCard
                            name="King's College London"
                            ranking="World Rank: #33"
                            location="London, England"
                            features={["London Location", "Professional Courses", "Health Sciences"]}
                            popularPrograms={["Dentistry", "Law", "International Relations"]}
                        />
                    </div>
                </div>
            </section>

            {/* Popular Programs */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Popular Programs</h2>
                        <p className="text-xl text-gray-600">
                            High-demand courses with excellent career prospects for international students
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ProgramCard
                            title="Business & Management"
                            duration="3 years (BSc) / 1 year (MSc)"
                            universities={["LSE", "Warwick", "Manchester"]}
                            career="Management Consultant, Business Analyst, Marketing Manager"
                            salary="£35,000 - £60,000"
                        />
                        <ProgramCard
                            title="Computer Science & AI"
                            duration="3-4 years (BSc) / 1 year (MSc)"
                            universities={["Imperial", "Edinburgh", "UCL"]}
                            career="Software Engineer, Data Scientist, AI Specialist"
                            salary="£40,000 - £80,000"
                        />
                        <ProgramCard
                            title="Engineering"
                            duration="4 years (MEng) / 1 year (MSc)"
                            universities={["Cambridge", "Imperial", "Bristol"]}
                            career="Civil Engineer, Mechanical Engineer, Project Manager"
                            salary="£32,000 - £55,000"
                        />
                        <ProgramCard
                            title="Medicine & Dentistry"
                            duration="5-6 years (MBBS/BDS)"
                            universities={["Oxford", "UCL", "King's College"]}
                            career="Doctor, Dentist, Medical Researcher"
                            salary="£45,000 - £100,000+"
                        />
                        <ProgramCard
                            title="Law"
                            duration="3 years (LLB) / 1 year (LLM)"
                            universities={["Oxford", "LSE", "Durham"]}
                            career="Solicitor, Barrister, Legal Advisor"
                            salary="£38,000 - £120,000"
                        />
                        <ProgramCard
                            title="International Relations"
                            duration="3 years (BA) / 1 year (MA)"
                            universities={["LSE", "King's College", "SOAS"]}
                            career="Diplomat, Policy Analyst, NGO Manager"
                            salary="£30,000 - £65,000"
                        />
                    </div>
                </div>
            </section>

            {/* Admission Requirements */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Admission Requirements</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Understanding what you need for successful application to UK universities
                            </p>

                            <div className="space-y-6">
                                <RequirementSection
                                    title="Undergraduate Requirements"
                                    items={[
                                        "WAEC/NECO with minimum 5 credits including English and Mathematics",
                                        "A-levels or International Foundation Year",
                                        "IELTS 6.0-6.5 overall (no band below 5.5)",
                                        "Personal Statement and Reference Letters",
                                        "UCAS Application"
                                    ]}
                                />
                                <RequirementSection
                                    title="Postgraduate Requirements"
                                    items={[
                                        "Bachelor's degree with minimum Second Class Upper",
                                        "Relevant academic background for chosen course",
                                        "IELTS 6.5-7.0 overall (no band below 6.0)",
                                        "CV/Resume and Statement of Purpose",
                                        "Academic references (2-3)"
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Application Deadlines</h3>
                            <div className="space-y-6">
                                <DeadlineItem
                                    program="Medicine, Dentistry, Veterinary"
                                    note="Oxford and Cambridge"
                                />
                                <DeadlineItem
                                    program="Most undergraduate courses"
                                    note="Main UCAS deadline"
                                />
                                <DeadlineItem
                                    program="Late applications"
                                    note="Subject to availability"
                                />
                                <DeadlineItem
                                    program="Postgraduate courses"
                                    note="Check university websites"
                                />
                            </div>

                            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <h4 className="font-bold text-blue-900 mb-2">UCAS Application Support</h4>
                                <p className="text-blue-800 text-sm">
                                    We provide complete guidance on UCAS applications, personal statement writing, and course selection.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cost & Scholarships */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Cost & Scholarships</h2>
                        <p className="text-xl text-gray-600">
                            Understanding tuition fees and available financial support
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <CostCard
                            title="Undergraduate Fees"
                            amount="£15,000 - £25,000"
                            period="per year"
                            details={["Arts & Humanities: £15,000-£20,000", "Science & Engineering: £18,000-£25,000", "Medicine: £25,000-£40,000"]}
                        />
                        <CostCard
                            title="Postgraduate Fees"
                            amount="£16,000 - £30,000"
                            period="per year"
                            details={["Classroom-based: £16,000-£22,000", "Lab-based: £20,000-£28,000", "MBA: £25,000-£50,000+"]}
                        />
                        <CostCard
                            title="Living Expenses"
                            amount="£12,000 - £15,000"
                            period="per year"
                            details={["London: £15,000-£18,000", "Outside London: £12,000-£15,000", "Includes accommodation, food, travel"]}
                        />
                    </div>
                </div>
            </section>

            {/* Visa Information */}
            <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-white mb-12">
                        <h2 className="text-4xl font-bold mb-6">UK Student Visa</h2>
                        <p className="text-xl text-blue-100">
                            Everything you need to know about the UK Student Visa process
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <VisaStep
                            step="1"
                            title="CAS Letter"
                            description="Receive Confirmation of Acceptance for Studies from your university"
                        />
                        <VisaStep
                            step="2"
                            title="Financial Proof"
                            description="Show funds covering tuition + living costs for 9-12 months"
                        />
                        <VisaStep
                            step="3"
                            title="English Proficiency"
                            description="Provide IELTS or equivalent English test results"
                        />
                        <VisaStep
                            step="4"
                            title="Visa Application"
                            description="Submit online application and attend biometric appointment"
                        />
                    </div>

                    <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
                        <h3 className="text-2xl font-bold mb-4">Visa Success Rate: 98%</h3>
                        <p className="text-blue-100 mb-4">
                            Our expert guidance ensures high visa approval rates for Nigerian students
                        </p>
                        <ul className="space-y-2 text-blue-100">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Document verification and preparation
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Financial document guidance
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Mock interview preparation
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                                Application tracking and follow-up
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

// Component for Feature Cards
function FeatureCard({ icon, title, description }: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="text-center p-6 group hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-800 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    )
}

// Component for University Cards
function UniversityCard({ name, ranking, location, features, popularPrograms }: {
    name: string;
    ranking: string;
    location: string;
    features: string[];
    popularPrograms: string[];
}) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
            <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-brand-blue font-semibold">{ranking}</span>
                <span className="text-sm text-gray-500">{location}</span>
            </div>

            <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Features:</h4>
                <ul className="space-y-1">
                    {features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1 h-1 bg-brand-yellow rounded-full"></div>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Popular Programs:</h4>
                <div className="flex flex-wrap gap-1">
                    {popularPrograms.map((program, index) => (
                        <span key={index} className="text-xs bg-blue-100 text-brand-blue px-2 py-1 rounded">
                            {program}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Component for Program Cards
function ProgramCard({ title, duration, universities, career, salary }: {
    title: string;
    duration: string;
    universities: string[];
    career: string;
    salary: string;
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
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Top Universities:</h4>
                <div className="flex flex-wrap gap-1">
                    {universities.map((uni, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {uni}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Career Path:</h4>
                <p className="text-sm text-gray-600">{career}</p>
            </div>

            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <h4 className="font-semibold text-green-900 text-sm">Average Salary:</h4>
                <p className="text-green-800 font-bold">{salary}</p>
            </div>
        </div>
    )
}

// Component for Requirement Sections
function RequirementSection({ title, items }: {
    title: string;
    items: string[];
}) {
    return (
        <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-brand-yellow rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="text-gray-700">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

// Component for Deadline Items
function DeadlineItem({ program, note }: {
    program: string;
    note: string;
}) {
    return (
        <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200"> 
            <div>
                <h4 className="font-semibold text-gray-900">{program}</h4>
                <p className="text-sm text-gray-600">{note}</p>
            </div>
        </div>
    )
}

// Component for Cost Cards
function CostCard({ title, amount, period, details }: {
    title: string;
    amount: string;
    period: string;
    details: string[];
}) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <div className="text-3xl font-bold text-brand-blue mb-1">{amount}</div>
            <div className="text-gray-600 mb-6">{period}</div>
            <ul className="space-y-2">
                {details.map((detail, index) => (
                    <li key={index} className="text-sm text-gray-600">{detail}</li>
                ))}
            </ul>
        </div>
    )
}

// Component for Scholarship Cards
function ScholarshipCard({ name, amount, eligibility }: {
    name: string;
    amount: string;
    eligibility: string;
}) {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-white/20">
            <h3 className="font-bold text-lg mb-2">{name}</h3>
            <div className="text-brand-yellow font-bold text-xl mb-3">{amount}</div>
            <p className="text-blue-100 text-sm">{eligibility}</p>
        </div>
    )
}

// Component for Visa Steps
function VisaStep({ step, title, description }: {
    step: string;
    title: string;
    description: string;
}) {
    return (
        <div className="text-center text-white">
            <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center text-brand-blue font-bold text-2xl mx-auto mb-4">
                {step}
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-blue-100 leading-relaxed">{description}</p>
        </div>
    )
}

// Icon Components
function GlobeIcon() {
    return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )
}

function ClockIcon() {
    return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )
}

function BriefcaseIcon() {
    return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    )
}

function CurrencyIcon() {
    return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
    )
}