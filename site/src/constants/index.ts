/**
 * Constantes pour l'Institut Technologique du Congo
 */

import type { Formation, Partner, Stats } from '../types';

// Informations de l'institut
export const INSTITUTE_INFO = {
  name: 'Institut Technologique du Congo',
  shortName: 'ITC',
  tagline: 'Former les talents tech de demain en Afrique',
  description: 'L\'Institut Technologique du Congo forme les professionnels du numérique avec des programmes certifiants adaptés au marché africain.',
  email: 'contact@itc-congo.org',
  phone: '+242 XXX XXX XXX',
  address: 'Mere et enfant Pointe-Noire, République du Congo',
  website: 'https://itc-congo.org'
};

// Navigation principale
export const MAIN_NAVIGATION = [
  { label: 'Accueil', href: '/' },
  { 
    label: 'Formations', 
    href: '/formations',
    children: [
      { label: 'Développement Web', href: '/formations/web' },
      { label: 'Développement Mobile', href: '/formations/mobile' },
      { label: 'Cybersécurité', href: '/formations/cybersecurity' },
      { label: 'Cloud Computing', href: '/formations/cloud' }
    ]
  },
  { label: 'À propos', href: '/about' },
  { label: 'Partenaires', href: '/partners' },
  { label: 'Actualités', href: '/news' },
  { label: 'Contact', href: '/contact' }
];

// Statistiques de l'institut
export const INSTITUTE_STATS: Stats = {
  students: 500,
  courses: 12,
  partners: 25,
  successRate: 95
};

// Formations disponibles
export const FORMATIONS: Formation[] = [
  {
    id: 'web-dev',
    title: 'Développement Web Full Stack',
    description: 'Maîtrisez les technologies web modernes : HTML, CSS, JavaScript, React, Node.js',
    duration: '6 mois',
    price: { fcfa: 150000, euro: 229 },
    level: 'Débutant',
    category: 'Développement Web',
    features: [
      'HTML5, CSS3, JavaScript ES6+',
      'React.js et écosystème',
      'Node.js et Express',
      'Bases de données MongoDB/PostgreSQL',
      'Déploiement et DevOps'
    ],
    certification: true
  },
  {
    id: 'mobile-dev',
    title: 'Développement Mobile',
    description: 'Créez des applications mobiles natives et cross-platform',
    duration: '8 mois',
    price: { fcfa: 180000, euro: 275 },
    level: 'Intermédiaire',
    category: 'Mobile',
    features: [
      'React Native',
      'Flutter/Dart',
      'API REST et GraphQL',
      'Publication sur stores',
      'Tests et optimisation'
    ],
    certification: true
  },
  {
    id: 'cybersecurity',
    title: 'Cybersécurité Fondamentale',
    description: 'Protégez les systèmes et données contre les cybermenaces',
    duration: '4 mois',
    price: { fcfa: 300000, euro: 458 },
    level: 'Intermédiaire',
    category: 'Cybersécurité',
    features: [
      'Sécurité des réseaux',
      'Cryptographie',
      'Tests de pénétration',
      'Gestion des incidents',
      'Conformité et audit'
    ],
    certification: true
  }
];

// Partenaires
export const PARTNERS: Partner[] = [
  {
    id: 'microsoft',
    name: 'Microsoft',
    logo: '/partners/microsoft.svg',
    description: 'Partenaire technologique pour Azure et les certifications',
    type: 'Technologique'
  },
  {
    id: 'aws',
    name: 'Amazon Web Services',
    logo: '/partners/aws.svg',
    description: 'Formation et certification cloud AWS',
    type: 'Technologique'
  },
  {
    id: 'google',
    name: 'Google Cloud',
    logo: '/partners/google.svg',
    description: 'Programmes éducatifs Google Cloud',
    type: 'Technologique'
  }
];

// Réseaux sociaux
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/itc-congo',
  twitter: 'https://twitter.com/itc_congo',
  linkedin: 'https://linkedin.com/company/itc-congo',
  youtube: 'https://youtube.com/@itc-congo'
};