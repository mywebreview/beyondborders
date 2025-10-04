import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseServiceKey) {
  console.error('CRITICAL: SUPABASE_SERVICE_ROLE_KEY is not set. Payment webhooks will fail.')
  if (process.env.NODE_ENV === 'production') {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY must be set in production for payment processing')
  }
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey || '', {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

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
