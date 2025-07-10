
import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'داش شام | كاميرا داش احترافية لتوثيق كل لحظة',
  description: 'كاميرا داش بدقة 4K وعدسة واسعة 170° ورؤية ليلية وكشف حركة، لأقصى درجات الأمان والتوثيق.',
  keywords: 'كاميرا داش, تصوير 4K, رؤية ليلية, كشف حركة, أمان السيارة',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className="dark">
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
