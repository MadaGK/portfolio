'use client'

import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiMail } from 'react-icons/fi'
import { ParticleBackground } from './ParticleBackground'

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="gradient-text">Mada Kasasi</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl sm:text-2xl text-text-secondary mb-8 leading-relaxed"
          >
            Systems Engineer passionate about{' '}
            <span className="text-primary font-semibold">C++</span>,{' '}
            <span className="text-primary font-semibold">Python</span>,{' '}
            <span className="text-primary font-semibold">Java</span>,{' '}
            <span className="text-primary font-semibold">AI</span>,{' '}
            <span className="text-primary font-semibold">Robotics</span>,{' '}
            <span className="text-primary font-semibold">Quantum Computing</span>, and{' '}
            <span className="text-primary font-semibold">Astrophysics</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="btn-primary"
            >
              View My Work
              <FiArrowDown className="ml-2" />
            </motion.button>

            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/madakasasi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-background-secondary hover:bg-background-tertiary transition-colors duration-200"
              >
                <FiGithub size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:mada@kasasi.dev"
                className="p-3 rounded-lg bg-background-secondary hover:bg-background-tertiary transition-colors duration-200"
              >
                <FiMail size={24} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-text-tertiary text-sm"
          >
            Building the future through code
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <FiArrowDown className="text-text-tertiary" size={24} />
      </motion.div>
    </section>
  )
}