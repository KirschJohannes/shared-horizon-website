import { MetadataRoute } from 'next';

// Diese Daten nur aktualisieren, wenn sich der sichtbare Inhalt geändert hat.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://shared-horizon.de';
  return [
    {
      url: base,
      lastModified: new Date('2026-10-17'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/hausboot-the-voice`,
      lastModified: new Date('2026-10-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
