import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Database } from '@/lib/database.types'
import { sendStudentConfirmationEmail, sendAdminNotificationEmail } from '@/lib/email/resendEmail'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// Define proper TypeScript interfaces
interface ApplicationData {
    first_name: string
    last_name: string
    phone: string
    email: string
    address: string
    address_line_2?: string
    city: string
    state: string
    zip_code: string
    country: string
    date_of_birth?: string
    passport_number?: string
    passport_issuance_date?: string
    passport_expiry_date?: string
    gender?: string
    marital_status?: string
    nationality?: string
    destination_country: string
    proposed_course: string
    countries_visited?: string
    visa_refused?: boolean
    visa_refusal_reasons?: string
    kin_first_name?: string
    kin_last_name?: string
    kin_phone?: string
    kin_email?: string
    kin_relationship?: string
    referee_first_name?: string
    referee_last_name?: string
    referee_phone?: string
    referee_email?: string
    referee_company?: string
    declaration_accepted?: boolean
}

interface EducationItem {
    school_name: string
    course_of_study: string
    certification: string
    duration_start: string
    duration_end: string
}

interface DocumentItem {
    name: string
    url: string
    size: number
}

interface ApplicationPayload {
    applicationData: ApplicationData
    educationData: EducationItem[]
    documentData: DocumentItem[]
}

interface EmailResult {
    success: boolean
    message?: string
    error?: string
}

function generateReference(applicationId: string, country: string): string {
    const timestamp = Date.now().toString().slice(-4)
    const idPart = applicationId.slice(0, 8).toUpperCase()
    return `APPL-${country}-${idPart}-${timestamp}`
}

// Helper function to validate and cast country
function validateCountry(country: string): 'UK' | 'Canada' {
    const validCountries = ['UK', 'Canada']
    if (validCountries.includes(country)) {
        return country as 'UK' | 'Canada'
    }
    // Default to Canada if invalid country provided
    console.warn(`Invalid country "${country}" provided, defaulting to "Canada"`)
    return 'Canada'
}

