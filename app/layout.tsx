import type { Metadata } from 'next'
import { Nunito, Inter } from 'next/font/google'
import './globals.css'

// Configure Nunito as primary font
const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
})

// Keep Inter as fallback or choose another
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // This makes it available as CSS variable
})

export const metadata: Metadata = {
  title: 'Study Abroad Consultancy - UK & Canada Programs',
  description: 'Your trusted partner for studying abroad in the UK and Canada. Professional consultancy services for international students.',
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