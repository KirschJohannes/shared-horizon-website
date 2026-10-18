import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vertrag | Shared Horizon',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function VertragLayout({ children }: { children: React.ReactNode }) {
  return children;
}
