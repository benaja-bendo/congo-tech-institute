/**
 * Composant Header avec navigation principale
 */

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { INSTITUTE_INFO, MAIN_NAVIGATION } from '../../constants';
import { cn } from '../../utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  /**
   * Gère l'ouverture/fermeture du menu mobile
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  /**
   * Gère l'affichage des sous-menus
   */
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo et nom */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-blue-600">
                {INSTITUTE_INFO.shortName}
              </h1>
            </div>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {MAIN_NAVIGATION.map((item) => (
                <div key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className={cn(
                      'text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      'flex items-center gap-1'
                    )}
                    onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </a>

                  {/* Sous-menu desktop */}
                  {item.children && activeDropdown === item.label && (
                    <div
                      className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Nous contacter
            </a>
          </div>

          {/* Menu mobile button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {MAIN_NAVIGATION.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="p-2 text-gray-700 hover:text-blue-600"
                    >
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform',
                          activeDropdown === item.label && 'rotate-180'
                        )}
                      />
                    </button>
                  )}
                </div>

                {/* Sous-menu mobile */}
                {item.children && activeDropdown === item.label && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* CTA mobile */}
            <div className="pt-4 border-t">
              <a
                href="/contact"
                className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center hover:bg-blue-700"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}