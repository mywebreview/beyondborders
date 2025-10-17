import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface StudentEmailData {
    email: string
    name: string
    reference: string
    country: 'UK' | 'Canada'
    program: string
}

interface AdminEmailData {
    studentName: string
    studentEmail: string
    studentPhone: string
    country: 'UK' | 'Canada'
    program: string
    reference: string
    documentUrl?: string
}

const getFromEmail = (country: 'UK' | 'Canada') => {
    return country === 'UK'
        ? process.env.RESEND_FROM_UK || 'uk.admission@prodoria.com'
        : process.env.RESEND_FROM_CA || 'canada.admission@prodoria.com';
}

const studentEmailTemplate = (data: StudentEmailData) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Application Confirmation</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background-color: #f9fafb; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
    .header { background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; padding: 40px 30px; text-align: center; border-bottom: 4px solid #0ea5e9; }
    .header h1 { margin: 0; font-size: 28px; font-weight: 700; }
    .content { padding: 40px 30px; background: #ffffff; }
    .greeting { font-size: 18px; margin-bottom: 20px; color: #1f2937; }
    .message { font-size: 16px; line-height: 1.8; color: #4b5563; margin-bottom: 30px; }
    .info-box { background: linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%); border-left: 5px solid #3b82f6; padding: 25px; margin: 30px 0; border-radius: 8px; }
    .info-box h3 { margin-top: 0; color: #1e40af; font-size: 16px; font-weight: 600; }
    .info-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #dbeafe; font-size: 14px; }
    .info-row:last-child { border-bottom: none; }
    .info-label { font-weight: 600; color: #1e40af; }
    .info-value { color: #374151; }
    .status-badge { display: inline-block; background: #10b981; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-top: 8px; }
    .next-steps { background: #f3f4f6; padding: 25px; border-radius: 8px; margin: 30px 0; }
    .next-steps h3 { margin-top: 0; color: #1f2937; font-size: 16px; font-weight: 600; }
    .next-steps ol { margin: 15px 0; padding-left: 20px; color: #4b5563; font-size: 14px; }
    .next-steps li { margin-bottom: 12px; line-height: 1.6; }
    .cta-box { background: #fef3c7; border-left: 5px solid #f59e0b; padding: 20px 25px; margin: 30px 0; border-radius: 8px; font-size: 14px; color: #92400e; }
    .contact-info { background: #eff6ff; padding: 20px 25px; border-radius: 8px; margin: 20px 0; font-size: 14px; border: 1px solid #bfdbfe; }
    .footer { background: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
    .reference { font-family: 'Courier New', monospace; background: #f3f4f6; padding: 2px 6px; border-radius: 4px; color: #1f2937; font-weight: 600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✓ Application Submitted Successfully</h1>
      <p>Your journey to ${data.country} education begins here</p>
    </div>

    <div class="content">
      <div class="greeting">Hello <strong>${data.name}</strong>,</div>

      <div class="message">
        Thank you for submitting your application to study in <strong>${data.country}</strong>! We're thrilled to be part of your educational journey. Your application has been received and is being processed by our admissions team.
      </div>

      <div class="info-box">
        <h3>Your Application Details</h3>
        <div class="info-row">
          <span class="info-label">Reference Number:</span>
          <span class="info-value"><span class="reference">${data.reference}</span></span>
        </div>
        <div class="info-row">
          <span class="info-label">Destination Country:</span>
          <span class="info-value">${data.country}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Program:</span>
          <span class="info-value">${data.program}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Status:</span>
          <span class="info-value"><span class="status-badge">✓ SUBMITTED</span></span>
        </div>
      </div>

      <div class="next-steps">
        <h3>📋 What Happens Next?</h3>
        <ol>
          <li><strong>Initial Review (24-48 hours):</strong> Our admissions team will review your application.</li>
          <li><strong>Consultant Assignment:</strong> A dedicated consultant will be assigned to your case.</li>
          <li><strong>Consultation Call:</strong> You'll receive a call from your consultant within 24 hours.</li>
          <li><strong>University Shortlisting:</strong> We'll identify suitable universities for you.</li>
          <li><strong>Application Submission:</strong> We'll guide you through the process.</li>
          <li><strong>Visa Preparation:</strong> Full support with visa documentation.</li>
        </ol>
      </div>

      <div class="cta-box">
        <strong>⚠️ Important:</strong> Keep your phone and email accessible. Our consultant may contact you at any time.
      </div>

      <div class="contact-info">
        <strong>Need Immediate Assistance?</strong>
        <div>📧 Email: ${data.country === 'UK' ? 'uk.admission@prodoria.com' : 'canada.admission@prodoria.com'}</div>
        <div>🌐 Website: www.prodoria.com</div>
      </div>

      <p style="font-size: 13px; color: #6b7280;">Please save this email for your records. Keep your reference safe as you may need it for future correspondence.</p>
    </div>

    <div class="footer">
      <p><strong>Prodoria Education Consultancy</strong></p>
      <p>Reference ID: <span class="reference">${data.reference}</span></p>
      <p style="margin-top: 15px; border-top: 1px solid #e5e7eb; padding-top: 15px;">This is an automated confirmation email. Please do not reply directly.</p>
    </div>
  </div>
</body>
</html>
`;

const adminEmailTemplate = (data: AdminEmailData) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Application</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background-color: #f9fafb; margin: 0; padding: 0; }
    .container { max-width: 700px; margin: 20px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
    .header { background: linear-gradient(135deg, #1f2937 0%, #111827 100%); color: white; padding: 30px; border-bottom: 4px solid #3b82f6; }
    .header h2 { margin: 0; font-size: 24px; font-weight: 700; }
    .content { padding: 30px; }
    .alert-box { background: #fef3c7; border-left: 5px solid #f59e0b; padding: 15px 20px; margin-bottom: 25px; border-radius: 6px; font-size: 14px; color: #92400e; font-weight: 500; }
    .info-section { margin-bottom: 30px; }
    .info-section h3 { color: #1f2937; font-size: 16px; font-weight: 600; margin: 0 0 15px 0; padding-bottom: 10px; border-bottom: 2px solid #e5e7eb; }
    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; font-size: 14px; }
    .info-item { background: #f9fafb; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6; }
    .info-label { font-weight: 600; color: #6b7280; display: block; margin-bottom: 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
    .info-value { color: #1f2937; font-weight: 500; word-break: break-word; }
    .action-box { background: linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%); border: 2px solid #3b82f6; border-radius: 8px; padding: 20px; margin-top: 25px; }
    .action-box h4 { margin-top: 0; color: #1e40af; font-size: 15px; font-weight: 600; }
    .action-list { list-style: none; padding: 0; margin: 15px 0 0 0; font-size: 14px; }
    .action-list li { padding: 8px 0; color: #1f2937; border-bottom: 1px solid #dbeafe; }
    .action-list li:last-child { border-bottom: none; }
    .footer { background: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>🆕 New Application Received</h2>
      <p>Reference: <strong>${data.reference}</strong></p>
    </div>

    <div class="content">
      <div class="alert-box">
        <strong>Action Required:</strong> Assign a consultant and initiate contact within 24 hours.
      </div>

      <div class="info-section">
        <h3>👤 Student Information</h3>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Full Name</span>
            <span class="info-value">${data.studentName}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Email</span>
            <span class="info-value">${data.studentEmail}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Phone</span>
            <span class="info-value">${data.studentPhone}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Reference</span>
            <span class="info-value"><strong>${data.reference}</strong></span>
          </div>
        </div>
      </div>

      <div class="info-section">
        <h3>📚 Application Information</h3>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Destination Country</span>
            <span class="info-value">${data.country}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Program</span>
            <span class="info-value">${data.program}</span>
          </div>
        </div>
      </div>

      <div class="action-box">
        <h4>✅ Required Actions</h4>
        <ul class="action-list">
          <li><strong>1. Verify Application:</strong> Check completeness of data</li>
          <li><strong>2. Assign Consultant:</strong> Assign qualified consultant</li>
          <li><strong>3. Initial Contact:</strong> Contact within 24 hours</li>
          <li><strong>4. Schedule Consultation:</strong> Set up detailed call</li>
          <li><strong>5. University Recommendation:</strong> Prepare recommendations</li>
        </ul>
      </div>
    </div>

    <div class="footer">
      <p><strong>Prodoria Education Consultancy - Admin Portal</strong></p>
      <p>This is an automated notification. Do not reply to this email.</p>
    </div>
  </div>
</body>
</html>
`;

export async function sendStudentConfirmationEmail(data: StudentEmailData) {
    try {
        console.log('📧 Attempting to send student email to:', data.email)

        const fromEmail = getFromEmail(data.country)

        const result = await resend.emails.send({
            from: `Prodoria Admissions <${fromEmail}>`,
            to: data.email,
            subject: `Application Confirmation - Reference #${data.reference}`,
            html: studentEmailTemplate(data),
        });

        console.log('✅ Student email sent successfully to:', data.email)
        console.log('📨 Email ID:', result.data?.id)

        return { success: true, emailId: result.data?.id }
    } catch (error) {
        console.error('❌ Error sending student email:', error)
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        }
    }
}

export async function sendAdminNotificationEmail(data: AdminEmailData) {
    try {
        console.log('📧 Attempting to send admin email')

        const fromEmail = getFromEmail(data.country)
        const adminEmail = process.env.ADMIN_EMAIL || 'prodoria@prodoria.com'

        const result = await resend.emails.send({
            from: `Prodoria Admissions <${fromEmail}>`,
            to: adminEmail,
            subject: `New ${data.country} Application - ${data.reference}`,
            html: adminEmailTemplate(data),
        });

        console.log('✅ Admin email sent successfully to:', adminEmail)
        console.log('📨 Email ID:', result.data?.id)

        return { success: true, emailId: result.data?.id }
    } catch (error) {
        console.error('❌ Error sending admin email:', error)
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        }
    }
}