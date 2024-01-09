import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RealChat',
  description: 'Realtime chat app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={montserrat.className}>
        <Toaster richColors position="top-right" />
        {children}
      </body>
    </html>
  );
}
