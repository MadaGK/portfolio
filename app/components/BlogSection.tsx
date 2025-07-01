'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiCalendar, FiClock, FiTag, FiArrowRight } from 'react-icons/fi'
import { format } from 'date-fns'
import Link from 'next/link'
import { blogPosts, featuredPosts } from '../data/blog'
import { BlogPost } from '../types'

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedTag, setSelectedTag] = useState<string>('all')

  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))]
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)))

  const filteredPosts = blogPosts.filter(post => {
    if (selectedCategory !== 'all' && post.category !== selectedCategory) return false
    if (selectedTag !== 'all' && !post.tags.includes(selectedTag)) return false
    return true
  })

  return (
    <section id="blog" className="section-padding bg-background-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on technology, programming, and innovation.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
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

        {/* Featured Posts */}
        {selectedCategory === 'all' && selectedTag === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Featured Articles</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <FeaturedBlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {/* All Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-text-secondary">No articles match the current filters.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
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
          <Link href={`/blog/${post.id}`}>
            <motion.div
              whileHover={{ x: 5 }}
              className="text-primary group-hover:text-primary-dark transition-colors duration-200 cursor-pointer"
            >
              <FiArrowRight size={16} />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

function FeaturedBlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-background-tertiary rounded-xl overflow-hidden card-hover"
    >
      {post.imageUrl && (
        <div className="relative h-64 overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-tertiary/80 to-transparent" />
        </div>
      )}

      <div className="p-8">
        <div className="flex items-center gap-4 text-sm text-text-tertiary mb-4">
          <div className="flex items-center gap-1">
            <FiCalendar size={14} />
            <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiClock size={14} />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-text-primary group-hover:text-primary transition-colors duration-200 mb-4 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-text-secondary mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-text-tertiary">By {post.author}</span>
          <Link href={`/blog/${post.id}`}>
            <motion.div
              whileHover={{ x: 5 }}
              className="text-primary group-hover:text-primary-dark transition-colors duration-200 cursor-pointer"
            >
              <FiArrowRight size={18} />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  )
} 