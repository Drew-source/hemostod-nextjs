import Link from 'next/link'
import { getLatestNews } from '@/data/news'

export default function News() {
  const latestNews = getLatestNews(6)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
  }

  return (
    <section id="news" className="bg-light-blue py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest News
          </h2>
          <p className="text-xl text-gray-600">
            Stay updated with our latest developments and milestones
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {latestNews.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.slug}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 block h-80 flex flex-col"
            >
              <div className="flex flex-col h-full">
                <div className="text-sm font-medium text-primary-yellow mb-4">
                  {formatDate(article.date)}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 leading-tight hover:text-primary-blue transition-colors mb-4 line-clamp-3">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed flex-grow line-clamp-4 mb-4">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center text-primary-blue font-medium mt-auto">
                  <span>Read more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All News Link */}
        <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-flex items-center px-8 py-3 bg-primary-blue text-white font-medium rounded-full hover:bg-opacity-90 transition-all"
          >
            View All News
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
