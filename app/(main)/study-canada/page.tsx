import Link from 'next/link'

export default function StudyCanada() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-brand-blue to-blue-900 text-white py-40">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <h1 className="text-5xl md:text-6xl font-bold">
                                Study in Canada
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                            World-class education, affordable tuition, and excellent immigration pathways for Nigerian students.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Canada Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Canada?</h2>
                        <p className="text-xl text-gray-600">
                            Discover why Canada is one of the top destinations for international students worldwide
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={<GraduationIcon />}
                            title="World-Class Education"
                            description="Canadian degrees are globally recognized with universities consistently ranking among the world's best"
                        />
                        <FeatureCard
                            icon={<PRIcon />}
                            title="Permanent Residence Pathways"
                            description="Study permits can lead to Post-Graduation Work Permits and eventual Permanent Residency"
                        />
                        <FeatureCard
                            icon={<WorkIcon />}
                            title="Work While Studying"
                            description="International students can work up to 20 hours per week during studies"
                        />
                        <FeatureCard
                            icon={<DollarIcon />}
                            title="Affordable Education"
                            description="Lower tuition fees compablue to other popular study destinations with numerous scholarship options"
                        />
                    </div>
                </div>
            </section>

            {/* Top Universities */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Top Canadian Universities</h2>
                        <p className="text-xl text-gray-600">
                            Renowned institutions offering excellent opportunities for Nigerian students
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <UniversityCard
                            name="University of Toronto"
                            ranking="Canada Rank: #1"
                            location="Toronto, Ontario"
                            features={["Research Intensive", "Diverse Community", "Co-op Programs"]}
                            popularPrograms={["Computer Science", "Medicine", "Engineering"]}
                        />
                        <UniversityCard
                            name="University of British Columbia"
                            ranking="Canada Rank: #2"
                            location="Vancouver, BC"
                            features={["Beautiful Campus", "Sustainability Focus", "Strong Research"]}
                            popularPrograms={["Business", "Forestry", "Environmental Science"]}
                        />
                        <UniversityCard
                            name="McGill University"
                            ranking="Canada Rank: #3"
                            location="Montreal, Quebec"
                            features={["International Reputation", "Bilingual City", "Medical Research"]}
                            popularPrograms={["Medicine", "Law", "Management"]}
                        />
                        <UniversityCard
                            name="University of Waterloo"
                            ranking="Canada Rank: #4"
                            location="Waterloo, Ontario"
                            features={["Co-op Education", "Tech Hub", "Entrepreneurship"]}
                            popularPrograms={["Engineering", "Computer Science", "Mathematics"]}
                        />
                        <UniversityCard
                            name="University of Alberta"
                            ranking="Canada Rank: #5"
                            location="Edmonton, Alberta"
                            features={["Affordable Living", "Energy Research", "Strong STEM"]}
                            popularPrograms={["Engineering", "Nursing", "Business"]}
                        />
                        <UniversityCard
                            name="McMaster University"
                            ranking="Canada Rank: #6"
                            location="Hamilton, Ontario"
                            features={["Health Sciences", "Problem-Based Learning", "Research Focus"]}
                            popularPrograms={["Health Sciences", "Engineering", "Business"]}
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
                            High-demand courses with excellent career prospects and immigration pathways
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ProgramCard
                            title="Computer Science & IT"
                            duration="4 years (BSc) / 2 years (MSc)"
                            universities={["Waterloo", "UBC", "Toronto"]}
                            career="Software Developer, Data Analyst, AI Specialist"
                            salary="CAD 60,000 - 120,000"
                            prPath="Express Entry eligible"
                        />
                        <ProgramCard
                            title="Business & Management"
                            duration="4 years (BBA) / 2 years (MBA)"
                            universities={["Western", "McGill", "York"]}
                            career="Business Analyst, Marketing Manager, Consultant"
                            salary="CAD 55,000 - 100,000"
                            prPath="Express Entry eligible"
                        />
                        <ProgramCard
                            title="Engineering"
                            duration="4 years (BEng)"
                            universities={["Toronto", "Waterloo", "UBC"]}
                            career="Civil Engineer, Mechanical Engineer, Project Manager"
                            salary="CAD 65,000 - 110,000"
                            prPath="Express Entry eligible"
                        />
                        <ProgramCard
                            title="Healthcare & Nursing"
                            duration="4 years (BScN)"
                            universities={["McMaster", "Toronto", "UBC"]}
                            career="Registeblue Nurse, Healthcare Manager, Researcher"
                            salary="CAD 70,000 - 95,000"
                            prPath="Provincial Nominee Programs"
                        />
                        <ProgramCard
                            title="Hospitality & Tourism"
                            duration="2-3 years (Diploma/Degree)"
                            universities={["Ryerson", "BCIT", "George Brown"]}
                            career="Hotel Manager, Event Planner, Tourism Director"
                            salary="CAD 45,000 - 80,000"
                            prPath="Various PNP streams"
                        />
                        <ProgramCard
                            title="Environmental Science"
                            duration="4 years (BSc)"
                            universities={["UBC", "Alberta", "Guelph"]}
                            career="Environmental Consultant, Sustainability Manager"
                            salary="CAD 55,000 - 90,000"
                            prPath="Express Entry eligible"
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
                                Understanding what you need for successful application to Canadian universities
                            </p>

                            <div className="space-y-6">
                                <RequirementSection
                                    title="Undergraduate Requirements"
                                    items={[
                                        "WAEC/NECO with minimum 5 cblueits including English and Mathematics",
                                        "Minimum 60-70% average in relevant subjects",
                                        "IELTS 6.5 overall (no band below 6.0) or equivalent",
                                        "Personal Statement or Letter of Intent",
                                        "Some programs may require portfolio or interview"
                                    ]}
                                />
                                <RequirementSection
                                    title="Postgraduate Requirements"
                                    items={[
                                        "4-year Bachelor's degree with minimum B average (70-75%)",
                                        "Relevant academic background for chosen program",
                                        "IELTS 6.5-7.0 overall (no band below 6.0)",
                                        "Statement of Purpose and CV/Resume",
                                        "2-3 Letters of recommendation"
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h3>
                            <div className="space-y-6">
                                <TimelineItem
                                    activity="Research & Shortlist Universities"
                                    note="Prepare documents and requirements"
                                />
                                <TimelineItem
                                    activity="Submit Applications"
                                    note="Meet university deadlines"
                                />
                                <TimelineItem
                                    activity="Receive Offers"
                                    note="Apply for study permit"
                                />
                                <TimelineItem
                                    activity="Visa Processing"
                                    note="Prepare for departure"
                                />
                            </div>

                            <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                                <h4 className="font-bold text-green-900 mb-2">Direct Entry Options</h4>
                                <p className="text-green-800 text-sm">
                                    Many universities offer direct entry for qualified Nigerian students without foundation years.
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Average Study Cost</h2>
                        <p className="text-xl text-gray-600">
                            Understanding tuition fees and available financial support
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <CostCard
                            title="Undergraduate Fees"
                            amount="CAD 20,000 - 35,000"
                            period="per year"
                            details={["Arts & Humanities: CAD 20,000-25,000", "Science & Engineering: CAD 25,000-35,000", "Professional Programs: CAD 30,000-40,000"]}
                        />
                        <CostCard
                            title="Postgraduate Fees"
                            amount="CAD 18,000 - 30,000"
                            period="per year"
                            details={["Master's Courses: CAD 18,000-25,000", "MBA Programs: CAD 30,000-50,000", "PhD Programs: CAD 8,000-15,000"]}
                        />
                        <CostCard
                            title="Living Expenses"
                            amount="CAD 12,000 - 15,000"
                            period="per year"
                            details={["Major Cities: CAD 15,000-18,000", "Smaller Cities: CAD 12,000-15,000", "Includes accommodation, food, transportation"]}
                        />
                    </div>
                </div>
            </section>

            {/* Immigration Pathways */}
            <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-white mb-12">
                        <h2 className="text-4xl font-bold mb-6">Immigration Pathways</h2>
                        <p className="text-xl text-blue-100">
                            From study permit to Permanent Residence - Your Canadian dream journey
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ImmigrationStep
                            step="1"
                            title="Study Permit"
                            description="Get acceptance from DLI, show funds, and obtain study permit"
                            duration="4-12 weeks processing"
                        />
                        <ImmigrationStep
                            step="2"
                            title="PGWP"
                            description="Post-Graduation Work Permit after completing studies"
                            duration="Up to 3 years based on program length"
                        />
                        <ImmigrationStep
                            step="3"
                            title="Canadian Experience"
                            description="Gain skilled work experience in Canada"
                            duration="1-2 years for Express Entry"
                        />
                        <ImmigrationStep
                            step="4"
                            title="Permanent Residence"
                            description="Apply through Express Entry or Provincial Nominee Program"
                            duration="6-12 months processing"
                        />
                    </div>

                    <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
                        <h3 className="text-2xl font-bold mb-4">Why Choose Canada for PR?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-yellow-300 mb-3">Express Entry System</h4>
                                <ul className="space-y-2 text-blue-100">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                                        Points-based system (CRS score)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                                        Canadian education bonus points
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                                        Fast processing (6 months average)
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-yellow-300 mb-3">Provincial Nominee Programs</h4>
                                <ul className="space-y-2 text-blue-100">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                                        Lower CRS score requirements
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                                        Specific provincial streams
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                                        Additional 600 CRS points
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Study Permit Process */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Study Permit Process</h2>
                        <p className="text-xl text-gray-600">
                            Step-by-step guide to obtaining your Canadian study permit
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Document Checklist</h3>
                            <ul className="space-y-4">
                                <DocumentItem text="Letter of Acceptance from DLI" requiblue={true} />
                                <DocumentItem text="Proof of Funds (Tuition + Living)" requiblue={true} />
                                <DocumentItem text="Valid International Passport" requiblue={true} />
                                <DocumentItem text="IELTS/TOEFL Test Results" requiblue={true} />
                                <DocumentItem text="Academic Transcripts & Certificates" requiblue={true} />
                                <DocumentItem text="Statement of Purpose" requiblue={true} />
                                <DocumentItem text="Medical Examination Report" requiblue={true} />
                                <DocumentItem text="Police Clearance Certificate" requiblue={true} />
                            </ul>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Requirements</h3>
                            <div className="space-y-6">
                                <FinancialItem
                                    category="Tuition Fees"
                                    amount="CAD 20,000 - 35,000"
                                    note="First year tuition + incidental fees"
                                />
                                <FinancialItem
                                    category="Living Expenses"
                                    amount="CAD 10,000 - 15,000"
                                    note="As requiblue by IRCC for one year"
                                />
                                <FinancialItem
                                    category="Return Transportation"
                                    amount="CAD 1,500 - 2,000"
                                    note="Round-trip airfare to Nigeria"
                                />
                                <FinancialItem
                                    category="Additional Funds"
                                    amount="CAD 3,000 - 5,000"
                                    note="For initial settlement and emergencies"
                                />
                            </div>

                            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <h4 className="font-bold text-blue-900 mb-2">Total Requiblue Funds</h4>
                                <p className="text-blue-800 font-bold text-xl">CAD 35,000 - 57,000</p>
                                <p className="text-blue-700 text-sm">For first year of studies</p>
                            </div>
                        </div>
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
            <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-900 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
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
                <span className="text-sm text-blue-600 font-semibold">{ranking}</span>
                <span className="text-sm text-gray-500">{location}</span>
            </div>

            <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Features:</h4>
                <ul className="space-y-1">
                    {features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Popular Programs:</h4>
                <div className="flex flex-wrap gap-1">
                    {popularPrograms.map((program, index) => (
                        <span key={index} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            {program}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Component for Program Cards
function ProgramCard({ title, duration, universities, career, salary, prPath }: {
    title: string;
    duration: string;
    universities: string[];
    career: string;
    salary: string;
    prPath: string;
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

            <div className="mb-3 bg-green-50 rounded-lg p-3 border border-green-200">
                <h4 className="font-semibold text-green-900 text-sm">Average Salary:</h4>
                <p className="text-green-800 font-bold">{salary}</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <h4 className="font-semibold text-blue-900 text-sm">PR Pathway:</h4>
                <p className="text-blue-800 text-sm">{prPath}</p>
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
                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
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

// Component for Timeline Items
function TimelineItem({ activity, note }: {
    activity: string;
    note: string;
}) {
    return (
        <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
            <div>
                <h4 className="font-semibold text-gray-900">{activity}</h4>
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
            <div className="text-3xl font-bold text-blue-600 mb-1">{amount}</div>
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
            <div className="text-yellow-300 font-bold text-xl mb-3">{amount}</div>
            <p className="text-blue-100 text-sm">{eligibility}</p>
        </div>
    )
}

// Component for Immigration Steps
function ImmigrationStep({ step, title, description, duration }: {
    step: string;
    title: string;
    description: string;
    duration: string;
}) {
    return (
        <div className="text-center text-white">
            <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mx-auto mb-4">
                {step}
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-blue-100 leading-relaxed mb-2">{description}</p>
            <div className="text-yellow-300 text-sm font-semibold">{duration}</div>
        </div>
    )
}

// Component for Document Items
function DocumentItem({ text, requiblue }: {
    text: string;
    requiblue: boolean;
}) {
    return (
        <li className="flex items-center justify-between">
            <span className="text-gray-700">{text}</span>
            {requiblue && (
                <span className="text-blue-600 text-sm font-semibold bg-blue-50 px-2 py-1 rounded">Requiblue</span>
            )}
        </li>
    )
}

// Component for Financial Items
function FinancialItem({ category, amount, note }: {
    category: string;
    amount: string;
    note: string;
}) {
    return (
        <div className="flex justify-between items-start p-3 bg-white rounded-lg border border-gray-200">
            <div>
                <h4 className="font-semibold text-gray-900">{category}</h4>
                <p className="text-sm text-gray-600">{note}</p>
            </div>
            <div className="text-right">
                <div className="font-bold text-blue-600">{amount}</div>
            </div>
        </div>
    )
}

// Icon Components
function GraduationIcon() {
    return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
    )
}

function PRIcon() {
    return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    )
}

function WorkIcon() {
    return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    )
}

function DollarIcon() {
    return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
    )
}