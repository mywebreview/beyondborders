import type { Metadata } from 'next'
import { Nunito, Inter } from 'next/font/google'
import './globals.css'

// Configure Nunito as primary font
const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
})

// Keep Inter as fallback
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Study Abroad Consultancy - UK & Canada Programs',
  description: 'Your trusted partner for studying abroad in the UK and Canada. Professional consultancy services for international students.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nunito.className} ${inter.variable}`}>
      <body>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}