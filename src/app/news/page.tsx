import Link from 'next/link'
import { newsArticles } from '@/data/news'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function NewsPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <main>
      <Header />
      
      <section className="bg-light-blue py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about HemostOD's latest developments, partnerships, and milestones in our journey to revolutionize platelet therapy.
            </p>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {newsArticles.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex-1 space-y-4">
                    <div className="text-sm font-medium text-primary-yellow">
                      {formatDate(article.date)}
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-primary-blue transition-colors">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-primary-blue font-medium mt-6 group-hover:translate-x-2 transition-transform">
                    <span>Read full article</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
