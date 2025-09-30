import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
          {/* Company Info */}
          <div className="space-y-2 text-gray-600">
            <p className="font-semibold text-gray-900">HemostOD SA</p>
            <p>EPFL Innovation Park - Bâtiment M</p>
            <p>Rue des Jordils, 1A</p>
            <p>1025 St-Sulpice</p>
            <p>Switzerland</p>
          </div>

          {/* Logo and Social Media */}
          <div className="flex flex-col items-center space-y-4">
            {/* Logo */}
            <div className="relative w-20 h-20">
              <Image
                src="/images/logos/logo-symbol-only.png"
                alt="HemostOD Symbol"
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>
            
            {/* LinkedIn Follow Button */}
            <a
              href="https://www.linkedin.com/company/hemostod"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              <span>Follow</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>2021 © Hemostod</p>
        </div>
      </div>
    </footer>
  )
}
