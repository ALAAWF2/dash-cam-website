
import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Dash-Sham | Premium Dash Cam - Capture Every Detail, Every Drive',
  description: 'Premium 4K Ultra HD Dash Cam with 170° Wide Angle Lens, Night Vision, Motion Detection. Professional car dashboard camera for ultimate security and evidence.',
  keywords: 'dash cam, car camera, 4K dash cam, night vision, motion detection, car security, dashboard camera',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0d0d0d] text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
