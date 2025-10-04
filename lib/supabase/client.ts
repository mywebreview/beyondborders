import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Enrollment {
  id?: string
  full_name: string
  email: string
  phone: string
  country: 'UK' | 'Canada'
  program: string
  document_url?: string
  payment_reference?: string
  payment_status?: 'pending' | 'completed' | 'failed'
  created_at?: string
}
