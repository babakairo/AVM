import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AVM Packaging and Crating LLC | Custom Wooden Crates Metro-Atlanta',
  description: 'Professional custom crating and packaging services in Metro-Atlanta. On-site solutions, heat-treated crates, container loading, and vacuum packaging for safe shipping.',
  keywords: 'custom crating, wooden crates, packaging services, Metro-Atlanta, Locust Grove GA, heat-treated crates, container loading, on-site packaging',
  openGraph: {
    title: 'AVM Packaging and Crating LLC',
    description: 'Professional custom crating and packaging services in Metro-Atlanta',
    url: 'https://www.avmpackaging.com',
    siteName: 'AVM Packaging and Crating LLC',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
