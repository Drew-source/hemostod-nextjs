import Image from 'next/image'

export default function Partnering() {
  const targetAreas = [
    'Thrombocytopenia',
    'Tissue-targeted cargo delivery technology (CAR-PLT*)',
    'Regenerative medicine',
    'Culture of therapeutic stem cells (platelet lysate)',
    'and beyond.'
  ]

  return (
    <section id="partnering" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Scientific Image */}
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/section-images/partnering-oppurtunities-image.png"
              alt="HemostOD Partnering Opportunities - Scientific Research"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Partnering opportunities
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              We are open to collaboration and welcome enquiries about partnership opportunities for applications in all our target areas:
            </p>

            <ul className="space-y-3">
              {targetAreas.map((area, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{area}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <p className="text-lg text-gray-700 mb-4">
                For enquiries, please contact:
              </p>
              <a
                href="mailto:contact@hemostod.com"
                className="inline-flex items-center space-x-2 bg-primary-yellow text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>contact@hemostod.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
