'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiGithub, FiExternalLink, FiFilter, FiSearch } from 'react-icons/fi'
import { projects } from '../data/projects'
import { Project } from '../types'

export function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'featured' | 'complete' | 'wip'>('all')
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = projects.filter((project) => {
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      const matchesSearch = 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.longDescription.toLowerCase().includes(query) ||
        project.techStack.some(tech => tech.toLowerCase().includes(query))
      
      if (!matchesSearch) return false
    }

    // Status filter
    if (filter === 'featured' && !project.featured) return false
    if (filter === 'complete' && project.status !== 'Complete') return false
    if (filter === 'wip' && project.status !== 'WIP') return false
    
    // Tech stack filter
    if (selectedTech && !project.techStack.includes(selectedTech)) return false
    
    return true
  })

  const allTechStack = Array.from(
    new Set(projects.flatMap((project) => project.techStack))
  ).sort()

  return (
    <section id="projects" className="section-padding bg-background-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in systems engineering,
            AI, and cutting-edge technologies.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background-tertiary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-text-primary placeholder-text-tertiary"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            {['all', 'featured', 'complete', 'wip'].map((filterOption) => (
              <motion.button
                key={filterOption}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(filterOption as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filter === filterOption
                    ? 'bg-primary text-white'
                    : 'bg-background-tertiary text-text-secondary hover:text-text-primary'
                }`}
              >
                {filterOption === 'wip' ? 'Work in Progress' : filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
              </motion.button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <FiFilter className="text-text-tertiary mr-2" />
            {allTechStack.map((tech) => (
              <motion.button
                key={tech}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedTech === tech
                    ? 'bg-primary text-white'
                    : 'bg-background-tertiary text-text-tertiary hover:text-text-secondary'
                }`}
              >
                {tech}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-text-secondary">No projects match the current filters.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-background-tertiary rounded-xl overflow-hidden card-hover"
    >
      {project.imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-tertiary/80 to-transparent" />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              project.status === 'Complete'
                ? 'bg-green-500/20 text-green-400'
                : 'bg-yellow-500/20 text-yellow-400'
            }`}
          >
            {project.status}
          </span>
        </div>

        <p className="text-text-secondary mb-4 line-clamp-3">
          {isHovered ? project.longDescription : project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            <FiGithub size={16} />
            <span className="text-sm">Code</span>
          </motion.a>
          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              <FiExternalLink size={16} />
              <span className="text-sm">Live</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}