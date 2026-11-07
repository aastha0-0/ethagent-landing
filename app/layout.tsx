import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ÆTHER — The AI Agent Layer for Ethereum',
  description: 'Autonomous AI agents that trade, manage, and protect your Ethereum assets 24/7. No keys shared. Non-custodial. Always on.',
  keywords: ['ethereum', 'AI agent', 'DeFi', 'wallet automation', 'crypto AI', 'ETH'],
  openGraph: {
    title: 'ÆTHER — The AI Agent Layer for Ethereum',
    description: 'Autonomous AI agents operating your Ethereum wallet.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for Google Fonts (DM Sans fallback) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
