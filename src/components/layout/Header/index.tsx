import Logo from './Logo'
import Navigation from './Navigation'
import SocialLinks from './SocialLinks'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Navigation */}
          <div className="flex items-center space-x-4 lg:space-x-8">
            <Navigation />
            <div className="hidden md:block">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
