import Image from 'next/image'
import Link from 'next/link'

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-3">
      <Link
        href="mailto:contact@hemostod.com"
        className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
        aria-label="Send email"
      >
        <Image
          src="/images/email.svg"
          alt="Email"
          width={20}
          height={20}
          className="filter invert"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/company/hemostod"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
        aria-label="LinkedIn"
      >
        <Image
          src="/images/linkedin.svg"
          alt="LinkedIn"
          width={20}
          height={20}
          className="filter invert"
        />
      </Link>
    </div>
  )
}
