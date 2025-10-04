/**
 * Service API pour l'Institut Technologique du Congo
 */

import axios from 'axios';
import type { ContactForm, NewsItem, Formation } from '../types';

// Configuration de base d'Axios
const api = axios.create({
  baseURL: process.env.VITE_API_URL || 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour les requêtes
api.interceptors.request.use(
  (config) => {
    // Ajouter un token d'authentification si nécessaire
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour les réponses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Gestion globale des erreurs
    if (error.response?.status === 401) {
      // Redirection vers la page de connexion si nécessaire
      localStorage.removeItem('auth_token');
    }
    return Promise.reject(error);
  }
);

// Services pour les formations
export const formationService = {
  /**
   * Récupère toutes les formations
   */
  getAll: async (): Promise<Formation[]> => {
    const response = await api.get('/formations');
    return response.data;
  },

  /**
   * Récupère une formation par ID
   */
  getById: async (id: string): Promise<Formation> => {
    const response = await api.get(`/formations/${id}`);
    return response.data;
  },

  /**
   * Récupère les formations par catégorie
   */
  getByCategory: async (category: string): Promise<Formation[]> => {
    const response = await api.get(`/formations?category=${category}`);
    return response.data;
  },
};

// Services pour les actualités
export const newsService = {
  /**
   * Récupère toutes les actualités
   */
  getAll: async (limit?: number): Promise<NewsItem[]> => {
    const response = await api.get(`/news${limit ? `?limit=${limit}` : ''}`);
    return response.data;
  },

  /**
   * Récupère une actualité par ID
   */
  getById: async (id: string): Promise<NewsItem> => {
    const response = await api.get(`/news/${id}`);
    return response.data;
  },
};

// Services pour les contacts
export const contactService = {
  /**
   * Envoie un message de contact
   */
  sendMessage: async (data: ContactForm): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/contact', data);
    return response.data;
  },

  /**
   * Inscription à la newsletter
   */
  subscribeNewsletter: async (email: string): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/newsletter/subscribe', { email });
    return response.data;
  },
};

// Services pour les inscriptions
export const enrollmentService = {
  /**
   * Inscription à une formation
   */
  enrollToFormation: async (formationId: string, userData: {
    name: string;
    email: string;
    phone: string;
  }): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/enrollments', {
      formationId,
      ...userData,
    });
    return response.data;
  },

  /**
   * Demande d'informations sur une formation
   */
  requestInfo: async (formationId: string, userData: {
    name: string;
    email: string;
    phone?: string;
  }): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/enrollments/info-request', {
      formationId,
      ...userData,
    });
    return response.data;
  },
};

export default api;