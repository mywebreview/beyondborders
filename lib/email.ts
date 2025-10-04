import nodemailer from 'nodemailer'

interface EmailConfig {
  host: string
  port: number
  user: string
  pass: string
}

export const getEmailConfig = (country: 'UK' | 'Canada'): EmailConfig => {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com'
  const port = parseInt(process.env.SMTP_PORT || '587')
  
  if (country === 'UK') {
    return {
      host,
      port,
      user: process.env.SMTP_USER_UK || '',
      pass: process.env.SMTP_PASS_UK || '',
    }
  } else {
    return {
      host,
      port,
      user: process.env.SMTP_USER_CA || '',
      pass: process.env.SMTP_PASS_CA || '',
    }
  }
}

export const createTransporter = (config: EmailConfig) => {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: false,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  })
}

interface StudentEmailData {
  email: string
  name: string
  reference: string
  country: string
  program: string
}

export const sendStudentConfirmation = async (
  data: StudentEmailData,
  country: 'UK' | 'Canada'
) => {
  const config = getEmailConfig(country)
  const transporter = createTransporter(config)
  
  const mailOptions = {
    from: config.user,
    to: data.email,
    subject: `Enrollment Confirmation - ${data.reference}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .info-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #3b82f6; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
            .button { display: inline-block; background: #3b82f6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎓 Enrollment Confirmed!</h1>
            </div>
            <div class="content">
              <p>Dear ${data.name},</p>
              
              <p>Thank you for choosing StudyAbroad Consultancy for your ${data.country} study program. We're excited to help you achieve your academic dreams!</p>
              
              <div class="info-box">
                <h3 style="margin-top: 0;">Your Enrollment Details</h3>
                <p><strong>Reference Number:</strong> ${data.reference}</p>
                <p><strong>Country:</strong> ${data.country}</p>
                <p><strong>Program:</strong> ${data.program}</p>
                <p><strong>Status:</strong> Payment Confirmed ✓</p>
              </div>
              
              <h3>Next Steps:</h3>
              <ol>
                <li>Our admissions team will review your application within 2-3 business days</li>
                <li>You will receive a detailed program guide and timeline via email</li>
                <li>A dedicated counselor will be assigned to your case</li>
                <li>We'll guide you through the university application process</li>
              </ol>
              
              <p>Your dedicated counselor will contact you within 24 hours to discuss your application and answer any questions you may have.</p>
              
              <p style="margin-top: 30px;">If you have any immediate questions, please don't hesitate to contact us.</p>
              
              <p>Best regards,<br>
              <strong>StudyAbroad Consultancy Team</strong><br>
              ${config.user}</p>
            </div>
            <div class="footer">
              <p>This is an automated confirmation email. Please keep this for your records.</p>
              <p>Reference: ${data.reference}</p>
            </div>
          </div>
        </body>
      </html>
    `,
  }
  
  await transporter.sendMail(mailOptions)
}

interface AdminEmailData {
  studentName: string
  studentEmail: string
  studentPhone: string
  country: string
  program: string
  reference: string
  documentUrl?: string
}

export const sendAdminNotification = async (data: AdminEmailData, country: 'UK' | 'Canada') => {
  const config = getEmailConfig(country)
  const transporter = createTransporter(config)
  const adminEmail = process.env.ADMIN_EMAIL || ''
  
  const mailOptions = {
    from: config.user,
    to: adminEmail,
    subject: `New Enrollment - ${data.country} - ${data.reference}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1f2937; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .info-row { display: flex; margin: 10px 0; }
            .info-label { font-weight: bold; min-width: 150px; }
            .info-value { color: #4b5563; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Enrollment Received</h2>
            </div>
            <div class="content">
              <h3>Student Information</h3>
              <div class="info-row">
                <div class="info-label">Reference:</div>
                <div class="info-value">${data.reference}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Name:</div>
                <div class="info-value">${data.studentName}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Email:</div>
                <div class="info-value">${data.studentEmail}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Phone:</div>
                <div class="info-value">${data.studentPhone}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Country:</div>
                <div class="info-value">${data.country}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Program:</div>
                <div class="info-value">${data.program}</div>
              </div>
              ${data.documentUrl ? `
              <div class="info-row">
                <div class="info-label">Document:</div>
                <div class="info-value"><a href="${data.documentUrl}">View Document</a></div>
              </div>
              ` : ''}
              <p style="margin-top: 30px; padding: 15px; background: #fef3c7; border-radius: 6px;">
                <strong>Action Required:</strong> Please review this enrollment and assign a counselor within 24 hours.
              </p>
            </div>
          </div>
        </body>
      </html>
    `,
  }
  
  await transporter.sendMail(mailOptions)
}
