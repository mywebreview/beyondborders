// lib/schemas.ts
import { z } from 'zod'

// Step 1: Personal Information
export const personalInfoSchema = z.object({
    first_name: z.string().min(2, 'First name must be at least 2 characters'),
    last_name: z.string().min(2, 'Last name must be at least 2 characters'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    email: z.string().email('Invalid email address'),
})

// Step 2: Address
export const addressSchema = z.object({
    address: z.string().min(5, 'Address is required'),
    address_line_2: z.string().optional(),
    city: z.string().min(2, 'City is required'),
    state: z.string().min(2, 'State/Region/Province is required'),
    zip_code: z.string().min(3, 'Zip/Post code is required'),
    country: z.string().min(2, 'Country is required'),
})

// Step 3: Passport Details
export const passportSchema = z.object({
    date_of_birth: z.string().min(1, 'Date of birth is required'),
    passport_number: z.string().min(6, 'Passport number is required'),
    passport_issuance_date: z.string().min(1, 'Passport issuance date is required'),
    passport_expiry_date: z.string().min(1, 'Passport expiry date is required'),
    gender: z.enum(['male', 'female', 'other']),
    marital_status: z.string().min(1, 'Marital status is required'),
    nationality: z.string().min(2, 'Nationality is required'),
    destination_country: z.enum(['UK', 'Canada']),
    proposed_course: z.string().min(3, 'Proposed course of study is required'),
})

// Step 4: Travel History
export const travelHistorySchema = z.object({
    countries_visited: z.string().min(1, 'Please list countries visited'),
    visa_refused: z.boolean(),
    visa_refusal_reasons: z.string().optional(),
})

// Step 5: Education
export const educationItemSchema = z.object({
    school_name: z.string().min(2, 'School name is required'),
    course_of_study: z.string().min(2, 'Course of study is required'),
    certification: z.string().min(2, 'Certification is required'),
    duration_start: z.string().min(1, 'Start date is required'),
    duration_end: z.string().min(1, 'End date is required'),
})

export const educationSchema = z.object({
    education: z.array(educationItemSchema).min(1, 'At least one education entry is required'),
})

// Step 6: Referee
export const refereeSchema = z.object({
    referee_first_name: z.string().min(2, 'Referee first name is required'),
    referee_last_name: z.string().min(2, 'Referee last name is required'),
    referee_phone: z.string().min(10, 'Referee phone is required'),
    referee_email: z.string().email('Invalid referee email'),
    referee_company: z.string().min(2, 'Referee company is required'),
})

// Step 7: Next of Kin
export const nextOfKinSchema = z.object({
    kin_first_name: z.string().min(2, 'Next of kin first name is required'),
    kin_last_name: z.string().min(2, 'Next of kin last name is required'),
    kin_phone: z.string().min(10, 'Next of kin phone is required'),
    kin_email: z.string().email('Invalid next of kin email'),
    kin_relationship: z.string().min(2, 'Relationship is required'),
})

// Step 8: Declaration
export const declarationSchema = z.object({
    declaration_accepted: z.boolean().refine(val => val === true, {
        message: 'You must accept the declaration to proceed'
    }),
})

// Step 9: Documents
export const documentsSchema = z.object({
    documents: z.array(z.object({
        name: z.string(),
        url: z.string(),
        size: z.number(),
    })).min(1, 'At least one document is required'),
})

// Complete application schema
export const completeApplicationSchema = personalInfoSchema
    .merge(addressSchema)
    .merge(passportSchema)
    .merge(travelHistorySchema)
    .merge(educationSchema)
    .merge(refereeSchema)
    .merge(nextOfKinSchema)
    .merge(declarationSchema)
    .merge(documentsSchema)

export type PersonalInfo = z.infer<typeof personalInfoSchema>
export type Address = z.infer<typeof addressSchema>
export type PassportDetails = z.infer<typeof passportSchema>
export type TravelHistory = z.infer<typeof travelHistorySchema>
export type Education = z.infer<typeof educationSchema>
export type EducationItem = z.infer<typeof educationItemSchema>
export type Referee = z.infer<typeof refereeSchema>
export type NextOfKin = z.infer<typeof nextOfKinSchema>
export type Declaration = z.infer<typeof declarationSchema>
export type Documents = z.infer<typeof documentsSchema>
export type CompleteApplication = z.infer<typeof completeApplicationSchema>