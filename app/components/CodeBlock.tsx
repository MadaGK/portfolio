'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { motion } from 'framer-motion'
import { FiCopy, FiCheck } from 'react-icons/fi'
import { useState } from 'react'

interface CodeBlockProps {
  children: string
  language?: string
  filename?: string
}

export function CodeBlock({ children, language = 'text', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(children)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="my-8"
    >
      {filename && (
        <div className="bg-gray-800 text-gray-300 px-4 py-2 rounded-t-lg border-b border-gray-700 text-sm font-mono">
          {filename}
        </div>
      )}
      <div className="relative group">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-200 opacity-0 group-hover:opacity-100 z-10"
          title="Copy code"
        >
          {copied ? <FiCheck size={16} className="text-green-400" /> : <FiCopy size={16} />}
        </button>
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            margin: 0,
            borderRadius: filename ? '0 0 8px 8px' : '8px',
            fontSize: '14px',
            lineHeight: '1.5',
          }}
          showLineNumbers={language !== 'text'}
          wrapLines={true}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </motion.div>
  )
}

export function InlineCode({ children }: { children: string }) {
  return (
    <code className="px-2 py-1 bg-background-tertiary text-primary rounded-md text-sm font-mono">
      {children}
    </code>
  )
} 