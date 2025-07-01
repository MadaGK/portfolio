'use client'

import { motion } from 'framer-motion'
import { CodeBlock, InlineCode } from './CodeBlock'

interface BlogContentProps {
  content: string
}

export function BlogContent({ content }: BlogContentProps) {
  const parseContent = (content: string) => {
    if (!content) return []
    const lines = content.split('\n')
    const elements: JSX.Element[] = []
    let currentCodeBlock = ''
    let currentLanguage = ''
    let inCodeBlock = false
    let key = 0

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true
          const match = line.match(/```(\w+)/)
          currentLanguage = match ? match[1] : 'text'
          currentCodeBlock = ''
        } else {
          inCodeBlock = false
          elements.push(
            <CodeBlock key={key++} language={currentLanguage}>
              {currentCodeBlock.trim()}
            </CodeBlock>
          )
          currentCodeBlock = ''
        }
        continue
      }

      if (inCodeBlock) {
        currentCodeBlock += line + '\n'
        continue
      }

      if (line.startsWith('# ')) {
        elements.push(
          <motion.h1 
            key={key++} 
            className="text-4xl font-bold text-text-primary mt-8 mb-4"
          >
            {line.substring(2)}
          </motion.h1>
        )
      } else if (line.startsWith('## ')) {
        elements.push(
          <motion.h2 
            key={key++} 
            className="text-3xl font-bold text-text-primary mt-8 mb-4"
          >
            {line.substring(3)}
          </motion.h2>
        )
      } else if (line.startsWith('### ')) {
        elements.push(
          <motion.h3 
            key={key++} 
            className="text-2xl font-semibold text-text-primary mt-6 mb-3"
          >
            {line.substring(4)}
          </motion.h3>
        )
      } else if (line.startsWith('- ')) {
        elements.push(
          <motion.li 
            key={key++} 
            className="text-text-secondary ml-6 mb-2"
          >
            {line.substring(2)}
          </motion.li>
        )
      } else if (line.trim() === '') {
        elements.push(<br key={key++} />)
      } else {
        const processedLine = processInlineElements(line)
        elements.push(
          <motion.p 
            key={key++} 
            className="text-text-secondary leading-relaxed mb-4"
          >
            {processedLine}
          </motion.p>
        )
      }
    }

    return elements
  }

  const processInlineElements = (text: string) => {
    const parts = text.split(/(`[^`]+`)/)
    return parts.map((part, index) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        const code = part.slice(1, -1)
        return <InlineCode key={index}>{code}</InlineCode>
      }
      return part
    })
  }

  return (
    <div className="prose prose-lg prose-invert max-w-none">
      {parseContent(content)}
    </div>
  )
} 