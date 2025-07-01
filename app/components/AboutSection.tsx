'use client'

import { motion } from 'framer-motion'
import { FiDownload, FiUser, FiCode, FiTrendingUp } from 'react-icons/fi'
import { skills } from '../data/skills'
import { timeline } from '../data/timeline'

export function AboutSection() {
  const skillCategories = ['Languages', 'Frameworks', 'Tools', 'Concepts'] as const

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            My journey from full-stack development to systems engineering,
            driven by passion for performance and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Professional Journey */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FiUser className="text-primary" size={24} />
              <h3 className="text-2xl font-semibold">Professional Journey</h3>
            </div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-primary/20"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                  <div className="text-primary font-semibold text-sm mb-1">{item.year}</div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">
                    {item.title}
                    {item.company && (
                      <span className="text-text-secondary text-base font-normal ml-2">
                        @ {item.company}
                      </span>
                    )}
                  </h4>
                  <p className="text-text-secondary">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FiCode className="text-primary" size={24} />
              <h3 className="text-2xl font-semibold">Technical Skills</h3>
            </div>

            <div className="space-y-8">
              {skillCategories.map((category) => (
                <div key={category}>
                  <h4 className="text-lg font-semibold text-text-primary mb-4">{category}</h4>
                  <div className="space-y-3">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center justify-between"
                        >
                          <span className="text-text-secondary font-medium">{skill.name}</span>
                          <div className="flex items-center gap-3">
                            <div className="w-24 h-2 bg-background-tertiary rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
                              />
                            </div>
                            <span className="text-text-tertiary text-sm w-8">{skill.level}%</span>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            <FiDownload className="mr-2" />
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}