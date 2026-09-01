import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RequestAssayModal from '@/components/RequestAssayModal'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Huanqiu Precious Metal | Trading Company Limited - Kampala, Uganda',
  description: "Uganda's Most Trusted Gold Laboratory. Trading Company Limited and precious metals analysis trusted by miners, traders, and exporters across East Africa.",
  keywords: 'gold mining, gold assay, precious metals, gold testing, Kampala, Uganda, gold laboratory, certified gold services',
  authors: [{ name: 'Huanqiu Precious Metal' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Huanqiu Precious Metal | Trading Company Limited',
    description: "Uganda's Most Trusted Precious Metal Trading Company. Trading Company Limited and precious metals analysis.",
    url: 'https://huanqiupreciousmetal.com',
    siteName: 'Huanqiu Precious Metal',
    images: [
      {
        url: '/gold1.jpg',
        width: 1200,
        height: 630,
        alt: 'Huanqiu Precious Metal - Gold Assay Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Huanqiu Precious Metal | Trading Company Limited',
    description: "Uganda's Most Trusted Gold Trading Company",
    images: ['/gold1.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#f8b400',
      },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#f8b400',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Huanqiu Precious Metal',
  },
  formatDetection: {
    telephone: true,
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags can be added here if needed */}
        <meta name="msapplication-TileColor" content="#f8b400" />
        {/* <meta name="msapplication-config" content="/browserconfig.xml" /> */}
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <RequestAssayModal />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}