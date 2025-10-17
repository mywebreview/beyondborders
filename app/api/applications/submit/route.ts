import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { sendStudentConfirmationEmail, sendAdminNotificationEmail } from '@/lib/email/resendEmail'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
)

interface ApplicationPayload {
    applicationData: any
    educationData: any[]
    documentData: any[]
}

function generateReference(applicationId: string, country: string): string {
    const timestamp = Date.now().toString().slice(-4)
    const idPart = applicationId.slice(0, 8).toUpperCase()
    return `APPL-${country}-${idPart}-${timestamp}`
}

export async function POST(request: NextRequest) {
    console.log('=== APPLICATION SUBMISSION STARTED ===')

    try {
        const body: ApplicationPayload = await request.json()
        const { applicationData, educationData, documentData } = body

        console.log('Received application data:', {
            email: applicationData.email,
            name: `${applicationData.first_name} ${applicationData.last_name}`,
            country: applicationData.destination_country
        })

        if (!applicationData) {
            return NextResponse.json(
                { error: 'Application data is required' },
                { status: 400 }
            )
        }

        // Insert main application
        console.log('Inserting application into database...')
        const { data: application, error: dbError } = await supabase
            .from('applications')
            .insert([
                {
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
                    destination_country: applicationData.destination_country,
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
                },
            ])
            .select()
            .single()

        if (dbError || !application) {
            console.error('❌ Database error:', dbError)
            return NextResponse.json(
                { error: 'Failed to save application: ' + (dbError?.message || 'Unknown error') },
                { status: 500 }
            )
        }

        console.log('✓ Application saved with ID:', application.id)

        const reference = generateReference(application.id, applicationData.destination_country)
        console.log('Generated reference:', reference)

        // Insert education records
        if (educationData && educationData.length > 0) {
            console.log('Inserting education records...')
            const { error: educationError } = await supabase
                .from('education')
                .insert(
                    educationData.map((edu) => ({
                        application_id: application.id,
                        school_name: edu.school_name,
                        course_of_study: edu.course_of_study,
                        certification: edu.certification,
                        duration_start: edu.duration_start,
                        duration_end: edu.duration_end,
                    }))
                )

            if (educationError) {
                console.error('Education insert error:', educationError)
            } else {
                console.log('✓ Education records saved')
            }
        }

        // Insert document records
        if (documentData && documentData.length > 0) {
            console.log('Inserting document records...')
            const { error: documentsError } = await supabase
                .from('documents')
                .insert(
                    documentData.map((doc) => ({
                        application_id: application.id,
                        name: doc.name,
                        url: doc.url,
                        size: doc.size,
                        file_type: doc.name.split('.').pop() || 'document',
                    }))
                )

            if (documentsError) {
                console.error('Documents insert error:', documentsError)
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
            country: applicationData.destination_country,
            program: applicationData.proposed_course,
        }

        const adminEmailData = {
            studentName: `${applicationData.first_name} ${applicationData.last_name}`,
            studentEmail: applicationData.email,
            studentPhone: applicationData.phone,
            country: applicationData.destination_country,
            program: applicationData.proposed_course,
            reference,
            documentUrl: documentData?.[0]?.url,
        }

        console.log('Sending student email...')
        const studentEmailResult = await sendStudentConfirmationEmail(studentEmailData)

        console.log('Sending admin email...')
        const adminEmailResult = await sendAdminNotificationEmail(adminEmailData)

        console.log('=== EMAIL SENDING RESULTS ===')
        console.log('Student email:', studentEmailResult)
        console.log('Admin email:', adminEmailResult)

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
            },
            { status: 201 }
        )
    } catch (error) {
        console.error('❌ API Error:', error)
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        return NextResponse.json(
            {
                error: 'Failed to process application',
                details: errorMessage,
            },
            { status: 500 }
        )
    }
}