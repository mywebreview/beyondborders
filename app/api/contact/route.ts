import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, phone, subject, message, destination } = body

        // Determine the from email based on destination preference
        let fromEmail = 'onboarding@resend.dev' // Default fallback
        if (destination === 'uk') {
            fromEmail = process.env.RESEND_FROM_UK || 'uk.admission@prodoria.com'
        } else if (destination === 'canada') {
            fromEmail = process.env.RESEND_FROM_CA || 'canada.admission@prodoria.com'
        } else {
            fromEmail = 'prodoria@prodoria.com'
        }

        // Send email to admin
        const { data, error } = await resend.emails.send({
            from: `Beyond Borders Contact <${fromEmail}>`,
            to: [process.env.ADMIN_EMAIL || 'prodoria@prodoria.com'],
            subject: `New Contact Form: ${subject}`,
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #170e4d, #1e1b8b); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #170e4d; }
              .value { color: #666; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
                <p>Beyond Borders Study Abroad</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${phone}</div>
                </div>
                <div class="field">
                  <div class="label">Preferred Destination:</div>
                  <div class="value">${getDestinationText(destination)}</div>
                </div>
                <div class="field">
                  <div class="label">Subject:</div>
                  <div class="value">${subject}</div>
                </div>
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value" style="white-space: pre-wrap;">${message}</div>
                </div>
                <div class="footer">
                  <p>This message was sent from the Beyond Borders contact form.</p>
                  <p>Received at: ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
        })

        if (error) {
            console.error('Resend error:', error)
            return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
        }

        return NextResponse.json({ success: true, data })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

function getDestinationText(destination: string): string {
    switch (destination) {
        case 'uk':
            return 'United Kingdom'
        case 'canada':
            return 'Canada'
        case 'both':
            return 'Both UK & Canada'
        case 'unsure':
            return 'Not sure yet'
        default:
            return 'Not specified'
    }
}