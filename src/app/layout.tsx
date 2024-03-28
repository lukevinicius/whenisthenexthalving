import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ScriptApp } from './scripts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'When is the next bitcoin halving?',
  description: 'Find out when the next Bitcoin halving is scheduled to occur.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ScriptApp />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
