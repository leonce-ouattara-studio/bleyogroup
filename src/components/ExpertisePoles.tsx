import React from 'react';
import {
  Check,
  Radio,
  HardHat,
  ArrowRight,
  Sun,
  Wrench,
  Layers,
  Sparkles
} from 'lucide-react';
import { useRouter } from '../context/RouterContext.tsx';

// Image composite haute fidélité générée selon le modèle téléversé
import splitBannerImg from '../assets/images/expertises_split_banner_1790954558294.jpg';

interface ExpertisePolesProps {
  onOpenQuote?: () => void;
}

export const ExpertisePoles: React.FC<ExpertisePolesProps> = () => {
  const { navigate, openQuoteModal } = useRouter();

  const telecomPoints = [
    'Installation de réseaux mobiles (2G/3G/4G/5G)',
    "Fibre optique et réseaux d'accès",
    'Réseaux de télécommunication (LAN/WAN)',
    'Équipements et infrastructures télécom',
    'Maintenance et support technique',
  ];

  const civilEngPoints = [
    'Études et conception de projets',
    'Travaux de terrassement et de voirie',
    'Bâtiments et ouvrages d’art',
    'Réseaux divers (eau, assainissement, électricité)',
    'Aménagements urbains et ruraux',
    'Rénovation et réhabilitation d’infrastructures',
  ];

  const complementaryServices = [
    'Énergie solaire & électrique',
    'Canalisation',
    'Reprofilage',
    'Entretien général',
    'Maintenance générale',
  ];

  return (
    <section id="expertises" className="bg-white py-16 lg:py-24 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête éditorial issu du PDF : CE QU'ON RÉSOUT POUR VOUS */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block font-mono mb-2">
            CE QU'ON RÉSOUT POUR VOUS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-condensed tracking-tight text-slate-900 leading-tight">
            DEUX URGENCES QUI COÛTENT CHER QUAND ON LES NÉGLIGE
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-3 leading-relaxed font-normal">
            Chaque jour de retard ou de panne a un coût direct sur votre activité. Voici comment nous l'évitons, concrètement.
          </p>
        </div>

        {/* En-tête biseauté et visuel composite téléversé */}
        <div className="text-center mb-8">
          <div className="inline-block">
            <div className="relative inline-flex items-center justify-center px-6 sm:px-10 py-2 sm:py-2.5 bg-[#003B96] text-white shadow-sm transform -skew-x-12 rounded-sm border border-blue-900">
              <span className="transform skew-x-12 text-base sm:text-xl md:text-2xl font-black uppercase font-condensed tracking-wide flex items-center gap-2 sm:gap-3">
                <span className="text-white">Télécommunications</span>
                <span className="text-[#EA580C] font-black font-sans">&</span>
                <span className="text-white">Génie civil</span>
              </span>
            </div>
          </div>
        </div>

        {/* Visuel Composite Architectural */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 mb-12 sm:mb-16 aspect-[16/9] sm:aspect-[21/9] max-h-[440px] bg-slate-900 group">
          <img
            src={splitBannerImg}
            alt="Télécommunications et Génie Civil - BLEYO GROUPE"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 bottom-0 left-[48%] w-1 bg-gradient-to-b from-transparent via-[#EA580C] to-transparent transform -skew-x-12 opacity-80" />
          </div>
        </div>

        {/* Deux Colonnes Textuelles réadaptées exactement selon le PDF */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start relative">
          {/* COLONNE GAUCHE : TÉLÉCOMMUNICATIONS */}
          <div className="flex flex-col justify-between h-full pr-0 md:pr-6 lg:pr-10">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#003B96] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Radio className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.2} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono block">
                    TÉLÉCOMMUNICATIONS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase font-condensed tracking-tight text-slate-900 leading-tight">
                    Votre réseau ne peut pas rester coupé
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                Un retard d'installation ou une panne non résolue, et ce sont vos propres clients qui vous le reprochent. Des solutions connectées pour un monde plus proche.
              </p>

              {/* 5 Puces conformes au PDF */}
              <ul className="space-y-2.5 sm:space-y-3">
                {telecomPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium leading-snug">
                    <Check className="w-4 h-4 text-[#003B96] shrink-0 mt-0.5" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lien d'action orienté cible conforme au PDF */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={openQuoteModal}
                className="text-xs sm:text-sm font-bold text-[#003B96] hover:text-[#EA580C] transition-colors cursor-pointer flex items-center gap-1.5 group"
              >
                <span>Signaler une urgence réseau</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => navigate('telecommunications')}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                Détails pôle
              </button>
            </div>
          </div>

          {/* Ligne verticale de séparation */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-slate-200" />

          {/* COLONNE DROITE : GÉNIE CIVIL */}
          <div className="flex flex-col justify-between h-full pl-0 md:pl-6 lg:pl-10">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#EA580C] text-white flex items-center justify-center shrink-0 shadow-md">
                  <HardHat className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.2} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono block">
                    GÉNIE CIVIL
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase font-condensed tracking-tight text-slate-900 leading-tight">
                    Un chantier en retard, c'est de l'argent perdu chaque jour
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                Délais non tenus, budgets qui dérapent, entreprises injoignables une fois le chantier commencé. Construire aujourd'hui les infrastructures de demain.
              </p>

              {/* 6 Puces conformes au PDF */}
              <ul className="space-y-2.5 sm:space-y-3">
                {civilEngPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium leading-snug">
                    <Check className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lien d'action orienté cible conforme au PDF */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={openQuoteModal}
                className="text-xs sm:text-sm font-bold text-[#EA580C] hover:text-[#C2410C] transition-colors cursor-pointer flex items-center gap-1.5 group"
              >
                <span>Cadrer mon chantier</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => navigate('genie-civil')}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                Détails pôle
              </button>
            </div>
          </div>
        </div>

        {/* Section "ÉGALEMENT DISPONIBLE" conforme à la Page 3 du PDF */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono shrink-0">
              ÉGALEMENT DISPONIBLE :
            </span>

            <div className="flex flex-wrap items-center gap-2.5">
              {complementaryServices.map((service, i) => (
                <button
                  key={i}
                  onClick={openQuoteModal}
                  className="px-4 py-2 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-300 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
