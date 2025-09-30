import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'HemostOD - Engineering Platelets to Save Lives',
  description: 'HemostOD develops next-generation diagnostics using single-cell analysis and manufactures universal platelets for medical applications.',
  keywords: 'platelets, biotech, medical technology, diagnostics, HemostOD',
  authors: [{ name: 'HemostOD' }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'HemostOD - Engineering Platelets to Save Lives',
    description: 'Developing universal platelets and next-generation diagnostics',
    url: 'https://hemostod.com',
    siteName: 'HemostOD',
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
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
