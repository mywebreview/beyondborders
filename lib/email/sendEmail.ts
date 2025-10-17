import nodemailer from 'nodemailer'

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

const getEmailConfig = (country: 'UK' | 'Canada') => {
  console.log('Email config for country:', country)

  if (country === 'UK') {
    return {
      host: 'smtp.zeptomail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.ZEPTOMAIL_UK_USER,
        pass: process.env.ZEPTOMAIL_UK_API_KEY,
      },
      from: process.env.ZEPTOMAIL_UK_FROM || 'uk.admission@prodoria.com',
    }
  }

  return {
    host: 'smtp.zeptomail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.ZEPTOMAIL_CA_USER,
      pass: process.env.ZEPTOMAIL_CA_API_KEY,
    },
    from: process.env.ZEPTOMAIL_CA_FROM || 'canada.admission@prodoria.com',
  }
}

const createTransporter = (country: 'UK' | 'Canada') => {
  const config = getEmailConfig(country)
  console.log('Creating transporter with config:', {
    host: config.host,
    port: config.port,
    user: config.auth.user,
    from: config.from
  })

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: config.auth,
  })
}

const studentEmailTemplate = (data: StudentEmailData) => ({
  subject: `Application Confirmation - Reference #${data.reference}`,
  html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Application Confirmation</title>
</head>
<body>
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; padding: 40px 30px; text-align: center;">
      <h1 style="margin: 0; font-size: 28px;">✓ Application Submitted Successfully</h1>
      <p>Your journey to ${data.country} education begins here</p>
    </div>

    <div style="padding: 40px 30px; background: #ffffff;">
      <div style="font-size: 18px; margin-bottom: 20px;">Hello <strong>${data.name}</strong>,</div>

      <div style="font-size: 16px; line-height: 1.8; color: #4b5563; margin-bottom: 30px;">
        Thank you for submitting your application to study in <strong>${data.country}</strong>! We're thrilled to be part of your educational journey.
      </div>

      <div style="background: #eff6ff; border-left: 5px solid #3b82f6; padding: 25px; margin: 30px 0; border-radius: 8px;">
        <h3 style="color: #1e40af; margin-top: 0;">Your Application Details</h3>
        <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #dbeafe;">
          <span style="font-weight: 600; color: #1e40af;">Reference Number:</span>
          <span style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px; font-weight: 600;">${data.reference}</span>
        </div>
        <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #dbeafe;">
          <span style="font-weight: 600; color: #1e40af;">Destination Country:</span>
          <span>${data.country}</span>
        </div>
        <div style="display: flex; justify-content: space-between; padding: 10px 0;">
          <span style="font-weight: 600; color: #1e40af;">Program:</span>
          <span>${data.program}</span>
        </div>
      </div>

      <div style="background: #f3f4f6; padding: 25px; border-radius: 8px; margin: 30px 0;">
        <h3>📋 What Happens Next?</h3>
        <ol>
          <li><strong>Initial Review (24-48 hours):</strong> Our admissions team will review your application.</li>
          <li><strong>Consultant Assignment:</strong> A dedicated consultant will be assigned to your case.</li>
          <li><strong>Consultation Call:</strong> You'll receive a call from your consultant within 24 hours.</li>
        </ol>
      </div>

      <div style="background: #fef3c7; border-left: 5px solid #f59e0b; padding: 20px 25px; margin: 30px 0; border-radius: 8px;">
        <strong>⚠️ Important:</strong> Keep your phone and email accessible. Our consultant may contact you at any time.
      </div>

      <div style="background: #eff6ff; padding: 20px 25px; border-radius: 8px; margin: 20px 0;">
        <strong>Need Immediate Assistance?</strong>
        <div>📧 Email: ${data.country === 'UK' ? 'uk.admission@prodoria.com' : 'canada.admission@prodoria.com'}</div>
        <div>🌐 Website: www.prodoria.com</div>
      </div>
    </div>

    <div style="background: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
      <p><strong>Prodoria Education Consultancy</strong></p>
      <p>Reference ID: ${data.reference}</p>
    </div>
  </div>
</body>
</html>
  `,
})

const adminEmailTemplate = (data: AdminEmailData) => ({
  subject: `New ${data.country} Application - ${data.reference}`,
  html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Application</title>
</head>
<body>
  <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
    <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); color: white; padding: 30px;">
      <h2 style="margin: 0;">🆕 New Application Received</h2>
      <p>Reference: <strong>${data.reference}</strong></p>
    </div>

    <div style="padding: 30px;">
      <div style="background: #fef3c7; border-left: 5px solid #f59e0b; padding: 15px 20px; margin-bottom: 25px;">
        <strong>Action Required:</strong> Assign a consultant and initiate contact within 24 hours.
      </div>

      <div style="margin-bottom: 30px;">
        <h3>👤 Student Information</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div style="background: #f9fafb; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
            <span style="font-weight: 600; color: #6b7280;">Full Name</span>
            <div>${data.studentName}</div>
          </div>
          <div style="background: #f9fafb; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
            <span style="font-weight: 600; color: #6b7280;">Email</span>
            <div>${data.studentEmail}</div>
          </div>
          <div style="background: #f9fafb; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
            <span style="font-weight: 600; color: #6b7280;">Phone</span>
            <div>${data.studentPhone}</div>
          </div>
          <div style="background: #f9fafb; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
            <span style="font-weight: 600; color: #6b7280;">Reference</span>
            <div><strong>${data.reference}</strong></div>
          </div>
        </div>
      </div>

      <div style="background: #eff6ff; border: 2px solid #3b82f6; border-radius: 8px; padding: 20px;">
        <h4>✅ Required Actions</h4>
        <ul>
          <li><strong>1. Verify Application:</strong> Check completeness of data</li>
          <li><strong>2. Assign Consultant:</strong> Assign qualified consultant</li>
          <li><strong>3. Initial Contact:</strong> Contact within 24 hours</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>
  `,
})

export async function sendStudentConfirmationEmail(data: StudentEmailData) {
  try {
    console.log('Attempting to send student email to:', data.email)

    const transporter = createTransporter(data.country)
    const config = getEmailConfig(data.country)
    const template = studentEmailTemplate(data)

    const mailOptions = {
      from: config.from,
      to: data.email,
      subject: template.subject,
      html: template.html,
    }

    console.log('Sending email with options:', { from: mailOptions.from, to: mailOptions.to })

    const result = await transporter.sendMail(mailOptions)
    console.log('✓ Student email sent successfully to:', data.email)
    console.log('Message ID:', result.messageId)

    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error('❌ Error sending student email:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      details: error
    }
  }
}

export async function sendAdminNotificationEmail(data: AdminEmailData) {
  try {
    console.log('Attempting to send admin email')

    const transporter = createTransporter(data.country)
    const config = getEmailConfig(data.country)
    const template = adminEmailTemplate(data)
    const adminEmail = process.env.ADMIN_EMAIL || 'prodoria@prodoria.com'

    console.log('Admin email:', adminEmail)

    const mailOptions = {
      from: config.from,
      to: adminEmail,
      subject: template.subject,
      html: template.html,
    }

    const result = await transporter.sendMail(mailOptions)
    console.log('✓ Admin email sent successfully to:', adminEmail)
    console.log('Message ID:', result.messageId)

    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error('❌ Error sending admin email:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      details: error
    }
  }
}