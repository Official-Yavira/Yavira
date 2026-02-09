import '../styles/globals.css';
import type { Metadata } from 'next';
import { Orbitron } from 'next/font/google';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: 'Yavira | Pro Player The Finals',
  description: 'Sito ufficiale del pro player di The Finals. Community, coaching, tornei e shop.',
  keywords: ['The Finals', 'esports', 'pro player', 'coaching', 'community', 'tournaments']
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className={orbitron.className}>
        <div className="min-h-screen bg-grid bg-[size:32px_32px]">
          <SiteHeader />
          <main className="pt-24">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
