/**
 * Composant Footer avec informations de contact et liens
 */

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { INSTITUTE_INFO, SOCIAL_LINKS, MAIN_NAVIGATION } from '../../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations de l'institut */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              {INSTITUTE_INFO.name}
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              {INSTITUTE_INFO.description}
            </p>
            
            {/* Informations de contact */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a 
                  href={`mailto:${INSTITUTE_INFO.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {INSTITUTE_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a 
                  href={`tel:${INSTITUTE_INFO.phone}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {INSTITUTE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">
                  {INSTITUTE_INFO.address}
                </span>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {MAIN_NAVIGATION.slice(0, 5).map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Formations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Formations</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/formations/web"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Développement Web
                </a>
              </li>
              <li>
                <a
                  href="/formations/mobile"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Développement Mobile
                </a>
              </li>
              <li>
                <a
                  href="/formations/cybersecurity"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cybersécurité
                </a>
              </li>
              <li>
                <a
                  href="/formations/cloud"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cloud Computing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Réseaux sociaux et copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Réseaux sociaux */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>
                © {currentYear} {INSTITUTE_INFO.name}. Tous droits réservés.
              </p>
              <p className="mt-1">
                Formant les talents tech de demain en Afrique
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}