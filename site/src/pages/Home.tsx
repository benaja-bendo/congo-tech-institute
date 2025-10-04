/**
 * Page d'accueil de l'Institut Technologique du Congo
 */

import { ArrowRight, Users, BookOpen, Award, TrendingUp } from 'lucide-react';
import { INSTITUTE_INFO, INSTITUTE_STATS, FORMATIONS } from '../constants';
import { formatPrice } from '../utils';

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Section Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {INSTITUTE_INFO.tagline}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              {INSTITUTE_INFO.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/formations"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              >
                Découvrir nos formations
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {INSTITUTE_STATS.students}+
              </div>
              <div className="text-gray-600">Étudiants formés</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="w-12 h-12 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {INSTITUTE_STATS.courses}
              </div>
              <div className="text-gray-600">Formations disponibles</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {INSTITUTE_STATS.partners}+
              </div>
              <div className="text-gray-600">Partenaires</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {INSTITUTE_STATS.successRate}%
              </div>
              <div className="text-gray-600">Taux de réussite</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Formations populaires */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos formations les plus populaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos programmes de formation conçus pour répondre aux besoins du marché technologique africain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FORMATIONS.map((formation) => (
              <div
                key={formation.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100"
              >
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {formation.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {formation.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {formation.description}
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Durée:</span>
                    <span className="font-medium">{formation.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Niveau:</span>
                    <span className="font-medium">{formation.level}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Prix:</span>
                    <span className="font-bold text-blue-600">
                      {formatPrice(formation.price.fcfa, formation.price.euro)}
                    </span>
                  </div>
                </div>
                <a
                  href={`/formations/${formation.id}`}
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  En savoir plus
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/formations"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Voir toutes les formations
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Section Pourquoi nous choisir */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir l'ITC ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche unique pour former les talents tech de demain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Programmes certifiants
              </h3>
              <p className="text-gray-600">
                Obtenez des certifications reconnues internationalement pour booster votre carrière
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Accompagnement personnalisé
              </h3>
              <p className="text-gray-600">
                Bénéficiez d'un suivi individuel avec nos mentors expérimentés
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Partenariats d'excellence
              </h3>
              <p className="text-gray-600">
                Collaborations avec les leaders technologiques mondiaux
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à transformer votre avenir ?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Rejoignez les centaines d'étudiants qui ont déjà fait confiance à l'ITC pour leur formation technologique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/formations"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              Commencer maintenant
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Demander des informations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}