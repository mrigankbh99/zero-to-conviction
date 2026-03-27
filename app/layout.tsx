import type { Metadata } from 'next'
import { Newsreader, Inter } from 'next/font/google'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import './globals.css'

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Zero to Conviction — Mrigank',
    template: '%s — Zero to Conviction',
  },
  description: 'Observations, thesis, and learnings at the intersection of fintech, AI, and healthcare.',
  openGraph: {
    siteName: 'Zero to Conviction',
    type: 'website',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-surface text-on-surface font-body antialiased min-h-screen">
        <Nav />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
