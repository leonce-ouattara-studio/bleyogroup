import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter } from '../context/RouterContext.tsx';

// Images générées haute fidélité
import telecomFiberImg from '../assets/images/hero_telecom_fiber_1790951355102.jpg';
import civilEngImg from '../assets/images/hero_civil_engineering_1790951381954.jpg';
import craneImg from '../assets/images/hero_crane_telecom_1790951397717.jpg';
import constructionImg from '../assets/images/banner_infrastructure_construction_1790951333724.jpg';
import splitBannerImg from '../assets/images/expertises_split_banner_1790954558294.jpg';

interface HeroSlide {
  id: number;
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  titleHighlight: string;
  titleLine3: string;
  description: string;
  bgImage: string;
}

export const HeroSection: React.FC = () => {
  const { navigate } = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: HeroSlide[] = [
    {
      id: 0,
      kicker: "UN IMPRÉVU TECHNIQUE, ÇA N'ATTEND PAS",
      titleLine1: 'UN RÉSEAU EN PANNE,',
      titleLine2: "UN CHANTIER À L'ARRÊT,",
      titleHighlight: 'UNE COUPURE AU PIRE MOMENT',
      titleLine3: '— PAS SUR NOTRE SURVEILLANCE',
      description:
        'Opérateur télécom, entreprise BTP ou gestionnaire de site : quand un problème technique menace votre activité, BLEYO GROUPE intervient vite, avec une seule équipe de confiance depuis 2019.',
      bgImage: splitBannerImg,
    },
    {
      id: 1,
      kicker: 'TÉLÉCOMMUNICATIONS & FIBRE OPTIQUE',
      titleLine1: 'VOTRE RÉSEAU',
      titleLine2: 'NE PEUT PAS',
      titleHighlight: 'RESTER COUPÉ',
      titleLine3: '— DES SOLUTIONS CONNECTÉES',
      description:
        "Un retard d'installation ou une panne non résolue, et ce sont vos propres clients qui vous le reprochent. BLEYO GROUPE assure des raccordements fiables et des interventions d'urgence immédiates.",
      bgImage: telecomFiberImg,
    },
    {
      id: 2,
      kicker: 'GÉNIE CIVIL & BTP',
      titleLine1: 'UN CHANTIER EN RETARD,',
      titleLine2: "C'EST DE L'ARGENT",
      titleHighlight: 'PERDU CHAQUE JOUR',
      titleLine3: '— CONSTRUIRE L’AVENIR',
      description:
        "Délais non tenus, budgets qui dérapent, entreprises injoignables une fois le chantier commencé. Nous sécurisons vos voiries, terrassements et ouvrages avec rigueur contractuelle.",
      bgImage: civilEngImg,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const geometricItems = [
    {
      id: 1,
      shapeClass: 'clip-slanted',
      image: telecomFiberImg,
      alt: 'Intervention Fibre Optique et Réseaux',
      label: 'Fibre & Accès',
      route: 'telecommunications' as const,
    },
    {
      id: 2,
      shapeClass: 'clip-triangle',
      image: civilEngImg,
      alt: 'Chantier BTP et Génie Civil',
      label: 'Terrassement',
      route: 'genie-civil' as const,
    },
    {
      id: 3,
      shapeClass: 'clip-star-badge',
      image: constructionImg,
      alt: 'Infrastructures et Bâtiments',
      label: 'Bâtiments',
      route: 'genie-civil' as const,
    },
    {
      id: 4,
      shapeClass: 'clip-circle',
      image: craneImg,
      alt: 'Réseaux Mobiles Télécom',
      label: 'Réseaux 2G–5G',
      route: 'telecommunications' as const,
    },
    {
      id: 5,
      shapeClass: 'clip-jagged-star',
      image: telecomFiberImg,
      alt: 'Maintenance Télécom & Support',
      label: 'Maintenance',
      route: 'telecommunications' as const,
    },
  ];

  const slide = slides[currentSlide];

  return (
    <section
      id="hero"
      className="relative bg-[#0B1325] text-white pt-20 sm:pt-24 lg:pt-32 pb-10 sm:pb-14 lg:pb-16 overflow-hidden"
    >
      {/* 1. Image en arrière-plan transparent avec fluidité et lisibilité optimale */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="absolute inset-0 will-change-transform"
          >
            <img
              src={slide.bgImage}
              alt={slide.kicker}
              className="w-full h-full object-cover object-center opacity-35 sm:opacity-40 filter contrast-105"
            />
            {/* Dégradés protecteurs équilibrés pour apercevoir l'image tout en assurant une lisibilité parfaite */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1325]/95 via-[#0B1325]/85 to-[#0B1325]/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1325] via-transparent to-[#0B1325]/75" />
          </motion.div>
        </AnimatePresence>

        {/* Texture tramée très légère */}
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Ligne supérieure : Slide Actuel */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 sm:gap-8 mb-6 sm:mb-8 lg:mb-10 min-h-[300px] sm:min-h-[340px]">
          <div className="max-w-3xl flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                {/* Kicker Mobile-First */}
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded bg-slate-800/90 text-slate-300 border border-slate-700/80 text-[10px] sm:text-xs font-semibold font-mono uppercase tracking-wider mb-3 sm:mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] shrink-0" />
                  <span className="truncate">{slide.kicker}</span>
                </div>

                {/* Titre Mobile-First (équilibré sur petits écrans 360-400px) */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase font-condensed tracking-tight leading-[0.98] sm:leading-[0.94] text-white text-balance">
                  {slide.titleLine1}<br />
                  <span className="text-white">{slide.titleLine2}</span><br />
                  <span className="text-[#EA580C]">{slide.titleHighlight}</span>
                  <span className="text-white text-xl sm:text-2xl md:text-3xl block mt-1 normal-case font-bold">{slide.titleLine3}</span>
                </h1>

                {/* Description ciblée et lisible */}
                <p className="mt-3 sm:mt-5 text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
                  {slide.description}
                </p>

                {/* Actions du Hero : bouton vers le formulaire de contact et contrôles du carrousel */}
                <div className="mt-4 sm:mt-5 lg:mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
                  <button
                    onClick={() => navigate('contact')}
                    className="px-4 py-2.5 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-lg bg-[#EA580C] hover:bg-[#c2410c] text-white text-xs sm:text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 text-center cursor-pointer shrink-0"
                  >
                    <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span>Discutons de votre projet</span>
                  </button>

                  {/* Contrôles du Slide fluides et discrets */}
                  <div className="flex items-center gap-1 p-0.5 sm:p-1 rounded-lg bg-slate-800/80 border border-slate-700/80 shrink-0">
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                      className="p-1 rounded hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                      aria-label="Slide précédent"
                    >
                      <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </button>

                    <div className="flex items-center gap-1 px-1 sm:px-1.5">
                      {slides.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentSlide(i)}
                          className={`h-1 sm:h-1.5 rounded-full transition-all cursor-pointer ${
                            currentSlide === i ? 'w-3 sm:w-4 bg-white' : 'w-1 sm:w-1.5 bg-slate-600 hover:bg-slate-500'
                          }`}
                          aria-label={`Aller au slide ${i + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                      className="p-1 rounded hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                      aria-label="Slide suivant"
                    >
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 3 Chiffres clés en grille 3 colonnes compacte et percutante dès le mobile */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 py-4 sm:py-6 border-t border-b border-slate-800/80 mb-6 sm:mb-8 backdrop-blur-[2px]">
          <div className="flex flex-col text-center sm:text-left">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-condensed text-white font-mono leading-none">
              7 ans
            </span>
            <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mt-1 leading-tight">
              SANS MAUVAISE SURPRISE
            </span>
          </div>

          <div className="flex flex-col text-center sm:text-left border-l border-slate-800 pl-2 sm:pl-6">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-condensed text-white font-mono leading-none">
              &lt; 24h
            </span>
            <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mt-1 leading-tight">
              PREMIER RETOUR GARANTI
            </span>
          </div>

          <div className="flex flex-col text-center sm:text-left border-l border-slate-800 pl-2 sm:pl-6">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-condensed text-white font-mono leading-none">
              100%
            </span>
            <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mt-1 leading-tight">
              ABIDJAN & INTÉRIEUR
            </span>
          </div>
        </div>

        {/* Découpes Géométriques sobres : défilement fluide ou grille adaptée dès le mobile */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 md:gap-5 items-center justify-items-center">
            {geometricItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => navigate(item.route)}
                className={`w-full aspect-square max-w-[120px] sm:max-w-[150px] md:max-w-[190px] relative group cursor-pointer ${
                  index >= 3 ? 'hidden sm:block' : ''
                }`}
              >
                <div
                  className={`w-full h-full overflow-hidden bg-slate-900 ${item.shapeClass} transition-transform duration-500 group-hover:scale-105 shadow-md border border-slate-800`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115 grayscale-[15%] group-hover:grayscale-0"
                    loading={index < 2 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="mt-1.5 text-center">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-white transition-colors block truncate">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
