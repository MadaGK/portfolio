import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://kasasi.dev'),
  title: 'Mada Kasasi - Systems Engineer & AI Specialist',
  description: 'Systems Engineer passionate about C++, Python, Java, AI, Robotics, Quantum Computing, and Astrophysics. Building the future through code.',
  keywords: ['Systems Engineer', 'C++', 'Python', 'Java', 'AI', 'Robotics', 'Quantum Computing', 'Astrophysics', 'Software Development'],
  authors: [{ name: 'Mada Kasasi' }],
  creator: 'Mada Kasasi',
  publisher: 'Mada Kasasi',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kasasi.dev',
    title: 'Mada Kasasi - Systems Engineer & AI Specialist',
    description: 'Systems Engineer passionate about C++, Python, Java, AI, Robotics, Quantum Computing, and Astrophysics.',
    siteName: 'Mada Kasasi Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mada Kasasi - Systems Engineer & AI Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mada Kasasi - Systems Engineer & AI Specialist',
    description: 'Systems Engineer passionate about C++, Python, Java, AI, Robotics, Quantum Computing, and Astrophysics.',
    images: ['/og-image.jpg'],
    creator: '@madakasasi',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0070F3" />
        <meta name="msapplication-TileColor" content="#0070F3" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}