import { Partner } from '@/types'

export const partners: Partner[] = [
  {
    name: 'Swiss Biotech Center',
    logo: '/images/our-partners/sbc.png',
    url: 'https://www.swissbiotech.org/'
  },
  {
    name: 'Swiss Confederation',
    logo: '/images/our-partners/swiss-confederation.png',
    url: 'https://www.innosuisse.ch/'
  },
  {
    name: 'FIT - Fondation pour l\'innovation Technologique',
    logo: '/images/our-partners/fit.png',
    url: 'https://www.fondation-fit.ch/'
  },
  {
    name: 'Venture Kick',
    logo: '/images/our-partners/venture-kick.png',
    url: 'https://www.venturekick.ch/'
  },
  {
    name: 'Centre hospitalier universitaire vaudois (CHUV)',
    logo: '/images/our-partners/chuv.png',
    url: 'https://www.chuv.ch/'
  },
  {
    name: 'EPFL',
    logo: '/images/our-partners/epfl.png',
    url: 'https://www.epfl.ch/'
  },
  {
    name: 'Canton de Vaud',
    logo: '/images/our-partners/vaud.png',
    url: 'https://www.vd.ch/'
  },
  {
    name: 'UNIL - Université de Lausanne',
    logo: '/images/our-partners/unil.png',
    url: 'https://www.unil.ch/'
  },
  {
    name: 'EIT Health',
    logo: '/images/our-partners/eit-health.png',
    url: 'https://eithealth.eu/'
  }
]

// Group partners into slides of 3 for carousel
export const getPartnerSlides = (): Partner[][] => {
  const slides: Partner[][] = []
  for (let i = 0; i < partners.length; i += 3) {
    slides.push(partners.slice(i, i + 3))
  }
  return slides
}

// Get partners from a specific directory (for dynamic loading)
export const getPartnersFromDirectory = async (): Promise<Partner[]> => {
  // This would be used in a build-time script to automatically
  // detect partner logos in the /public/images/partners/ directory
  // and generate the partners array dynamically
  return partners
}
