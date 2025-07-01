'use client'

import { motion } from 'framer-motion'
import { FiArrowLeft, FiShare2, FiTwitter, FiLinkedin } from 'react-icons/fi'

interface BlogPostClientProps {
  postTitle: string
}

export function BlogPostClient({ postTitle }: BlogPostClientProps) {
  const handleShare = (platform: 'twitter' | 'linkedin') => {
    const shareUrl = window.location.href
    const shareText = `${postTitle} - Read more on Mada Kasasi's blog`
    
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    }
    window.open(urls[platform], '_blank', 'width=600,height=400')
  }

  const handleBack = () => {
    window.history.back()
  }

  return (
    <>
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        onClick={handleBack}
        className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors duration-200 mb-8"
      >
        <FiArrowLeft size={16} />
        Back to Blog
      </motion.button>

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
    </>
  )
} 