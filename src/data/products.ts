export type Category =
  | 'Software'
  | 'Hosting'
  | 'Domains'
  | 'Bots'
  | 'Web Development'

export type Product = {
  id: string
  title: string
  category: Category
  short: string
  description: string
  price: string
  tags: string[]
  rating: number
  image: string
}

export const products: Product[] = [
  {
    id: 'corex-pro-1',
    title: 'COREX Pro Suite',
    category: 'Software',
    short: 'All-in-one productivity and deployment toolkit.',
    description:
      'COREX Pro Suite brings CI automation, monitoring, and deployment helpers with a clean plugin system. Designed for teams that ship fast.',
    price: '$79',
    tags: ['productivity', 'ci', 'devops'],
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6a1f7e2b3f2ad9e2c1d8f4d99b1d9f0b'
  },
  {
    id: 'fast-host-2',
    title: 'FastHost Pro',
    category: 'Hosting',
    short: 'Managed cloud hosting with global CDN and staging.',
    description:
      'FastHost Pro includes one-click staging, nightly backups, and a global CDN with edge caching. Optimized for modern web apps.',
    price: '$29/mo',
    tags: ['cdn', 'managed', 'ssl'],
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=ee9c2b2d2b9a4cc3c8b2d9a9f3f3e0d6'
  },
  {
    id: 'domain-now-3',
    title: 'DomainNow - .tech',
    category: 'Domains',
    short: 'Premium .tech domains with instant DNS.',
    description:
      'Secure your brand with a .tech domain. Comes with DNS management, privacy protection, and email forwarding.',
    price: '$12',
    tags: ['domain', 'branding'],
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1526378725015-5d87f9d9f3b4?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=abc1b9b1d5c3f1a2e5d7c9d3e4b2a1c5'
  },
  {
    id: 'chatbot-ux-4',
    title: 'ChatBot-UX',
    category: 'Bots',
    short: 'Customizable conversational bot with analytics.',
    description:
      'ChatBot-UX provides a modern conversational UI, user intent tracking, and analytics. Integrate in minutes with SDKs.',
    price: '$49',
    tags: ['chat', 'ai', 'analytics'],
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f3db9d3a6b1b2c3d4e5f6a7b8c9d0e1'
  },
  {
    id: 'studio-web-5',
    title: 'Studio Web Dev Pack',
    category: 'Web Development',
    short: 'Design-to-deploy web development pack.',
    description:
      'Studio includes starter templates, components, and deployment pipelines to get professional sites online fast.',
    price: '$99',
    tags: ['templates', 'components'],
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d'
  }
]
