'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiCalendar, FiClock, FiTag, FiSearch } from 'react-icons/fi'
import { format } from 'date-fns'
import { blogPosts } from '../data/blog'
import { BlogPost } from '../types'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollProgress } from '../components/ScrollProgress'
import { ErrorBoundary } from '../components/ErrorBoundary'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedTag, setSelectedTag] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))]
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)))

  const filteredPosts = blogPosts.filter(post => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      const matchesSearch = 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      
      if (!matchesSearch) return false
    }

    if (selectedCategory !== 'all' && post.category !== selectedCategory) return false
    if (selectedTag !== 'all' && !post.tags.includes(selectedTag)) return false
    
    return true
  })

  return (
    <ErrorBoundary>
      <ScrollProgress />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <section className="section-padding bg-background-secondary">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                  Blog & <span className="gradient-text">Articles</span>
                </h1>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                  Insights, tutorials, and thoughts on technology, programming, and innovation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-2xl mx-auto mb-12"
              >
                <div className="relative">
                  <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-tertiary" size={20} />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-background-tertiary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-text-primary placeholder-text-tertiary text-lg"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-primary text-white'
                          : 'bg-background-tertiary text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </motion.button>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2">
                  <FiTag className="text-text-tertiary mr-2" />
                  {allTags.map((tag) => (
                    <motion.button
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedTag(selectedTag === tag ? 'all' : tag)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                        selectedTag === tag
                          ? 'bg-primary text-white'
                          : 'bg-background-tertiary text-text-tertiary hover:text-text-secondary'
                      }`}
                    >
                      {tag}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="section-padding">
            <div className="container">
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <BlogCard key={post.id} post={post} index={index} />
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-2xl font-semibold text-text-primary mb-2">
                    No articles found
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Try adjusting your search or filters to find what you&apos;re looking for.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setSelectedCategory('all')
                      setSelectedTag('all')
                    }}
                    className="btn-primary"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  )
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-background-tertiary rounded-xl overflow-hidden card-hover"
    >
      {post.imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-tertiary/80 to-transparent" />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-text-tertiary mb-3">
          <div className="flex items-center gap-1">
            <FiCalendar size={14} />
            <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiClock size={14} />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors duration-200 mb-3 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-text-secondary mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-text-tertiary">By {post.author}</span>
          <span className="text-sm text-text-tertiary bg-background-secondary px-2 py-1 rounded">
            {post.category}
          </span>
        </div>
      </div>
    </motion.div>
  )
} 