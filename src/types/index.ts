export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  linkedin?: string
  bio?: string
}

export interface NewsPost {
  id: string
  title: string
  date: string
  slug: string
  content: string
  excerpt: string
  image?: string
}

export interface Partner {
  name: string
  logo: string
  url?: string
}

export interface TechnologyFeature {
  title: string
  description: string
  image?: string
  icon?: string
}
