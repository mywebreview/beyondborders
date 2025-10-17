export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            applications: {
                Row: {
                    id: string
                    created_at: string
                    updated_at: string
                    first_name: string
                    last_name: string
                    phone: string
                    email: string
                    date_of_birth: string | null
                    passport_number: string | null
                    passport_issuance_date: string | null
                    passport_expiry_date: string | null
                    gender: 'male' | 'female' | 'other' | null
                    marital_status: string | null
                    nationality: string | null
                    destination_country: 'UK' | 'Canada' | null
                    proposed_course: string | null
                    kin_first_name: string | null
                    kin_last_name: string | null
                    kin_phone: string | null
                    kin_email: string | null
                    kin_relationship: string | null
                    referee_first_name: string | null
                    referee_last_name: string | null
                    referee_phone: string | null
                    referee_email: string | null
                    referee_company: string | null
                    countries_visited: string | null
                    visa_refused: boolean | null
                    visa_refusal_reasons: string | null
                    declaration_accepted: boolean | null
                    status: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected'
                    current_step: number
                    submission_date: string | null
                }
                Insert: {
                    id?: string
                    created_at?: string
                    updated_at?: string
                    first_name: string
                    last_name: string
                    phone: string
                    email: string
                    date_of_birth?: string | null
                    passport_number?: string | null
                    passport_issuance_date?: string | null
                    passport_expiry_date?: string | null
                    gender?: 'male' | 'female' | 'other' | null
                    marital_status?: string | null
                    nationality?: string | null
                    destination_country?: 'UK' | 'Canada' | null
                    proposed_course?: string | null
                    kin_first_name?: string | null
                    kin_last_name?: string | null
                    kin_phone?: string | null
                    kin_email?: string | null
                    kin_relationship?: string | null
                    referee_first_name?: string | null
                    referee_last_name?: string | null
                    referee_phone?: string | null
                    referee_email?: string | null
                    referee_company?: string | null
                    countries_visited?: string | null
                    visa_refused?: boolean | null
                    visa_refusal_reasons?: string | null
                    declaration_accepted?: boolean | null
                    status?: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected'
                    current_step?: number
                    submission_date?: string | null
                }
                Update: {
                    id?: string
                    created_at?: string
                    updated_at?: string
                    first_name?: string
                    last_name?: string
                    phone?: string
                    email?: string
                    date_of_birth?: string | null
                    passport_number?: string | null
                    passport_issuance_date?: string | null
                    passport_expiry_date?: string | null
                    gender?: 'male' | 'female' | 'other' | null
                    marital_status?: string | null
                    nationality?: string | null
                    destination_country?: 'UK' | 'Canada' | null
                    proposed_course?: string | null
                    kin_first_name?: string | null
                    kin_last_name?: string | null
                    kin_phone?: string | null
                    kin_email?: string | null
                    kin_relationship?: string | null
                    referee_first_name?: string | null
                    referee_last_name?: string | null
                    referee_phone?: string | null
                    referee_email?: string | null
                    referee_company?: string | null
                    countries_visited?: string | null
                    visa_refused?: boolean | null
                    visa_refusal_reasons?: string | null
                    declaration_accepted?: boolean | null
                    status?: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected'
                    current_step?: number
                    submission_date?: string | null
                }
            }
            education: {
                Row: {
                    id: string
                    application_id: string
                    school_name: string
                    course_of_study: string
                    certification: string
                    duration_start: string
                    duration_end: string
                    created_at: string
                }
                Insert: {
                    id?: string
                    application_id: string
                    school_name: string
                    course_of_study: string
                    certification: string
                    duration_start: string
                    duration_end: string
                    created_at?: string
                }
                Update: {
                    id?: string
                    application_id?: string
                    school_name?: string
                    course_of_study?: string
                    certification?: string
                    duration_start?: string
                    duration_end?: string
                    created_at?: string
                }
            }
            documents: {
                Row: {
                    id: string
                    application_id: string
                    name: string
                    url: string
                    size: number
                    file_type: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    application_id: string
                    name: string
                    url: string
                    size: number
                    file_type?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    application_id?: string
                    name?: string
                    url?: string
                    size?: number
                    file_type?: string | null
                    created_at?: string
                }
            }
            enrollments: {
                Row: {
                    id: string
                    full_name: string
                    email: string
                    phone: string
                    country: 'UK' | 'Canada'
                    program: string
                    document_url: string | null
                    payment_reference: string | null
                    payment_status: 'pending' | 'completed' | 'failed'
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    full_name: string
                    email: string
                    phone: string
                    country: 'UK' | 'Canada'
                    program: string
                    document_url?: string | null
                    payment_reference?: string | null
                    payment_status?: 'pending' | 'completed' | 'failed'
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    full_name?: string
                    email?: string
                    phone?: string
                    country?: 'UK' | 'Canada'
                    program?: string
                    document_url?: string | null
                    payment_reference?: string | null
                    payment_status?: 'pending' | 'completed' | 'failed'
                    created_at?: string
                    updated_at?: string
                }
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
    }
}