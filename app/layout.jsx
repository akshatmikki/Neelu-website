import { Fredoka, Gaegu } from 'next/font/google';
import './globals.css';

const fredoka = Fredoka({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-fredoka' });
const gaegu = Gaegu({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-gaegu' });

export const metadata = {
  title: 'Neelu, ab khushiyon ke din shuru 🌈',
  description: 'Neelu ke liye dher saara pyaar aur duaayein 💕',
  icons: { icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌈</text></svg>" },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#C6E7FF',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${gaegu.variable}`}>
      <body>{children}</body>
    </html>
  );
}
