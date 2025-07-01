'use client'

import { motion } from 'framer-motion'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { AboutSection } from './components/AboutSection'
import { BlogSection } from './components/BlogSection'
import { ContactSection } from './components/ContactSection'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ScrollProgress } from './components/ScrollProgress'

export default function Home() {
  return (
    <ErrorBoundary>
      <ScrollProgress />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        <Header />
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </motion.main>
    </ErrorBoundary>
  )
}