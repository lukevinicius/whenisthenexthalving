import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'When is the next halving?',
  description: 'Find out when the next Bitcoin halving is scheduled to occur.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-PN2MJNS5" />
      <GoogleAnalytics gaId="G-PFVTVSCZQC" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
