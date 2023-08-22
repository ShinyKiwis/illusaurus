import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'illusaurus',
  description: 'A website for differrent algorithms and data structures illustrations',
  icons: [
    {
      rel: 'icon',
      sizes: '32x32',
      url :'/icon.ico'
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} select-none`}>
        <Navbar />
        <main className="px-4 md:px-52">
          {children}
        </main>
      </body>
    </html>
  )
}
