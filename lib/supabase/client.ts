import { createClient } from '@supabase/supabase-js'
import { Database } from '../database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

export type Application = Database['public']['Tables']['applications']['Row']
export type Education = Database['public']['Tables']['education']['Row']
export type Document = Database['public']['Tables']['documents']['Row']
export type Enrollment = Database['public']['Tables']['enrollments']['Row']