import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Images d'accompagnement haute fidélité
import telecomFiberImg from '../assets/images/hero_telecom_fiber_1790951355102.jpg';
import civilEngImg from '../assets/images/hero_civil_engineering_1790951381954.jpg';
import craneImg from '../assets/images/hero_crane_telecom_1790951397717.jpg';

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
  scope: string[];
}

interface ProjectsShowcaseProps {
  onOpenQuote: () => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onOpenQuote }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'telecom-abidjan',
      title: 'Installation réseau — Abidjan',
      category: 'TÉLÉCOM',
      location: 'Abidjan',
      year: '2024',
      image: telecomFiberImg,
      description: "Déploiement d'équipements pour un opérateur télécom local.",
      scope: [
        "Installation d'antennes radio et faisceaux hertziens",
        'Tirage et soudure de liaisons fibre optique',
        'Contrôle qualité et certification des bilans de liaison',
        'Mise en service sans interruption de trafic pour les abonnés',
      ],
    },
    {
      id: 'btp-interieur',
      title: 'Chantier BTP — Intérieur du pays',
      category: 'GÉNIE CIVIL',
      location: 'Intérieur du pays',
      year: '2024',
      image: civilEngImg,
      description: 'Travaux de construction et de voirie pour un client institutionnel.',
      scope: [
        'Terrassement de masse et nivellement laser',
        'Voiries et réseaux divers (VRD) étanches',
        'Caniveaux et ouvrages d’assainissement pluvial',
        'Réception contradictoire aux normes BNETD',
      ],
    },
    {
      id: 'solaire-industriel',
      title: 'Solution solaire — Site industriel',
      category: 'ÉNERGIE',
      location: 'Zone industrielle',
      year: '2024',
      image: craneImg,
      description: "Installation d'une solution d'énergie solaire pour sécuriser un site.",
      scope: [
        'Dimensionnement des besoins énergétiques de secours',
        'Pose de panneaux photovoltaïques et onduleurs hybrides',
        'Sécurisation des armoires de distribution et mise à la terre',
        'Contrat de maintenance préventive et suivi de production',
      ],
    },
  ];

  const mainProject = projects[0];
  const secondaryProjects = projects.slice(1);

  return (
    <section id="projets" className="bg-[#0B1325] text-white py-20 lg:py-28 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Entête conforme au PDF : Page 5 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block font-mono">
              RÉALISATIONS
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-condensed tracking-tight text-white mt-2">
              NOS CHANTIERS EN IMAGES
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
              Les photos de vos réalisations viendront remplacer ces espaces réservés.
            </p>
          </div>

          <div className="hidden lg:block select-none opacity-10">
            <span className="text-8xl font-black font-condensed tracking-tighter text-white">
              CHANTIERS
            </span>
          </div>
        </div>

        {/* Grille Principale */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Grande Carte Principale Gauche */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-lg flex-1 flex flex-col justify-end min-h-[460px] sm:min-h-[520px] p-6 sm:p-10 group">
              <div className="absolute inset-0 z-0">
                <img
                  src={mainProject.image}
                  alt={mainProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              </div>

              {/* Bouton Circulaire Sobre "VOIR CHANTIER" */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <button
                  onClick={() => setSelectedProject(mainProject)}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-900/90 border border-slate-700 hover:border-slate-500 text-white transition-all duration-300 shadow-xl flex flex-col items-center justify-center p-3 cursor-pointer group/btn transform hover:scale-105 active:scale-95 backdrop-blur-sm"
                  aria-label="Voir le chantier"
                >
                  <ArrowUpRight className="w-4 h-4 text-[#EA580C] mb-1" />
                  <span className="text-[10px] font-bold uppercase font-condensed tracking-wider text-center leading-tight text-slate-200">
                    VOIR LE<br />CHANTIER
                  </span>
                </button>
              </div>

              {/* Textes en bas de carte */}
              <div className="relative z-10 pt-16">
                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-slate-800 text-white font-bold border border-slate-700">
                    {mainProject.category}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>{mainProject.location}</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase font-condensed tracking-tight text-white group-hover:text-slate-200 transition-colors">
                  {mainProject.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-2 font-normal leading-relaxed max-w-lg">
                  {mainProject.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cartes Secondaires Empilées à Droite */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            {secondaryProjects.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                onClick={() => setSelectedProject(p)}
                className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-md p-6 flex flex-col justify-end min-h-[210px] sm:min-h-[230px] group cursor-pointer hover:border-slate-700 transition-all"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-65"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                </div>

                <div className="absolute top-5 right-5 z-10 w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 text-white flex items-center justify-center transition-all group-hover:scale-105">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#EA580C]" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono mb-1">
                    <span className="font-bold text-white px-2 py-0.5 rounded bg-slate-800/90 border border-slate-700">
                      {p.category}
                    </span>
                    <span>·</span>
                    <span>{p.location}</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold uppercase font-condensed tracking-tight text-white group-hover:text-slate-200 transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 font-normal line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Carte Consultation Rapide */}
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div>
                <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider font-mono">
                  ASSISTANCE TECHNIQUE
                </span>
                <h4 className="text-base font-bold uppercase font-condensed tracking-tight text-white mt-0.5">
                  UN PROJET SIMILAIRE À DÉMARRER ?
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Parlez-en directement à notre équipe technique.
                </p>
              </div>
              <button
                onClick={onOpenQuote}
                className="px-5 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer shadow-sm"
              >
                Parler à BLEYO GROUPE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Détails Sobre */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto text-white shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors z-20 cursor-pointer"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200 text-[10px] font-bold uppercase tracking-wider font-mono">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-black uppercase font-condensed tracking-tight text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 font-normal">
                  {selectedProject.description}
                </p>

                <div className="mt-6 pt-5 border-t border-slate-800">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3 font-mono">
                    PÉRIMÈTRE DE L'INTERVENTION :
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.scope.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    Besoin d'un chiffrage pour un projet semblable ?
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenQuote();
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Demander une Étude
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
