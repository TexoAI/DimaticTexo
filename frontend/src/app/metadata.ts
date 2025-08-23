import { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ['Dimatic Texo', 'Dimatic', 'Texo', 'AI', 'Agent'],
  authors: [
    {
      name: 'Dimatic',
      url: 'https://dimatic.com.au',
    },
  ],
  creator: 'Dimatic',
  openGraph: {
    type: 'website',
    locale: 'en_AUS',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
   robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
