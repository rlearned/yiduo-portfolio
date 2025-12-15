import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { SmoothScroll } from '@/components/providers/SmoothScroll'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yiduo Wang | Designer & Strategist',
  description: 'Portfolio of Yiduo Wang - designing at the intersection of business strategy and human experience. Finance & Marketing → Human-Centered Design.',
  keywords: ['UX Design', 'Product Design', 'HCI', 'Human-Centered Design', 'Portfolio', 'Yiduo Wang'],
  authors: [{ name: 'Yiduo Wang' }],
  openGraph: {
    title: 'Yiduo Wang | Designer & Strategist',
    description: 'Designing at the intersection of business strategy and human experience.',
    url: 'https://yiduowang.space',
    siteName: 'Yiduo Wang Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yiduo Wang | Designer & Strategist',
    description: 'Designing at the intersection of business strategy and human experience.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-cream-100 text-charcoal-900 antialiased overflow-x-hidden">
        <SmoothScroll>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
