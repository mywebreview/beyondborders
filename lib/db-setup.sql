-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create applications table (main table)
CREATE TABLE IF NOT EXISTS applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  
  -- Personal Information
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  
  -- Passport Details
  date_of_birth DATE,
  passport_number VARCHAR(100),
  passport_issuance_date DATE,
  passport_expiry_date DATE,
  gender VARCHAR(20) CHECK (gender IN ('male', 'female', 'other')),
  marital_status VARCHAR(50),
  nationality VARCHAR(100),
  destination_country VARCHAR(10) CHECK (destination_country IN ('UK', 'Canada')),
  proposed_course VARCHAR(255),
  
  -- Next of Kin
  kin_first_name VARCHAR(255),
  kin_last_name VARCHAR(255),
  kin_phone VARCHAR(50),
  kin_email VARCHAR(255),
  kin_relationship VARCHAR(100),
  
  -- Referee
  referee_first_name VARCHAR(255),
  referee_last_name VARCHAR(255),
  referee_phone VARCHAR(50),
  referee_email VARCHAR(255),
  referee_company VARCHAR(255),
  
  -- Travel History
  countries_visited TEXT,
  visa_refused BOOLEAN DEFAULT FALSE,
  visa_refusal_reasons TEXT,
  
  -- Declaration
  declaration_accepted BOOLEAN DEFAULT FALSE,
  
  -- Application Status
  status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'submitted', 'under_review', 'approved', 'rejected')),
  
  -- Metadata
  current_step INTEGER DEFAULT 1,
  submission_date TIMESTAMP WITH TIME ZONE
);

-- Create education table (one-to-many relationship)
CREATE TABLE IF NOT EXISTS education (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  application_id UUID REFERENCES applications(id) ON DELETE CASCADE,
  school_name VARCHAR(255) NOT NULL,
  course_of_study VARCHAR(255) NOT NULL,
  certification VARCHAR(100) NOT NULL,
  duration_start DATE NOT NULL,
  duration_end DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create documents table (one-to-many relationship)
CREATE TABLE IF NOT EXISTS documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  application_id UUID REFERENCES applications(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  url TEXT NOT NULL,
  size BIGINT NOT NULL,
  file_type VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Update enrollments table (keep existing but add constraints)
CREATE TABLE IF NOT EXISTS enrollments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  country VARCHAR(10) NOT NULL CHECK (country IN ('UK', 'Canada')),
  program VARCHAR(255) NOT NULL,
  document_url TEXT,
  payment_reference VARCHAR(255),
  payment_status VARCHAR(20) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_applications_email ON applications(email);
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_applications_destination_country ON applications(destination_country);

CREATE INDEX IF NOT EXISTS idx_education_application_id ON education(application_id);
CREATE INDEX IF NOT EXISTS idx_documents_application_id ON documents(application_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_email ON enrollments(email);
CREATE INDEX IF NOT EXISTS idx_enrollments_payment_status ON enrollments(payment_status);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_applications_updated_at 
    BEFORE UPDATE ON applications 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_enrollments_updated_at 
    BEFORE UPDATE ON enrollments 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Create storage bucket for documents if not exists
INSERT INTO storage.buckets (id, name, public) 
VALUES ('documents', 'documents', true)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policies
CREATE POLICY "Allow authenticated uploads" ON storage.objects 
FOR INSERT TO authenticated 
WITH CHECK (bucket_id = 'documents');

CREATE POLICY "Allow public downloads" ON storage.objects 
FOR SELECT USING (bucket_id = 'documents');

CREATE POLICY "Allow authenticated updates" ON storage.objects 
FOR UPDATE TO authenticated USING (bucket_id = 'documents');

CREATE POLICY "Allow authenticated deletes" ON storage.objects 
FOR DELETE TO authenticated USING (bucket_id = 'documents');