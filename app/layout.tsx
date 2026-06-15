import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { NavigationWrapper } from '@/components/navigation-wrapper'
import './globals.css'

export const metadata: Metadata = {
  title: 'Casant - Premium Events & Services',
  description: 'Professional event planning and corporate solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <NavigationWrapper>
            {children}
          </NavigationWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
