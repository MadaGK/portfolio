import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollProgress } from '../components/ScrollProgress'
import { ErrorBoundary } from '../components/ErrorBoundary'
import BlogListClient from '../components/BlogListClient'

export default function BlogPage() {
  return (
    <ErrorBoundary>
      <ScrollProgress />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <BlogListClient />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
} 