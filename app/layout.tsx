import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'reyad Mohamed',
  description: 'Created by reyad mohamed',
  generator: 'reyad',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
