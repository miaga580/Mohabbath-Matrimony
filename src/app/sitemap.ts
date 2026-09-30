import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mohabbathmatrimony.com';

  const routes = [
    '',
    '/how-it-works',
    '/features',
    '/privacy-and-safety',
    '/premium',
    '/for-families',
    '/faq',
    '/about-us',
    '/contact',
    '/data-deletion',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add legal pages
  const legalDir = path.join(process.cwd(), 'content', 'legal');
  let legalRoutes: MetadataRoute.Sitemap = [];
  
  if (fs.existsSync(legalDir)) {
    const files = fs.readdirSync(legalDir);
    legalRoutes = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => ({
        url: `${baseUrl}/${file.replace(/\.md$/, '')}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      }));
  }

  return [...routes, ...legalRoutes];
}
