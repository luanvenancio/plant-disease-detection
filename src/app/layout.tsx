import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Plant Disease Detection',
  description: 'Plant Disease Detection',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="dark"> {children} </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
