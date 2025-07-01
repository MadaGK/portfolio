import { use } from 'react'
import { notFound } from 'next/navigation'
import { blogPosts } from '../../data/blog'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ErrorBoundary } from '../../components/ErrorBoundary'
import { BlogPostLayoutClient } from '../../components/BlogPostLayoutClient'

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = blogPosts.find(p => p.id === slug)

  if (!post) {
    return notFound()
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <Header />
        <BlogPostLayoutClient post={post} />
        <Footer />
      </div>
    </ErrorBoundary>
  )
}
