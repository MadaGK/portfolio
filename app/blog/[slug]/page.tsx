import { motion } from 'framer-motion'
import { notFound } from 'next/navigation'
import { FiCalendar, FiClock, FiTag, FiArrowLeft, FiShare2, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { format } from 'date-fns'
import { blogPosts } from '../../data/blog'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ErrorBoundary } from '../../components/ErrorBoundary'
import { BlogContent } from '../../components/BlogContent'

type BlogPostPageProps = {
  params: { slug: string }
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id === params.slug)

  if (!post) {
    notFound()
  }

  const handleShare = (platform: 'twitter' | 'linkedin') => {
    const shareUrl = window.location.href
    const shareText = `${post.title} - Read more on Mada Kasasi's blog`
    
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    }
    window.open(urls[platform], '_blank', 'width=600,height=400')
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <section className="section-padding bg-background-secondary">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  onClick={() => window.history.back()}
                  className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors duration-200 mb-8"
                >
                  <FiArrowLeft size={16} />
                  Back to Blog
                </motion.button>

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

                  {/* Share Buttons */}
                  <div className="flex items-center gap-4">
                    <span className="text-text-tertiary text-sm">Share:</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleShare('twitter')}
                      className="p-2 rounded-lg bg-background-tertiary hover:bg-background-secondary transition-colors duration-200"
                    >
                      <FiTwitter size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleShare('linkedin')}
                      className="p-2 rounded-lg bg-background-tertiary hover:bg-background-secondary transition-colors duration-200"
                    >
                      <FiLinkedin size={16} />
                    </motion.button>
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

        <Footer />
      </div>
    </ErrorBoundary>
  )
} 