export async function POST(request: NextRequest) {
    console.log('=== APPLICATION SUBMISSION STARTED ===')

    try {
        const body: ApplicationPayload = await request.json()
        const { applicationData, educationData, documentData } = body

        // Validate required data
        if (!applicationData) {
            return NextResponse.json(
                { error: 'Application data is required' },
                { status: 400 }
            )
        }

        // Validate required fields
        const requiredFields = ['first_name', 'last_name', 'phone', 'email', 'address', 'city', 'state', 'zip_code', 'country', 'destination_country', 'proposed_course']
        const missingFields = requiredFields.filter(field => !applicationData[field as keyof ApplicationData])

        if (missingFields.length > 0) {
            return NextResponse.json(
                { error: `Missing required fields: ${missingFields.join(', ')}` },
                { status: 400 }
            )
        }

        // Validate and cast destination country
        const validatedCountry = validateCountry(applicationData.destination_country)

        console.log('Received application data:', {
            email: applicationData.email,
            name: `${applicationData.first_name} ${applicationData.last_name}`,
            country: validatedCountry
        })

        // Insert main application
        console.log('Inserting application into database...')

        const applicationInsertData: Database['public']['Tables']['applications']['Insert'] = {
            first_name: applicationData.first_name,
            last_name: applicationData.last_name,
            phone: applicationData.phone,
            email: applicationData.email,
            address: applicationData.address,
            address_line_2: applicationData.address_line_2 || null,
            city: applicationData.city,
            state: applicationData.state,
            zip_code: applicationData.zip_code,
            country: applicationData.country,
            date_of_birth: applicationData.date_of_birth || null,
            passport_number: applicationData.passport_number || null,
            passport_issuance_date: applicationData.passport_issuance_date || null,
            passport_expiry_date: applicationData.passport_expiry_date || null,
            gender: applicationData.gender || null,
            marital_status: applicationData.marital_status || null,
            nationality: applicationData.nationality || null,
            destination_country: validatedCountry, // Use validated country
            proposed_course: applicationData.proposed_course,
            countries_visited: applicationData.countries_visited || null,
            visa_refused: applicationData.visa_refused || false,
            visa_refusal_reasons: applicationData.visa_refusal_reasons || null,
            kin_first_name: applicationData.kin_first_name || null,
            kin_last_name: applicationData.kin_last_name || null,
            kin_phone: applicationData.kin_phone || null,
            kin_email: applicationData.kin_email || null,
            kin_relationship: applicationData.kin_relationship || null,
            referee_first_name: applicationData.referee_first_name || null,
            referee_last_name: applicationData.referee_last_name || null,
            referee_phone: applicationData.referee_phone || null,
            referee_email: applicationData.referee_email || null,
            referee_company: applicationData.referee_company || null,
            declaration_accepted: applicationData.declaration_accepted || false,
            status: 'submitted',
            current_step: 10,
            submission_date: new Date().toISOString(),
        }

        const { data: application, error: dbError } = await supabase
            .from('applications')
            .insert([applicationInsertData])
            .select()
            .single()

        if (dbError || !application) {
            console.error('❌ Database error:', dbError)
            return NextResponse.json(
                {
                    error: 'Failed to save application',
                    details: dbError?.message || 'Unknown database error'
                },
                { status: 500 }
            )
        }

        console.log('✓ Application saved with ID:', application.id)

        const reference = generateReference(application.id, validatedCountry)
        console.log('Generated reference:', reference)

        // Insert education records
        if (educationData && educationData.length > 0) {
            console.log('Inserting education records...')
            const educationInsertData: Database['public']['Tables']['education']['Insert'][] = educationData.map((edu) => ({
                application_id: application.id,
                school_name: edu.school_name,
                course_of_study: edu.course_of_study,
                certification: edu.certification,
                duration_start: edu.duration_start,
                duration_end: edu.duration_end,
            }))

            const { error: educationError } = await supabase
                .from('education')
                .insert(educationInsertData)

            if (educationError) {
                console.error('Education insert error:', educationError)
                // Don't fail the entire request if education fails
            } else {
                console.log('✓ Education records saved')
            }
        }

        // Insert document records
        if (documentData && documentData.length > 0) {
            console.log('Inserting document records...')
            const documentsInsertData: Database['public']['Tables']['documents']['Insert'][] = documentData.map((doc) => ({
                application_id: application.id,
                name: doc.name,
                url: doc.url,
                size: doc.size,
                file_type: doc.name.split('.').pop() || 'document',
            }))

            const { error: documentsError } = await supabase
                .from('documents')
                .insert(documentsInsertData)

            if (documentsError) {
                console.error('Documents insert error:', documentsError)
                // Don't fail the entire request if documents fail
            } else {
                console.log('✓ Document records saved')
            }
        }

        // Send emails
        console.log('=== STARTING EMAIL SENDING ===')

        const studentEmailData = {
            email: applicationData.email,
            name: `${applicationData.first_name} ${applicationData.last_name}`,
            reference,
            country: validatedCountry, // Use validated country
            program: applicationData.proposed_course,
        }

        const adminEmailData = {
            studentName: `${applicationData.first_name} ${applicationData.last_name}`,
            studentEmail: applicationData.email,
            studentPhone: applicationData.phone,
            country: validatedCountry, // Use validated country
            program: applicationData.proposed_course,
            reference,
            documentUrl: documentData?.[0]?.url,
        }

        let studentEmailResult: EmailResult = { success: false }
        let adminEmailResult: EmailResult = { success: false }

        try {
            console.log('Sending student email...')
            studentEmailResult = await sendStudentConfirmationEmail(studentEmailData)
        } catch (emailError) {
            console.error('Student email error:', emailError)
            studentEmailResult = {
                success: false,
                error: emailError instanceof Error ? emailError.message : 'Unknown email error'
            }
        }

        try {
            console.log('Sending admin email...')
            adminEmailResult = await sendAdminNotificationEmail(adminEmailData)
        } catch (emailError) {
            console.error('Admin email error:', emailError)
            adminEmailResult = {
                success: false,
                error: emailError instanceof Error ? emailError.message : 'Unknown email error'
            }
        }

        console.log('=== EMAIL SENDING RESULTS ===')
        console.log('Student email:', studentEmailResult)
        console.log('Admin email:', adminEmailResult)

        // Return success even if emails failed (application is still saved)
        return NextResponse.json(
            {
                success: true,
                application: {
                    id: application.id,
                    reference,
                    email: applicationData.email,
                    status: 'submitted',
                    emailsSent: {
                        student: studentEmailResult.success,
                        admin: adminEmailResult.success,
                    },
                    emailDetails: {
                        student: studentEmailResult,
                        admin: adminEmailResult,
                    }
                },
                message: 'Application submitted successfully'
            },
            { status: 201 }
        )
    } catch (error) {
        console.error('❌ API Error:', error)
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'

        return NextResponse.json(
            {
                success: false,
                error: 'Failed to process application',
                details: errorMessage,
            },
            { status: 500 }
        )
    }
}

// Add OPTIONS handler for CORS
export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    })
}