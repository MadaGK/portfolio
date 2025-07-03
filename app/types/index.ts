export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  projectUrl: string
  liveUrl?: string
  status: 'WIP' | 'Complete'
  featured: boolean
  imageUrl?: string
  tags?: string[]
  category?: string
  date?: string
}

export interface Skill {
  name: string
  level: number
  category: 'Languages' | 'Frameworks' | 'Tools' | 'Concepts'
  icon?: string
  color?: string
}

export interface TimelineItem {
  year: string
  title: string
  description: string
  company?: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  tags: string[]
  category: string
  readTime: number
  imageUrl?: string
  featured?: boolean
}

export interface SearchFilters {
  query: string
  category: string
  tags: string[]
  status: string
}

export interface SkeletonProps {
  className?: string
  count?: number
}