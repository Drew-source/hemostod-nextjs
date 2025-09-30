import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-primary-blue to-blue-700 text-white">
      <div className="container mx-auto px-4 py-2 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 py-11">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              We engineer
              <br />
              and manufacture
              <br />
              <span className="text-primary-yellow">platelets.</span>
            </h1>
          </div>

          {/* Hero Image */}
          <div className="relative h-[500px] lg:h-[700px] rounded-lg overflow-hidden mb-2 lg:mb-0">
            <Image
              src="/images/section-images/hero-image.jpg"
              alt="HemostOD Laboratory - Engineering Platelets"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
