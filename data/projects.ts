export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'professional' | 'personal' | 'academic';
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Site Web Hôtel',
    description: 'Site web pour un hôtel haut de gamme, menu déroulant interactif, page de contact avec formulaire de contact.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Sanity CMS'],
    category: 'professional',
    image: '/images/projetTesa.png',
    liveUrl: 'https://chalets.harasdetesa.com',
  },
  {
    id: '2',
    title: 'Area',
    description: 'Application et site web de créations d\'automatisation de tâches entre différents services (Google, Discord, Spotify, etc.)',
    technologies: ['Nuxt.js', 'Vue', 'Nest.js', 'Golang', 'PostgreSQL', 'Prisma'],
    category: 'academic',
    image: '/images/projetArea.png',
  },
  {
    id: '3',
    title: 'Site Vitrine BTP',
    description: 'Site web responsive pour une entreprise de façade BTP en balagne, avec galerie photo, formulaire de contact.',
    technologies: ['React', 'Vite.js', 'TypeScript', 'Tailwind CSS', 'Google Search Console'],
    category: 'professional',
    image: '/images/projetBTP.png',
    liveUrl: 'https://www.balagne-projection.com/',
  },
  {
    id: '4',
    title: 'Site Vitrine Parfumerie',
    description: 'Site web responsive pour une parfumerie, en maintenance actuellement.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'professional',
    image: '/images/projetMaisonAntone.png',
    liveUrl: 'https://www.maison-antone.com/',
  },
  {
    id: '5',
    title: 'Portfolio Franck Poletti',
    description: 'Portfolio personnel, avec galerie de projets, technologies utilisées, etc.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'personal',
    image: '/images/projetPortfolio.png',
    githubUrl: 'https://github.com/Franck2b',
  },
];