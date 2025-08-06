import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tattoo-removal-calculator.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // {
      // url: 'https://yourdomain.com/#calculator',
      // lastModified: new Date(),
      // changeFrequency: 'monthly',
      // priority: 0.9,
    // },
    // {
      // url: 'https://yourdomain.com/#pricing-guide',
      // lastModified: new Date(),
      // changeFrequency: 'monthly',
      // priority: 0.8,
    // },
    // {
      // url: 'https://yourdomain.com/#faq',
      // lastModified: new Date(),
      // changeFrequency: 'monthly',
      // priority: 0.7,
    // },
    // {
      // url: 'https://yourdomain.com/#process',
      // lastModified: new Date(),
      // changeFrequency: 'monthly',
      // priority: 0.6,
    // },
  ]
} 