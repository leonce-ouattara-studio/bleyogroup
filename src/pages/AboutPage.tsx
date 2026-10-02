import React from 'react';
import { useRouter } from '../context/RouterContext.tsx';
import {
  Award,
  Calendar,
  CheckCircle2,
  Target,
  Compass,
  ArrowRight,
  Quote,
  ShieldCheck,
  MapPin
} from 'lucide-react';
import founderImg from '../assets/images/portrait_dirigeant_guei_1790951367849.jpg';
import constructionImg from '../assets/images/banner_infrastructure_construction_1790951333724.jpg';

export const AboutPage: React.FC = () => {
  const { openQuoteModal } = useRouter();

  const milestones = [
    {
      year: '2019',
      title: 'Genèse & Premiers Travaux Terrain',
      desc: 'Début des interventions de sous-traitance spécialisée dans le raccordement de fibre optique et les petits ouvrages de voirie dans le district d’Abidjan.',
    },
    {
      year: '2021',
      title: 'Extension aux Réseaux Mobiles & VRD',
      desc: 'Acquisition de matériels de soudure haute précision et extension des chantiers au génie civil lourd pour le compte d’opérateurs et de promoteurs.',
    },
    {
      year: '2024',
      title: 'Création Officielle de BLEYO GROUPE SARL',
      desc: 'Immatriculation au Registre du Commerce sous l’IDU : CI-2024-0072706 G. Établissement du siège social à Cocody Riviera-Palmeraie et structuration en deux pôles majeurs.',
    },
    {
      year: 'Aujourd’hui',
      title: 'Partenaire de Référence en Infrastructures Hybrides',
      desc: 'Déploiements d’envergure associant terrassement, voiries réseaux divers et connectivité optique sur l’ensemble du territoire ivoirien.',
    },
  ];

  const values = [
    {
      title: 'QUALITÉ IRRÉPROCHABLE',
      desc: 'Contrôles systématiques à chaque étape d’exécution. Recette contradictoire avec le client avant clôture.',
      icon: Award,
    },
    {
      title: 'RESPECT STRICT DES DÉLAIS',
      desc: 'Notre calendrier est un engagement contractuel ferme. Pas de retards non justifiés, organisation en postes.',
      icon: Calendar,
    },
    {
      title: 'SÉCURITÉ & HSE',
      desc: 'Zéro compromis sur la vie de nos techniciens et des usagers. Équipements de protection normés et balisage rigoureux.',
      icon: ShieldCheck,
    },
    {
      title: 'TRANSPARENCE & INTÉGRITÉ',
      desc: 'Chiffrages détaillés, métrés réels vérifiés et rapports d’avancement hebdomadaires partagés sans fard.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="bg-[#F8FAFC] text-slate-900 pt-20 pb-20">
      {/* En-tête de page sobre */}
      <section className="bg-[#0B1325] text-white py-16 lg:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono text-xs font-semibold uppercase tracking-wider border border-slate-700 inline-block mb-3">
            QUI SOMMES-NOUS ?
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-condensed tracking-tight text-white leading-none">
            CONSTRUIRE AVEC RIGUEUR,<br />
            <span className="text-slate-300">SÉCURISER VOS INFRASTRUCTURES.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
            Créée pour éliminer les retards et les malfaçons dans la construction et les réseaux, BLEYO GROUPE est une société ivoirienne (SARL) spécialisée en Télécommunications, Fibre Optique et Génie Civil.
          </p>
        </div>
      </section>

      {/* 1. Présentation & Vision / Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block font-mono">
              PRÉSENTATION INSTITUTIONNELLE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase font-condensed tracking-tight text-slate-900 leading-tight">
              L'EXCELLENCE OPÉRATIONNELLE AU SERVICE DES INFRASTRUCTURES
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Basée à Abidjan dans la commune de Cocody (Riviera-Palmeraie, Rue Ministre), <strong>BLEYO GROUPE SARL</strong> répond aux exigences croissantes des opérateurs télécoms, des aménageurs fonciers, des collectivités publiques et des promoteurs immobiliers.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Là où d'autres séparent les travaux de voirie du passage des câbles télécoms, BLEYO GROUPE réunit ces deux compétences dans une synergie opérationnelle unique. Nous concevons, creusons, coulons, posons, raccordons et testons vos réseaux sans intermédiaires.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Target className="w-6 h-6 text-slate-800 mb-2" />
                <h4 className="font-bold text-sm uppercase text-slate-900 font-display">Notre Mission</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Fournir des prestations d'ingénierie et de réalisation technique sans compromis sur la qualité, les délais et la sécurité.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Compass className="w-6 h-6 text-slate-800 mb-2" />
                <h4 className="font-bold text-sm uppercase text-slate-900 font-display">Notre Vision</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Devenir le partenaire stratégique de référence pour les infrastructures de connectivité et de génie civil d’ici 2030.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative aspect-[4/3]">
              <img
                src={constructionImg}
                alt="Chantiers BLEYO GROUPE à Abidjan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Abidjan, Cocody Riviera-Palmeraie</span>
                </div>
                <h4 className="text-lg font-bold font-condensed uppercase text-white">
                  Des chantiers maîtrisés de bout en bout
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Histoire (Depuis 2019 à aujourd'hui) */}
      <section className="bg-white py-16 lg:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block font-mono">
              HISTORIQUE & TRAJECTOIRE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase font-condensed tracking-tight text-slate-900 mt-1">
              DEPUIS 2019 : UNE ASCENSION FONDÉE SUR LA FIABILITÉ
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Une progression constante, nourrie par la confiance de nos clients et l'acquisition d'équipements de pointe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="p-6 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black font-condensed text-slate-900 block mb-2 font-mono">
                    {m.year}
                  </span>
                  <h4 className="text-sm font-bold uppercase font-display text-slate-900 leading-tight">
                    {m.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-200 text-[10px] font-mono text-slate-400 uppercase">
                  Étape 0{i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Le Dirigeant : M. GUEI LEON PARFAIT (Sobre) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="rounded-2xl bg-[#0B1325] border-t-2 border-t-[#EA580C] border border-slate-800 text-white p-8 sm:p-12 lg:p-14 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-xl overflow-hidden border border-slate-700 shadow-xl shrink-0 bg-slate-900">
                <img
                  src={founderImg}
                  alt="M. GUEI LEON PARFAIT - Dirigeant BLEYO GROUPE"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono text-xs font-semibold uppercase tracking-wider border border-slate-700 inline-block">
                LEADERSHIP & ENGAGEMENT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase font-condensed tracking-tight text-white leading-tight">
                M. GUEI LEON PARFAIT
              </h2>
              <p className="text-xs font-semibold text-slate-300 font-display uppercase tracking-wider">
                Dirigeant de BLEYO GROUPE SARL
              </p>

              <div className="relative bg-slate-900/80 rounded-xl p-5 border border-slate-800 my-4">
                <Quote className="w-5 h-5 text-slate-500 mb-2" />
                <p className="text-sm text-slate-300 italic leading-relaxed font-normal">
                  « La réputation d’un entrepreneur en Côte d’Ivoire se mesure au respect de sa parole et à la pérennité de ce qu’il construit. Avec BLEYO GROUPE, j’ai voulu créer une maison où chaque promesse technique faite au client est honorée sans défaillance. »
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-1 text-xs text-slate-400">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-mono">Immatriculation</span>
                  <span className="font-bold text-white font-mono">CI-2024-0072706 G</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-mono">Siège</span>
                  <span className="font-medium text-slate-300">Cocody Riviera-Palmeraie</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-mono">Téléphone</span>
                  <span className="font-mono text-slate-200">+225 07 07 07 07 07</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Nos Valeurs Fondamentales */}
      <section className="bg-white py-16 lg:py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block font-mono">
              PRINCIPES D'ACTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase font-condensed tracking-tight text-slate-900 mt-1">
              4 VALEURS NON NÉGOCIABLES SUR NOS CHANTIERS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="p-6 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-slate-300" />
                  </div>
                  <h4 className="text-sm font-bold uppercase font-display text-slate-900">
                    {v.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={openQuoteModal}
              className="px-8 py-3.5 rounded-lg bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>DISCUTER AVEC LA DIRECTION TECHNIQUE</span>
              <ArrowRight className="w-4 h-4 text-[#EA580C]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
