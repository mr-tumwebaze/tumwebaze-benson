import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tumwebaze Benson | ICT Educator & Digital Technology Professional',
  description: 'Professional portfolio of Tumwebaze Benson — ICT Educator, digital technology professional and creative systems practitioner.',
  openGraph: { title: 'Tumwebaze Benson | ICT Educator', description: 'Education, technology, data and creativity.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
