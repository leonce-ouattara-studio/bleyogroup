import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext.tsx';
import {
  MapPin,
  Check,
  X,
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types/index.ts';

import constructionImg from '../assets/images/banner_infrastructure_construction_1790951333724.jpg';
import telecomFiberImg from '../assets/images/hero_telecom_fiber_1790951355102.jpg';
import civilEngImg from '../assets/images/hero_civil_engineering_1790951381954.jpg';
import craneImg from '../assets/images/hero_crane_telecom_1790951397717.jpg';

export const RealisationsPage: React.FC = () => {
  const { openQuoteModal } = useRouter();
  const [filter, setFilter] = useState<'all' | 'telecom' | 'fibre' | 'genie-civil' | 'vrd'>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'vrd-telecom-abidjan',
      title: 'VIABILISATION VRD & FOURREAUX TÉLÉCOMS',
      category: 'vrd',
      categoryLabel: 'VRD & Télécoms',
      location: 'Abidjan, Zone Périurbaine',
      year: '2024',
      image: constructionImg,
      tagline: 'Adduction de 3 200 m de fourreaux PEHD sans rupture de trafic',
      clientChallenge:
        'Le promoteur devait livrer un lotissement résidentiel sous 60 jours sans que les travaux de voirie n’endommagent les conduites d’eau et les câbles électriques existants.',
      bleyosolution:
        'Détection géo-référencée préalable des réseaux, terrassement mécanique avec blindage de fouilles et pose simultanée des fourreaux de télécommunication sous caniveau technique.',
      measurableResult:
        'Chantier livré avec 8 jours d’avance sur le calendrier contractuel, réceptionné sans aucune réserve par les services techniques municipaux.',
      technicalSpecs: [
        '3 200 mètres linéaires de tranchées et fourreaux PEHD 3x40mm',
        '24 chambres de tirage étanches en béton armé type L2T',
        'Reprise complète de la chaussée en enrobé bitumineux à chaud',
        'Validation contradictoire par réflectométrie après pose',
      ],
    },
    {
      id: 'backbone-optique-cocody',
      title: 'DÉPLOIEMENT FIBRE OPTIQUE COCODY RIVIERA',
      category: 'fibre',
      categoryLabel: 'Fibre Optique FTTX',
      location: 'Cocody, Riviera-Palmeraie',
      year: '2024',
      image: telecomFiberImg,
      tagline: 'Raccordement de 48 immeubles d’affaires avec affaiblissement minimal',
      clientChallenge:
        'Un fournisseur d’accès internet réclamait un déploiement urgent pour des entreprises clientes exigeant un débit garanti sans coupure.',
      bleyosolution:
        'Mobilisation de 3 équipes d’épissurage en parallèle équipées de soudeuses à alignement cœur à cœur. Contrôle systématique par réflectométrie OTDR.',
      measurableResult:
        'Affaiblissement moyen certifié inférieur à 0.07 dB par point de soudure. Zéro paquet perdu en test de charge.',
      technicalSpecs: [
        'Tirage souterrain en conduite de 18 km de câble 72 brins',
        '96 têtes de câble optiques montées en baies ventilées',
        'Cahier de recette complet remis au FAI sous format PDF/Excel',
        'Garantie d’intervention sous 2h en astreinte',
      ],
    },
    {
      id: 'radiers-pylones-5g',
      title: 'STABILISATION & RADIERS POUR PYLÔNES 5G',
      category: 'genie-civil',
      categoryLabel: 'Génie Civil Spécialisé',
      location: 'Zone Industrielle d’Abidjan',
      year: '2024',
      image: civilEngImg,
      tagline: 'Fondations spéciales pour mât lourd de 45 mètres en sol meuble',
      clientChallenge:
        'Implantation d’une station de base sur un sol sablo-argileux à faible portance avec risque d’affaissement différentiel.',
      bleyosolution:
        'Étude de sol pressiométrique, substitution du sol sur 1.50m et coulage d’un radier général nervuré en béton armé dosé à 350 kg/m³.',
      measurableResult:
        'Tassement mesuré nul après mise en charge complète du pylône et des antennes radio.',
      technicalSpecs: [
        'Radier béton armé de 8m x 8m x 1.20m coulé en une seule passe',
        'Ferraillage en acier haute adhérence traité anticorrosion',
        'Puits de terre interconnecté garantissant une résistance < 3 ohms',
        'Clôture grillagée de sécurité avec portail blindé',
      ],
    },
    {
      id: 'swap-antennes-telecom',
      title: 'RÉNOVATION & SWAP DE SITES MOBILES',
      category: 'telecom',
      categoryLabel: 'Réseaux Mobiles',
      location: 'Grand Abidjan & Intérieur',
      year: '2024',
      image: craneImg,
      tagline: 'Modernisation de 14 sites radio sans interruption de communication',
      clientChallenge:
        'Remplacer les anciennes baies radio 2G/3G par des équipements multi-bandes 4G/5G en maintenant le service actif pour les abonnés.',
      bleyosolution:
        'Interventions de nuit programmées en période d’heures creuses avec mise en place préalable des liaisons de dérivation.',
      measurableResult:
        '14 sites modernisés en 3 semaines sans aucune coupure constatée par les abonnés de la zone.',
      technicalSpecs: [
        'Remplacement d’antennes tri-bandes par des antennes actives MIMO',
        'Remplacement des jarretières coaxiales et pose de câbles hybrides fibre/énergie',
        'Tests de calibration d’angles et mesures de diagramme de rayonnement',
        'Rapport de recette et PV de conformité opérateur',
      ],
    },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-[#F8FAFC] text-slate-900 pt-20 pb-20">
      {/* En-tête sobre Réalisations */}
      <section className="bg-[#0B1325] text-white py-16 lg:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono text-xs font-semibold uppercase tracking-wider border border-slate-700 inline-block mb-3">
            PORTFOLIO OPÉRATIONNEL
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-condensed tracking-tight text-white leading-none">
            GALERIE DE CHANTIERS<br />
            <span className="text-slate-300">& FICHES PROJETS RÉALISÉES</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
            Consultez nos références techniques en Côte d'Ivoire : le problème initial posé par le maître d’ouvrage, l'approche technique déployée par BLEYO GROUPE et les résultats concrets mesurés.
          </p>
        </div>
      </section>

      {/* Galerie & Filtres sobres */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Barre de filtrage sobre */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span>FILTRER PAR SECTEUR :</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Tous' },
              { id: 'telecom', label: 'Réseaux Mobiles' },
              { id: 'fibre', label: 'Fibre Optique FTTX' },
              { id: 'genie-civil', label: 'Génie Civil' },
              { id: 'vrd', label: 'VRD & Voirie' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des Fiches Projets sobres */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded bg-slate-900/90 text-slate-200 text-[10px] font-bold uppercase tracking-wider font-mono border border-slate-700">
                      {p.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 text-xs text-slate-300 font-mono mb-1">
                      <MapPin className="w-3 h-3 text-[#EA580C]" />
                      <span>{p.location}</span>
                      <span>·</span>
                      <span>{p.year}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase font-condensed tracking-tight text-white leading-tight">
                      {p.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-3.5">
                  <p className="text-xs text-slate-600 italic">
                    « {p.tagline} »
                  </p>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-semibold text-slate-500 uppercase block text-[10px] font-mono mb-0.5">
                      Défi du client :
                    </span>
                    <p className="text-slate-700 leading-relaxed font-normal">{p.clientChallenge}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-semibold text-slate-900 uppercase block text-[10px] font-mono mb-0.5">
                      Résultat garanti :
                    </span>
                    <p className="text-slate-800 leading-relaxed font-medium">{p.measurableResult}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(p)}
                  className="text-xs font-semibold uppercase text-slate-900 hover:text-[#EA580C] transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Fiche technique</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#EA580C]" />
                </button>

                <button
                  onClick={openQuoteModal}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-900 text-white text-[11px] font-semibold uppercase tracking-wider hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Projet similaire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Détails Fiche Projet sobre */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto text-white shadow-2xl relative"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors z-20 cursor-pointer"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200 text-[10px] font-bold uppercase tracking-wider font-mono">
                    {activeProject.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-black uppercase font-condensed tracking-tight text-white">
                  {activeProject.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  {activeProject.location} · Réalisé en {activeProject.year}
                </p>

                <div className="mt-5 space-y-3">
                  <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-xs font-semibold uppercase text-slate-400 font-mono block mb-1">
                      Le Problème Initial :
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {activeProject.clientChallenge}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-xs font-semibold uppercase text-slate-400 font-mono block mb-1">
                      La Solution BLEYO GROUPE :
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {activeProject.bleyosolution}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-xs font-semibold uppercase text-slate-400 font-mono block mb-1">
                      Le Résultat Mesurable :
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed font-normal">
                      {activeProject.measurableResult}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-800">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3 font-mono">
                    SPÉCIFICATIONS TECHNIQUES EXÉCUTÉES :
                  </h4>
                  <ul className="space-y-2">
                    {activeProject.technicalSpecs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Besoin d'une exécution similaire ?
                  </span>
                  <button
                    onClick={() => {
                      setActiveProject(null);
                      openQuoteModal();
                    }}
                    className="px-6 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Demander une Étude
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
