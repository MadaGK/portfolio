'use client'

import { motion } from 'framer-motion'
import { FiHeart, FiGithub, FiMail, FiTwitter, FiInstagram } from 'react-icons/fi'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/madakasasi', icon: FiGithub },
    { name: 'Email', url: 'mailto:mada@kasasi.dev', icon: FiMail },
    { name: 'Twitter', url: 'https://twitter.com/madakasasi', icon: FiTwitter },
    { name: 'Instagram', url: 'https://instagram.com/madakasasi', icon: FiInstagram },
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="container py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-text-tertiary hover:text-primary transition-colors duration-200"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-text-tertiary text-sm flex items-center justify-center gap-2">
              © {currentYear} Mada Kasasi. Built with
              <FiHeart className="text-red-500" size={14} />
              using Next.js & Tailwind CSS
            </p>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-text-tertiary hover:text-primary transition-colors duration-200 text-sm"
          >
            Back to Top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  )
}