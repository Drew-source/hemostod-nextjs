import Image from 'next/image'

export default function Technology() {
  const processSteps = [
    {
      id: 1,
      title: 'Immortalization of hematopoietic progenitors (stem) cells from a single donor.',
      icon: '🔬',
      description: 'HemostOD cell line'
    },
    {
      id: 2,
      title: 'Engineering of cells to introduce custom features, modifying the platelet surface and/or content for controlled release.',
      icon: '⚙️',
      description: 'Engineered HemostOD cell line'
    },
    {
      id: 3,
      title: 'Differentiation into a practically unlimited source of megakaryocytes, the platelet progenitor cells.',
      icon: '🧬',
      description: 'Megakaryocytes'
    },
    {
      id: 4,
      title: 'Ex-vivo generation of platelets in a robust, fast and scalable manufacturing process.',
      icon: '🩸',
      description: 'Platelets'
    }
  ]

  return (
    <section id="technology" className="bg-light-blue py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            A unique & scalable
            <br />
            platelet manufacturing
            <br />
            platform
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Inspired by the physiological generation of platelets in the bone marrow, HemostOD has developed an 
              innovative solution to manufacture engineered platelets, thereby providing a practically unlimited source of 
              universal platelets.
            </p>
            
            <p>
              Our unique process integrates <strong>molecular & cell biology</strong> techniques to build a stable megakaryocitic cell 
              line (steps 1, 2 & 3), followed by the use of <strong>advanced microfluidic</strong> technologies in a bioreactor to fragment 
              megakaryocytes into platelets (step 4). This robust and rapid process enables the generation of large 
              quantities of homogeneous and high-quality platelets in a few hours.
            </p>
            
            <p className="font-semibold">
              Our <strong>IP-protected platform</strong> includes:
            </p>
          </div>
        </div>

        {/* Technology Process Visual */}
        <div className="max-w-6xl mx-auto">
          {/* Step Numbers and Descriptions - Above the image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between lg:items-start gap-8 lg:gap-0 mb-12 lg:px-8">
            {processSteps.map((step) => (
              <div key={step.id} className="text-center lg:flex-1 lg:max-w-xs">
                {/* Step Number */}
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary-blue font-bold text-xl shadow-md mx-auto mb-6">
                  {step.id}
                </div>
                
                {/* Step Description */}
                <p className="text-lg text-gray-700 leading-relaxed px-2">
                  {step.title}
                </p>
              </div>
            ))}
          </div>

          {/* Visual Process Diagram - The image contains all the visual elements */}
          <div className="lg:ml-24 relative h-64 lg:h-80">
            <Image
              src="/images/section-images/technology-steps-image.png"
              alt="HemostOD Technology Process - 4 Steps Visual Diagram"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
