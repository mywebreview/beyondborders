import Link from 'next/link'

export default function IELTS() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-brand-blue to-blue-900 text-white py-40">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                                <span className="text-blue-600 font-bold text-2xl">IELTS</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold">
                                IELTS Preparation
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                            Comprehensive IELTS training to help Nigerian students achieve their dream scores for UK and Canada studies.
                        </p>
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 inline-block">
                            <div className="flex flex-wrap justify-center gap-6 text-blue-100">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">7.5+</div>
                                    <div className="text-sm">Average Score</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">98%</div>
                                    <div className="text-sm">Success Rate</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">4-8</div>
                                    <div className="text-sm">Weeks Training</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">500+</div>
                                    <div className="text-sm">Students Trained</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why IELTS Matters */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Why IELTS Matters</h2>
                        <p className="text-xl text-gray-600">
                            Your IELTS score is crucial for university admissions and visa success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ImportanceCard
                            icon={<UniversityIcon />}
                            title="University Admission"
                            description="Most UK and Canadian universities require IELTS 6.0-7.5 for admission"
                            score="6.0 - 7.5"
                        />
                        <ImportanceCard
                            icon={<VisaIcon />}
                            title="Visa Requirement"
                            description="Study permits and visas require proof of English proficiency"
                            score="6.0+"
                        />
                        <ImportanceCard
                            icon={<ScholarshipIcon />}
                            title="Scholarship Eligibility"
                            description="Higher IELTS scores increase your chances of getting scholarships"
                            score="7.0+"
                        />
                        <ImportanceCard
                            icon={<CareerIcon />}
                            title="Career Advancement"
                            description="Strong English skills open doors to better job opportunities"
                            score="7.5+"
                        />
                    </div>
                </div>
            </section>

            {/* IELTS Test Format */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">IELTS Test Format</h2>
                        <p className="text-xl text-gray-600">
                            Understand the structure and requirements of each test section
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <TestSection
                            section="Listening"
                            duration="30 minutes"
                            questions="40 questions"
                            description="Four recorded monologues and conversations"
                            tips={["Practice with different accents", "Note key information", "Check spelling"]}
                        />
                        <TestSection
                            section="Reading"
                            duration="60 minutes"
                            questions="40 questions"
                            description="Three long texts from books, journals, and newspapers"
                            tips={["Skim and scan techniques", "Time management", "Vocabulary building"]}
                        />
                        <TestSection
                            section="Writing"
                            duration="60 minutes"
                            questions="2 tasks"
                            description="Task 1: Describe visual information, Task 2: Essay writing"
                            tips={["Plan your writing", "Use academic vocabulary", "Check grammar"]}
                        />
                        <TestSection
                            section="Speaking"
                            duration="11-14 minutes"
                            questions="3 parts"
                            description="Face-to-face interview with certified examiner"
                            tips={["Practice fluency", "Expand answers", "Use varied vocabulary"]}
                        />
                    </div>
                </div>
            </section>

            {/* Score Requirements */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Score Requirements</h2>
                        <p className="text-xl text-gray-600">
                            Typical IELTS score requirements for different study levels
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">UK Universities</h3>
                            <div className="space-y-4">
                                <ScoreRequirement
                                    level="Undergraduate"
                                    overall="6.0 - 6.5"
                                    breakdown="No band less than 5.5"
                                    universities={["Most Russell Group universities", "Foundation programs", "Direct entry"]}
                                />
                                <ScoreRequirement
                                    level="Postgraduate"
                                    overall="6.5 - 7.0"
                                    breakdown="No band less than 6.0"
                                    universities={["Master's programs", "Research degrees", "Professional courses"]}
                                />
                                <ScoreRequirement
                                    level="Top Universities"
                                    overall="7.0 - 7.5"
                                    breakdown="No band less than 6.5"
                                    universities={["Oxford, Cambridge, LSE", "Medicine, Law", "Competitive programs"]}
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Canadian Universities</h3>
                            <div className="space-y-4">
                                <ScoreRequirement
                                    level="Undergraduate"
                                    overall="6.5"
                                    breakdown="No band less than 6.0"
                                    universities={["Most universities", "College programs", "Direct entry"]}
                                />
                                <ScoreRequirement
                                    level="Postgraduate"
                                    overall="6.5 - 7.0"
                                    breakdown="No band less than 6.0"
                                    universities={["Master's programs", "MBA courses", "Research programs"]}
                                />
                                <ScoreRequirement
                                    level="Express Entry"
                                    overall="6.0 - 7.0"
                                    breakdown="CLB 7-9 equivalent"
                                    universities={["Immigration points", "Federal Skilled Worker", "Canadian Experience"]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Training Program */}
            <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-white mb-12">
                        <h2 className="text-4xl font-bold mb-6">Our IELTS Training Program</h2>
                        <p className="text-xl text-blue-100">
                            Comprehensive preparation designed for Nigerian students
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TrainingFeature
                            icon={<BookIcon />}
                            title="Structured Curriculum"
                            features={[
                                "4-week intensive program",
                                "Daily practice sessions",
                                "Weekly mock tests",
                                "Personalized feedback"
                            ]}
                        />
                        <TrainingFeature
                            icon={<TeacherIcon />}
                            title="Expert Instructors"
                            features={[
                                "Certified IELTS trainers",
                                "Native English speakers",
                                "5+ years experience",
                                "Proven track record"
                            ]}
                        />
                        <TrainingFeature
                            icon={<MaterialsIcon />}
                            title="Study Materials"
                            features={[
                                "Official Cambridge books",
                                "Practice test bank",
                                "Vocabulary builder",
                                "Writing templates"
                            ]}
                        />
                    </div>

                    <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
                        <h3 className="text-2xl font-bold mb-6 text-center">Program Schedule</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <ScheduleItem
                                week="Week 1"
                                focus="Foundation & Diagnostic"
                                activities={["Level assessment", "Basic grammar", "Vocabulary building"]}
                            />
                            <ScheduleItem
                                week="Week 2"
                                focus="Skill Development"
                                activities={["Listening practice", "Reading strategies", "Writing tasks"]}
                            />
                            <ScheduleItem
                                week="Week 3"
                                focus="Test Practice"
                                activities={["Full mock tests", "Speaking interviews", "Time management"]}
                            />
                            <ScheduleItem
                                week="Week 4"
                                focus="Final Preparation"
                                activities={["Score improvement", "Exam techniques", "Confidence building"]}
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* Test Registration */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Test Registration Support</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                We help you with the entire IELTS registration process
                            </p>

                            <div className="space-y-6">
                                <RegistrationStep
                                    step="1"
                                    title="Test Date Selection"
                                    description="We help you choose the right test date based on your university deadlines"
                                />
                                <RegistrationStep
                                    step="2"
                                    title="Online Registration"
                                    description="Assistance with filling the application form and uploading documents"
                                />
                                <RegistrationStep
                                    step="3"
                                    title="Payment Guidance"
                                    description="Help with payment process and fee structure"
                                />
                                <RegistrationStep
                                    step="4"
                                    title="Test Day Preparation"
                                    description="Guidance on what to bring and what to expect on test day"
                                />
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Test Centers in Nigeria</h3>
                            <div className="space-y-4">
                                <TestCenter
                                    location="Lagos"
                                    centers={["British Council Lagos", "IDP Lagos"]}
                                    frequency="Weekly tests"
                                />
                                <TestCenter
                                    location="Abuja"
                                    centers={["British Council Abuja", "IDP Abuja"]}
                                    frequency="Bi-weekly tests"
                                />
                                <TestCenter
                                    location="Port Harcourt"
                                    centers={["British Council Port Harcourt"]}
                                    frequency="Monthly tests"
                                />
                                <TestCenter
                                    location="Ibadan"
                                    centers={["British Council Ibadan"]}
                                    frequency="Monthly tests"
                                />
                            </div>

                            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                <h4 className="font-bold text-yellow-900 mb-2">Early Registration Advised</h4>
                                <p className="text-yellow-800 text-sm">
                                    Test slots fill up quickly. We recommend registering at least 6-8 weeks before your preferred test date.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600">
                            Common questions about IELTS preparation and testing
                        </p>
                    </div>

                    <div className="space-y-6">
                        <FAQItem
                            question="How long does it take to prepare for IELTS?"
                            answer="Most students need 4-8 weeks of intensive preparation, depending on their current English level and target score."
                        />
                        <FAQItem
                            question="What is the difference between Academic and General Training?"
                            answer="Academic IELTS is for university admission, while General Training is for immigration and work purposes. We focus on Academic IELTS for study abroad."
                        />
                        <FAQItem
                            question="How often can I take the IELTS test?"
                            answer="You can take IELTS as many times as you want. There's no limit, but we recommend proper preparation before each attempt."
                        />
                        <FAQItem
                            question="What if I don't get my target score?"
                            answer="We offer free retraining for students who complete our program but don't achieve their target score in the first attempt."
                        />
                        <FAQItem
                            question="Do you provide study materials?"
                            answer="Yes, we provide all necessary study materials including official Cambridge books, practice tests, and online resources."
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

// Component for Importance Cards
function ImportanceCard({ icon, title, description, score }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    score: string;
}) {
    return (
        <div className="text-center p-6 group hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-900 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
            <div className="bg-blue-100 text-blue-800 font-bold py-2 px-4 rounded-lg">
                Score: {score}
            </div>
        </div>
    )
}

// Component for Test Sections
function TestSection({ section, duration, questions, description, tips }: {
    section: string;
    duration: string;
    questions: string;
    description: string;
    tips: string[];
}) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{section}</h3>
            <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>{questions}</span>
                </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Tips:</h4>
                <ul className="space-y-1">
                    {tips.map((tip, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                            {tip}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

// Component for Score Requirements
function ScoreRequirement({ level, overall, breakdown, universities }: {
    level: string;
    overall: string;
    breakdown: string;
    universities: string[];
}) {
    return (
        <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex justify-between items-start mb-4">
                <h4 className="font-bold text-gray-900 text-lg">{level}</h4>
                <div className="bg-blue-100 text-blue-800 font-bold py-1 px-3 rounded">
                    {overall}
                </div>
            </div>
            <p className="text-gray-600 text-sm mb-3">{breakdown}</p>
            <ul className="space-y-1">
                {universities.map((uni, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        {uni}
                    </li>
                ))}
            </ul>
        </div>
    )
}

// Component for Training Features
function TrainingFeature({ icon, title, features }: {
    icon: React.ReactNode;
    title: string;
    features: string[];
}) {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-white/20">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <ul className="space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="text-blue-100 flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    )
}

// Component for Schedule Items
function ScheduleItem({ week, focus, activities }: {
    week: string;
    focus: string;
    activities: string[];
}) {
    return (
        <div className="text-center text-white">
            <div className="bg-white/20 rounded-lg p-3 mb-3">
                <div className="font-bold text-lg">{week}</div>
            </div>
            <h4 className="font-semibold mb-3">{focus}</h4>
            <ul className="space-y-1 text-blue-100 text-sm">
                {activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                ))}
            </ul>
        </div>
    )
}

// Component for Success Stories
function SuccessStory({ name, score, previous, duration, story, destination }: {
    name: string;
    score: string;
    previous: string;
    duration: string;
    story: string;
    destination: string;
}) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-blue-900 rounded-full flex items-center justify-center text-white font-bold">
                    {name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                    <h3 className="font-bold text-gray-900">{name}</h3>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Before: {previous}</span>
                        <span className="text-blue-600 font-bold">→</span>
                        <span className="text-blue-600 font-bold">After: {score}</span>
                    </div>
                </div>
            </div>
            <p className="text-gray-600 text-sm mb-4 italic">"{story}"</p>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{duration} training</span>
                <span className="text-blue-600 font-semibold text-sm">{destination}</span>
            </div>
        </div>
    )
}

// Component for Registration Steps
function RegistrationStep({ step, title, description }: {
    step: string;
    title: string;
    description: string;
}) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                {step}
            </div>
            <div>
                <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    )
}

// Component for Test Centers
function TestCenter({ location, centers, frequency }: {
    location: string;
    centers: string[];
    frequency: string;
}) {
    return (
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-2">{location}</h4>
            <ul className="space-y-1 mb-2">
                {centers.map((center, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                        {center}
                    </li>
                ))}
            </ul>
            <p className="text-blue-600 text-sm font-semibold">{frequency}</p>
        </div>
    )
}

// Component for FAQ Items
function FAQItem({ question, answer }: {
    question: string;
    answer: string;
}) {
    return (
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3">{question}</h3>
            <p className="text-gray-600">{answer}</p>
        </div>
    )
}

// Icon Components
function UniversityIcon() {
    return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
    )
}

function VisaIcon() {
    return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
    )
}

function ScholarshipIcon() {
    return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
    )
}

function CareerIcon() {
    return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    )
}

function BookIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
    )
}

function TeacherIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    )
}

function MaterialsIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    )
}