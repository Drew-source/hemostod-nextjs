import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="hover:opacity-80 transition-opacity">
      <div className="relative w-48 h-16">
        <Image
          src="/images/logos/logo-with-name.png"
          alt="HemostOD - Platelets On Demand"
          fill
          className="object-contain object-left"
          sizes="192px"
          priority
        />
      </div>
    </Link>
  )
}
