import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import { Analytics } from './components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mada Kasasi - Systems Engineer & Developer',
  description: 'Passionate systems engineer specializing in C++, Python, Java, AI, Robotics, Quantum Computing, and Astrophysics. Building the future through code.',
  keywords: ['Mada Kasasi', 'Systems Engineer', 'Developer', 'C++', 'Python', 'Java', 'AI', 'Robotics', 'Quantum Computing', 'Astrophysics'],
  authors: [{ name: 'Mada Kasasi' }],
  creator: 'Mada Kasasi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://madakasasi.dev',
    title: 'Mada Kasasi - Systems Engineer & Developer',
    description: 'Passionate systems engineer specializing in C++, Python, Java, AI, Robotics, Quantum Computing, and Astrophysics.',
    siteName: 'Mada Kasasi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mada Kasasi - Systems Engineer & Developer',
    description: 'Passionate systems engineer specializing in C++, Python, Java, AI, Robotics, Quantum Computing, and Astrophysics.',
    creator: '@madakasasi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}