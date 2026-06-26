import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shared Horizon — Hausboot in Berlin für Events & Offsites',
  description: 'Über 170 m² Hausboot in Berlin Schmöckwitz. Für Business-Offsites, Workshops, Netzwerkabende, private Feiern und Fotoshootings. Ab 500 € pro Stunde.',
  metadataBase: new URL('https://shared-horizon.de'),
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: 'Shared Horizon — Hausboot in Berlin',
    description: 'Über 170 m² Hausboot für Events & Offsites. Yachthafen Schmöckwitz.',
    images: [{ url: '/images/hero-wide.jpg', width: 1200, height: 630, alt: 'Shared Horizon Hausboot' }],
    locale: 'de_DE',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
