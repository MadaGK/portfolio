'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMail, FiGithub, FiTwitter, FiInstagram, FiSend, FiCheck } from 'react-icons/fi'
import { ContactForm } from '../types'

export function ContactSection() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/madakasasi',
      icon: FiGithub,
      color: 'hover:text-gray-400',
    },
    {
      name: 'Email',
      url: 'mailto:mada@kasasi.dev',
      icon: FiMail,
      color: 'hover:text-blue-400',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/madakasasi',
      icon: FiTwitter,
      color: 'hover:text-blue-400',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/madakasasi',
      icon: FiInstagram,
      color: 'hover:text-pink-400',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-background-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Let&apos;s discuss opportunities, collaborations, or just have a chat about
            technology and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background-tertiary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background-tertiary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background-tertiary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="What&apos;s this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background-tertiary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.95 }}
                className={`w-full btn-primary ${
                  isSubmitted ? 'bg-green-500 hover:bg-green-500' : ''
                } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitted ? (
                  <>
                    <FiCheck className="mr-2" />
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <h3 className="text-2xl font-semibold mb-8">Connect With Me</h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4">Social Links</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-3 p-4 bg-background-tertiary rounded-lg transition-all duration-200 ${link.color}`}
                    >
                      <link.icon size={20} />
                      <span className="font-medium">{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4">Let&apos;s Collaborate</h4>
                <p className="text-text-secondary leading-relaxed">
                  I&apos;m always interested in discussing new opportunities, innovative projects,
                  and collaborations in systems engineering, AI, and emerging technologies.
                  Whether you have a project in mind or just want to connect, I&apos;d love to hear from you.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4">Response Time</h4>
                <p className="text-text-secondary">
                  I typically respond to messages within 24-48 hours. For urgent matters,
                  feel free to reach out via email directly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}