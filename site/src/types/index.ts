/**
 * Types pour l'Institut Technologique du Congo
 */

// Types pour les formations
export interface Formation {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: {
    fcfa: number;
    euro: number;
  };
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  category: 'Développement Web' | 'Mobile' | 'Cybersécurité' | 'Cloud';
  features: string[];
  certification: boolean;
}

// Types pour les partenaires
export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  type: 'Technologique' | 'Éducatif' | 'Entreprise';
}

// Types pour les témoignages
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  rating: number;
}

// Types pour les statistiques
export interface Stats {
  students: number;
  courses: number;
  partners: number;
  successRate: number;
}

// Types pour les actualités/blog
export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  image?: string;
}

// Types pour les contacts
export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Types pour la navigation
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}