export default function Careers() {
  return (
    <section id="careers" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Join us
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 leading-relaxed">
            We do not have any open positions at the moment, but we are always happy to hear from interested 
            talents. Please reach out to us by email at the address below.
          </p>

          {/* Contact Button */}
          <div className="pt-4">
            <a
              href="mailto:contact@hemostod.com"
              className="inline-flex items-center space-x-3 bg-primary-yellow text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-opacity-90 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>contact@hemostod.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
