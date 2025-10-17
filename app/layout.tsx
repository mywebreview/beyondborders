import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
        
        <main className="min-h-screen">
          {children}
        </main>
        
      </body>
    </html>
  )
}
