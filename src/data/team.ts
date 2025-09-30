import { TeamMember } from '@/types'

export const executiveTeam: TeamMember[] = [
  {
    id: 'faouzi',
    name: 'Faouzi Khechana',
    role: 'CEO',
    image: '/images/executive-team-pictures/photo-faouzi-team-1.png',
    linkedin: 'http://linkedin.com/in/faouzi-khechana-9642574',
  },
  {
    id: 'laurent-massuyeau',
    name: 'Laurent Massuyeau',
    role: 'Executive Chairman',
    image: '/images/executive-team-pictures/laurentm-1.png',
    linkedin: 'http://linkedin.com/in/laurent-massuyeau-330646',
  },
  {
    id: 'nicoletta-sorvillo',
    name: 'Nicoletta Sorvillo',
    role: 'CSO',
    image: '/images/executive-team-pictures/nicoletta-sorvillo.png',
    linkedin: 'https://www.linkedin.com/in/nicoletta-sorvillo-614580b1/',
  },
  {
    id: 'elodie-dahan',
    name: 'Elodie Dahan',
    role: 'CTO',
    image: '/images/executive-team-pictures/photo-elodie-team-1.png',
    linkedin: 'https://www.linkedin.com/in/elodie-dahan/',
  },
  {
    id: 'chris-wiltshire',
    name: 'Chris Wiltshire',
    role: 'CBO',
    image: '/images/executive-team-pictures/chris-wiltsh.png',
    linkedin: 'https://www.linkedin.com/in/chwiltshire/',
  },
]

export const academicPartners: TeamMember[] = [
  {
    id: 'olaia-naveiras',
    name: 'Prof. Olaïa Naveiras',
    role: 'Academic Partner',
    image: '/images/academic-partners/olaia-naveiras.png',
    linkedin: 'http://linkedin.com/in/olaian',
  },
]

export const boardOfDirectors: TeamMember[] = [
  {
    id: 'faouzi-board',
    name: 'Faouzi Khechana',
    role: 'CEO',
    image: '/images/board-of-directors/photo-faouzi-team-1.png',
    linkedin: 'http://linkedin.com/in/faouzi-khechana-9642574',
  },
  {
    id: 'laurent-board',
    name: 'Laurent Massuyeau',
    role: 'Executive Chairman',
    image: '/images/board-of-directors/laurentm-1.png',
    linkedin: 'http://linkedin.com/in/laurent-massuyeau-330646',
  },
  {
    id: 'anton-gueth',
    name: 'Anton Gueth',
    role: 'Board member',
    image: '/images/board-of-directors/anton-gueth.png',
    linkedin: 'http://linkedin.com/in/antongueth',
  },
  {
    id: 'yves-glanzmann-board',
    name: 'Yves Glanzmann',
    role: 'Board member',
    image: '/images/scientific-advisory-board/yves-glansmann.png',
    linkedin: '#',
  },
]

export const scientificAdvisoryBoard: TeamMember[] = [
  {
    id: 'andrew-frelinger',
    name: 'Andrew L. Frelinger, PhD',
    role: 'Scientific Advisor',
    image: '/images/scientific-advisory-board/adrew-l.png',
    linkedin: 'https://www.linkedin.com/in/andrew-l-larry-frelinger-iii-ph-d-6388a250/',
    bio: 'Expertise: Platelet biology',
  },
  {
    id: 'florence-salmon',
    name: 'Florence Salmon, PhD',
    role: 'Scientific Advisor',
    image: '/images/scientific-advisory-board/florence-salmon.png',
    linkedin: 'https://www.linkedin.com/in/florence-salmon-75427312/',
    bio: 'Expertise: Regulatory, CMC and Pre-clinical developments',
  },
  {
    id: 'terry-gernsheimer',
    name: 'Terry B. Gernsheimer, MD',
    role: 'Scientific Advisor',
    image: '/images/scientific-advisory-board/teryy-b.png',
    linkedin: 'https://www.linkedin.com/in/terry-gernsheimer-77b14271/',
    bio: 'Expertise: Transfusion medicine and clinical haematology',
  },
  {
    id: 'philippe-renaud',
    name: 'Philippe Renaud, PhD',
    role: 'Scientific Advisor',
    image: '/images/scientific-advisory-board/philippe-renaud.png',
    linkedin: 'https://www.linkedin.com/in/philippe-renaud-b549883/',
    bio: 'Expertise: Microfluidics for biomedical applications',
  },
]

export const teamCategories = {
  'Executive Team': executiveTeam,
  'Academic Partners': academicPartners,
  'Board of Directors': boardOfDirectors,
  'Scientific Advisory Board': scientificAdvisoryBoard,
}

// Legacy export for backward compatibility
export const teamMembers = executiveTeam
