import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Lora, Inter } from 'next/font/google'
import './globals.css'

const loraFont = Lora({ variable: '--font-serif', subsets: ['latin'] })
const interFont = Inter({ variable: '--font-sans', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Faber Repair & Service | Professional Appliance Service in Bangalore',
  description: 'Expert Faber appliance repair and service in Bangalore. Professional technicians, quick response, area-wise coverage. Book your service online today.',
  keywords: 'Faber repair, appliance service, Bangalore, chimney repair, kitchen appliances',
  generator: 'v0.app',
  openGraph: {
    title: 'Faber Repair & Service | Bangalore',
    description: 'Professional appliance repair and service across Bangalore areas',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2E3B52' },
    { media: '(prefers-color-scheme: dark)', color: '#B8A85F' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${loraFont.variable} ${interFont.variable}`}>
      <body className="font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
