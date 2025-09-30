export default function AboutUs() {
  const applications = [
    {
      id: 'thrombocytopenia',
      title: 'Thrombocytopenia',
      subtitle: 'lead program 1',
      description: 'Developing universal* platelets for treatment in patients with, or at risk of, HLA immune-refractoriness.',
      isLeadProgram: true,
    },
    {
      id: 'tissue-targeted',
      title: 'Tissue-targeted cargo delivery',
      subtitle: 'lead program 2',
      description: 'Using our unique CAR-PLT* technology for shielded delivery of miRNA/siRNA or proteins to specific target tissues.',
      isLeadProgram: true,
    },
    {
      id: 'regenerative',
      title: 'Regenerative medicine',
      description: 'Using engineered platelets in wound healing, anti-inflammatory and immunomodulating applications.',
      isLeadProgram: false,
    },
    {
      id: 'stem-cells',
      title: 'Culture of therapeutic stem cells',
      description: 'Using platelet lysate produced from our universal platelets to boost cell proliferation.',
      isLeadProgram: false,
    },
  ]

  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Inspired by platelet biology to save lives
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            HemostOD's technology platform unlocks the power of platelets in:
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {applications.map((app) => (
            <div key={app.id} className="flex items-start space-x-4">
              {/* Yellow Circle Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="mb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {app.title}
                    </h3>
                    {app.isLeadProgram && (
                      <span className="inline-block mt-1 sm:mt-0 px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full w-fit">
                        {app.subtitle}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            * engineered to be HLA-null
          </p>
        </div>
      </div>
    </section>
  )
}
