import { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'tconnect-chatbot',
    title: 'TConnect Chatbot',
    description: 'AI-powered chatbot for seamless customer interactions and support automation.',
    longDescription: 'Advanced conversational AI system built with natural language processing capabilities. Features include multi-language support, context awareness, and integration with various messaging platforms.',
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'Redis', 'Docker'],
    projectUrl: 'https://tconnect.store',
    status: 'Complete',
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop'
  },
  {
    id: 'astrobeyond-edy',
    title: 'AstroBeyond Edy',
    description: 'Emotionally intelligent AI assistant for astrophysics research and simulation.',
    longDescription: "Edy is the first emotionally intelligent AI developed under AstroBeyond. Designed to assist researchers and visionaries, it can communicate naturally, simulate astrophysical phenomena, and support complex scientific reasoning. Edy blends real-time space simulation with an emotionally aware conversational interface—making it not just a tool, but a thinking companion for testing theories like Kasasi's Recursive Universe (KRU) and exploring deep space concepts.",
    techStack: ['Python', 'LLMs', 'C++ (Simulation Core)', 'OpenGL', 'Qt', 'NumPy'],
    projectUrl: 'https://astro-beyond-v1-kcqg.vercel.app',
    status: 'WIP',
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=400&fit=crop'
  },
  {
    id: 'madashell-cpp',
    title: 'MadaShell C++',
    description: 'Custom shell implementation with advanced scripting and automation features.',
    longDescription: 'High-performance shell built from scratch in C++ with modern features like syntax highlighting, auto-completion, and custom scripting language support.',
    techStack: ['C++', 'CMake', 'Boost', 'ncurses'],
    projectUrl: 'https://github.com/madakasasi/madashell-cpp',
    status: 'WIP',
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=400&fit=crop'
  },
  {
    id: 'edy-cli-ai',
    title: 'Edy CLI AI',
    description: 'Command-line AI assistant for developers with code generation capabilities.',
    longDescription: 'Intelligent CLI tool that assists developers with code generation, debugging, and project management. Features natural language processing and integration with popular development tools.',
    techStack: ['Python', 'OpenAI API', 'Click', 'Rich', 'SQLite'],
    projectUrl: 'https://github.com/madakasasi/edy-cli-ai',
    status: 'Complete',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop'
  },
  {
    id: 'multi-auth-api',
    title: 'Multi-Auth API',
    description: 'Scalable authentication service supporting multiple providers and protocols.',
    longDescription: 'Enterprise-grade authentication microservice with support for OAuth, SAML, JWT, and custom authentication methods. Built for high availability and scalability.',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    projectUrl: 'https://github.com/madakasasi/multi-auth-api',
    status: 'Complete',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop'
  }
]

export const featuredProjects = projects.filter(project => project.featured)