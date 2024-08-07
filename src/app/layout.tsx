import type { Metadata } from 'next';
import './globals.css';
import { Wrapper } from './components/Wrapper';

export const metadata: Metadata = {
  title: 'Global Property',
  description: 'Luxury real estate & investment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
