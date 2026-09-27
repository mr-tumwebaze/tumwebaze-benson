import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tumwebaze Benson | ICT Educator & Digital Technology Professional',
  description:
    'Professional portfolio of Tumwebaze Benson — ICT Educator, ICT Facilitator, Website Developer, Digital Systems Practitioner, Data Specialist and Creative Technology Professional.',
  keywords: [
    'ICT Educator',
    'Digital Technology',
    'Web Development',
    'Data Systems',
    'EMIS',
    'AMIS',
    'Graphic Design',
    'Audio Video Production',
  ],
  openGraph: {
    title: 'Tumwebaze Benson | ICT Educator & Digital Technology Professional',
    description: 'Professional portfolio showcasing education, technology, and digital solutions.',
    type: 'website',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#07090D" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
