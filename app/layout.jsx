
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider';
import NavigationBar from '@/components/navigation-bar';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Zakusei.dev',
  description: 'Next.js 13 Portfolio Website made by Zakusei',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background dark:bg-black antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavigationBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
