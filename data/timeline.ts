export interface TimelineItem {
  id: string;
  type: 'education' | 'experience';
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  status?: string;
  description?: string;
  missions?: string[];
  startYear: number; // Pour le tri chronologique
}

export const timelineData: TimelineItem[] = [
  {
    id: 'exp-5',
    type: 'experience' as const,
    title: 'Développeur Web Full-Stack',
    subtitle: 'Auto-entrepreneur / Web FP',
    period: 'Août 2025 - Aujourd\'hui',
    location: 'Remote',
    status: 'Freelance',
    missions: [
      'Création de sites vitrines & e-commerce',
      'Développement mobile & maintenance applicative',
      'SEO, Google Ads & gestion des réseaux sociaux',
    ],
    startYear: 31,
  },
  {
    id: 'exp-4',
    type: 'experience' as const,
    title: 'Développeur Full-Stack',
    subtitle: 'SASWAVE',
    period: 'Avril 2025 - Août 2025',
    location: 'Corse',
    status: 'Stage',
    missions: [
      'Développement de sites vitrine et e-commerce',
      'Scraping de données en Python, automatisation de tâches & intégration sur Apify API',
      'SEO & Réferencement',
    ],
    startYear: 24,
  },
  {
    id: 'exp-3',
    type: 'experience' as const,
    title: 'Développeur Web & Social Media Manager',
    subtitle: 'Les Châlets de Tesa',
    period: 'Sept 2024 - Mars 2025',
    location: 'Remote',
    status: 'Part-time',
    missions: [
      'Développement du site web chalets.harasdetesa.com',
      'Gestion des réseaux sociaux de l’entreprise',
      'SEO Réferencement & Community Manager',
    ],
    startYear: 23,
  },
  {
    id: 'exp-2',
    type: 'experience' as const,
    title: 'Chargé d\'affaires & Chargé de mission évènementiel',
    subtitle: 'Junior Conseil Taker',
    period: 'Sept 2024 - Juil 2025',
    location: 'Lyon',
    status: 'Junior Entreprise',
    missions: [
      'Prospection et fidélisation clients',
      'Responsable des événements internes',
      'Organisation de conférences et autres',
    ],
    startYear: 22,
  },
  {
    id: 'exp-1',
    type: 'experience' as const,
    title: 'Développeur Web',
    subtitle: 'Numericu',
    period: 'Sept 2023 - Déc 2023',
    location: 'Remote',
    status: 'Stage',
    missions: [
      'Développement de sites vitrine et e-commerce pour entrepreneurs indépendants',
      'Gestion du SEO et des référencements',
      'Support technique et formation des clients à l\'utilisation',
    ],
    startYear: 21,
  },
  { 
    id: 'edu-3',
    type: 'education' as const,
    title: 'Master Lead Développement Full-Stack',
    subtitle: 'EEMI Lyon',
    period: '2025 - 2027',
    status: 'En cours',
    description: 'Programme axé sur la conception d’applications web, mobiles et logicielles, intégrant sécurité, automatisation et méthodologies agiles.',
    startYear: 30,
  },
  {
    id: 'edu-2',
    type: 'education' as const,
    title: 'Programme Grande École, spécialité informatique',
    subtitle: 'Epitech Technology - Lyon',
    period: '2022 - 2025',
    status: 'Niveau Bac+3 validé',
    description: 'Programme axé sur le développement full-stack, combinant programmation avancée, frameworks modernes, gestion de bases de données et travail collaboratif en méthodologie agile.',
    startYear: 20,
  },
  {
    id: 'edu-1',
    type: 'education' as const,
    title: 'Baccalauréat Scientifique',
    subtitle: 'Lycée polyvalent de Balagne',
    period: '2019 - 2022',
    status: 'Validé',
    description: 'Spécialité Mathématiques et Numérique et Sciences Informatiques.',
    startYear: 10,
  },
].sort((a, b) => a.startYear - b.startYear); // Tri décroissant (plus récent en premier)
