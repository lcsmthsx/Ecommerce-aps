import './globals.css';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${poppins.variable} font-primary bg-modern bg-cover`}
    >
      <head />
      <body>{children}</body>
    </html>
  );
}
