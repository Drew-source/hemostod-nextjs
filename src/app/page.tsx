import Hero from '@/components/sections/Hero'
import Header from '@/components/layout/Header'
import AboutUs from '@/components/sections/AboutUs'
import CompanyOverview from '@/components/sections/CompanyOverview'
import Technology from '@/components/sections/Technology'
import Partnering from '@/components/sections/Partnering'
import Team from '@/components/sections/Team'
import News from '@/components/sections/News'
import Partners from '@/components/sections/Partners'
import Careers from '@/components/sections/Careers'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutUs />
      <CompanyOverview />
      <Technology />
      <Partnering />
      <Team />
      <News />
      <Partners />
      <Careers />
      <Footer />
    </main>
  )
}
