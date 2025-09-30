export default function CompanyOverview() {
  return (
    <section className="bg-gradient-to-r from-primary-blue to-blue-700 text-white py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-yellow">
            HemostOD: a swiss-based preclinical company
          </h2>

          {/* Company Description */}
          <div className="space-y-6 text-lg lg:text-xl leading-relaxed">
            <p>
              Founded in 2020, HemostOD is a biotech company based at the EPFL Innovation Park in Lausanne, 
              Switzerland.
            </p>
            
            <p>
              We are a preclinical stage company developing applications based on our proprietary platform to 
              engineer and manufacture universal platelets.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
