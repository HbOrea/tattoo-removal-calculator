import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    'GPTBot',
    'ChatGPT-User',
    'Claude-Web',
    'Anthropic-AI',
    'anthropic-ai',
    'PerplexityBot',
    'GoogleOther',
    'Google-Extended',
    'DuckAssistBot',
    'CCBot',
    'Applebot-Extended',
    'Meta-ExternalAgent',
    'Bytespider',
    'YouBot',
  ]

  const aiAllows = ['/llms.txt', '/', '/privacy/', '/terms/']
  const aiDisallows = ['/user-content/']

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      ...aiBots.map((bot) => ({ userAgent: bot, allow: aiAllows, disallow: aiDisallows })),
    ],
    sitemap: 'https://tattoo-removal-calculator.com/sitemap.xml',
  }
} 