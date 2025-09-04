import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Portfolio - Franck Poletti | Développeur Web & Étudiant EEMI Lyon',
  description: 'Portfolio professionnel de Franck Poletti, développeur web spécialisé en React, Next.js et TypeScript. Étudiant à l\'EEMI Lyon, passionné par le développement de solutions digitales modernes.',
  keywords: ['Franck Poletti', 'développeur web', 'Next.js', 'React', 'TypeScript', 'EEMI Lyon', 'portfolio'],
  authors: [{ name: 'Franck Poletti' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
    apple: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}