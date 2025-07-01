export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  status: 'WIP' | 'Complete'
  featured: boolean
  imageUrl?: string
}

export interface Skill {
  name: string
  level: number
  category: 'Languages' | 'Frameworks' | 'Tools' | 'Concepts'
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