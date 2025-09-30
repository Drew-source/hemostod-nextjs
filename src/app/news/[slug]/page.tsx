import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getNewsArticleBySlug, newsArticles } from '@/data/news'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

interface NewsArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }))
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  const article = getNewsArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        // Handle markdown-style bold text
        const formattedParagraph = paragraph
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary-blue hover:underline">$1</a>')

        return (
          <div
            key={index}
            className="mb-6 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formattedParagraph }}
          />
        )
      })
  }

  return (
    <main>
      <Header />
      
      <article className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link
                href="/#news"
                className="inline-flex items-center text-primary-blue hover:text-primary-yellow transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to News
              </Link>
            </nav>

            {/* Article Header */}
            <header className="mb-12">
              <div className="text-sm font-medium text-primary-yellow mb-4">
                {formatDate(article.date)}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {article.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {article.excerpt}
              </p>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 text-lg leading-relaxed">
                {formatContent(article.content)}
              </div>
            </div>

            {/* Footer Navigation */}
            <footer className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <Link
                  href="/#news"
                  className="inline-flex items-center px-6 py-3 bg-primary-blue text-white font-medium rounded-full hover:bg-opacity-90 transition-all"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  All News
                </Link>
                
                <div className="flex items-center space-x-4">
                  <span className="text-gray-500">Share:</span>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://hemostod.com/news/${article.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  )
}

export async function generateMetadata({ params }: NewsArticlePageProps) {
  const article = getNewsArticleBySlug(params.slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | HemostOD News`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
    },
  }
}
