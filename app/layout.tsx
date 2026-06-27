import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eventlocation am Wasser Berlin | Shared Horizon',
  description: 'Außergewöhnliche Eventlocation am Wasser, Berlin-Schmöckwitz. 170 m² Hausboot für Firmenevents & private Feiern. Ab 500 €/Std. — jetzt anfragen.',
  metadataBase: new URL('https://shared-horizon.de'),
  alternates: { canonical: 'https://shared-horizon.de' },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'oZryc-Hn6ZAMHCrzdswSb09KdQ0H4K9QEZfLWmR9tWo',
  },
  openGraph: {
    title: 'Eventlocation am Wasser Berlin | Shared Horizon',
    description: 'Außergewöhnliche Eventlocation am Wasser in Berlin-Schmöckwitz. 170 m² Hausboot für Firmenevents, Sommerfeste & private Feiern.',
    url: 'https://shared-horizon.de',
    siteName: 'Shared Horizon',
    images: [{
      url: '/images/og-image-foto.png',
      width: 1200,
      height: 630,
      alt: 'Shared Horizon — Eventlocation am Wasser in Berlin-Schmöckwitz',
    }],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eventlocation am Wasser Berlin | Shared Horizon',
    description: 'Außergewöhnliche Eventlocation am Wasser, Berlin-Schmöckwitz. 170 m² Hausboot für Firmenevents & private Feiern.',
    images: ['/images/og-image-foto.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
