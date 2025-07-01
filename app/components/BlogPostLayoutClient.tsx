'use client'
import { motion } from 'framer-motion'
import { FiCalendar, FiClock } from 'react-icons/fi'
import { format } from 'date-fns'
import { BlogPostClient } from './BlogPostClient'
import { BlogContent } from './BlogContent'
import type { BlogPost } from '../types'

export function BlogPostLayoutClient({ post }: { post: BlogPost }) {
  return (
    <main className="pt-20">
      <section className="section-padding bg-background-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <BlogPostClient postTitle={post.title} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 text-sm text-text-tertiary mb-4">
                <div className="flex items-center gap-1">
                  <FiCalendar size={14} />
                  <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiClock size={14} />
                  <span>{post.readTime} min read</span>
                </div>
                <div className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                  {post.category}
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                {post.title}
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-background-tertiary text-text-secondary rounded-md text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <BlogContent content={post.content} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 p-8 bg-background-secondary rounded-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MK</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {post.author}
                  </h3>
                  <p className="text-text-secondary">
                    Systems Engineer passionate about C++, Python, Java, AI, Robotics, Quantum Computing, and Astrophysics.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 