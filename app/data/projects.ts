import { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'tconnect-chatbot',
    title: 'TConnect Chatbot',
    description: 'AI-powered chatbot for seamless customer interactions and support automation.',
    longDescription: 'Advanced conversational AI system built with natural language processing capabilities. Features include multi-language support, context awareness, and integration with various messaging platforms.',
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/madakasasi/tconnect-chatbot',
    status: 'Complete',
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop'
  },
  {
    id: 'astrobeyond-edy',
    title: 'AstroBeyond Edy',
    description: 'Astrophysics simulation and visualization platform for celestial body analysis.',
    longDescription: 'Comprehensive astrophysics toolkit for simulating celestial mechanics, orbital dynamics, and stellar evolution. Includes real-time visualization and data analysis capabilities.',
    techStack: ['C++', 'OpenGL', 'Python', 'NumPy', 'Qt'],
    githubUrl: 'https://github.com/madakasasi/astrobeyond-edy',
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
    githubUrl: 'https://github.com/madakasasi/madashell-cpp',
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
    githubUrl: 'https://github.com/madakasasi/edy-cli-ai',
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
    githubUrl: 'https://github.com/madakasasi/multi-auth-api',
    status: 'Complete',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop'
  }
]

export const featuredProjects = projects.filter(project => project.featured)