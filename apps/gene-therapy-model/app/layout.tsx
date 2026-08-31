import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gene Therapy Cost-Effectiveness Model | HEOR Case Study',
  description:
    'A confidentiality-safe portfolio case study on modernizing a gene therapy cost-effectiveness model for HTA and payer decision-making — survival, utility, and structured uncertainty analysis.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/projects/gene-therapy-model/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/projects/gene-therapy-model/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/projects/gene-therapy-model/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/projects/gene-therapy-model/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f6f8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light bg-background ${inter.variable} ${plexMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
