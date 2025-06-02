import type { Metadata } from 'next'
import './globals.css'
import { Wrapper } from './components/Wrapper'
import { ReactQueryClientProvider } from './Utils/ReactQueryClientProvider/ReactQueryClientProvider'
import { AuthProvider } from './Utils/AuthContext'

export const metadata: Metadata = {
  title: 'Global Property',
  description: 'Luxury real estate & investment',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body>
        <ReactQueryClientProvider>
          <AuthProvider>
            <Wrapper>{children}</Wrapper>
          </AuthProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  )
}
