import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://shared-horizon.de';
  const now = new Date();
  const legalDate = new Date('2026-06-21');
  return [
    { url: base,                    lastModified: now,       changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/impressum`,     lastModified: legalDate, changeFrequency: 'yearly',  priority: 0.1 },
    { url: `${base}/datenschutz`,   lastModified: legalDate, changeFrequency: 'yearly',  priority: 0.1 },
  ];
}
