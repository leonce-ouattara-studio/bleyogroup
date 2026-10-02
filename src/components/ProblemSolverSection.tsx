import React, { useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Radio,
  Building,
  Briefcase,
  Landmark
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProblemSolverSectionProps {
  onOpenQuote: () => void;
}

export const ProblemSolverSection: React.FC<ProblemSolverSectionProps> = ({ onOpenQuote }) => {
  const [selectedProfile, setSelectedProfile] = useState<number>(0);

  const profiles = [
    {
      id: 0,
      title: 'Opérateurs Télécoms & FAI',
      icon: Radio,
      badge: 'Connectivité & Réseaux',
      problemSummary: 'Pertes optiques, soudures bâclées et non-respect des SLA de déploiement.',
      problemDetails:
        'Vos sous-traitants actuels accumulent les retards sur les tirages de câbles, livrent des soudures à plus de 0.3 dB de perte et vous obligent à ré-intervenir à vos frais en pleine exploitation.',
      bleySolution:
        'BLEYO GROUPE déploie des techniciens équipés de soudeuses par fusion de pointe et de réflectomètres OTDR étalonnés. Chaque brin est certifié avec cahier de recette conforme aux normes UIT-T.',
      guarantees: [
        'Affaiblissement optique certifié < 0.1 dB par raccordement',
        'Respect contractuel des dates de mise en service (SLA)',
        'Équipes d’astreinte pour rétablissement rapide en cas de coupure',
      ],
      ctaText: 'Résoudre mes problèmes de déploiement réseau',
    },
    {
      id: 1,
      title: 'Promoteurs Immobiliers & BTP',
      icon: Building,
      badge: 'VRD & Livraison Programme',
      problemSummary: 'Casser le bitume déjà posé parce que les fourreaux télécoms ont été oubliés ou écrasés.',
      problemDetails:
        'Le conflit perpétuel entre terrassiers et techniciens télécoms retarde la livraison de vos immeubles et villas, générant des pénalités de retard et la colère de vos acquéreurs.',
      bleySolution:
        'BLEYO GROUPE maîtrise les deux métiers : nos équipes de génie civil intègrent directement les fourreaux télécoms et chambres de tirage durant le terrassement. Une coordination sans faille et une seule facture.',
      guarantees: [
        'Zéro tranchée destructrice sur chaussée neuve',
        'Livraison des programmes immobiliers 100% connectés à date',
        'Interlocuteur unique du terrassement au raccordement fibre',
      ],
      ctaText: 'Sécuriser le calendrier de mon programme immobilier',
    },
    {
      id: 2,
      title: 'Entreprises, Banques & Sièges',
      icon: Briefcase,
      badge: 'Continuité d’Activité',
      problemSummary: 'Coupures internet régulières, câblage réseau vétuste et lenteurs qui paralysent les équipes.',
      problemDetails:
        'Une baie de brassage mal ventilée, des câbles non étiquetés et des liens instables coûtent des millions de Francs CFA en temps de travail perdu et en insatisfaction client.',
      bleySolution:
        'Audit technique complet de votre infrastructure, réfection de votre réseau LAN/WAN aux normes Cat 6A / Fibre, installation d’un lien redondant et maintien en conditions opérationnelles.',
      guarantees: [
        'Architecture réseau redondante sans point de rupture unique',
        'Intervention sous 2h en cas d’incident critique à Abidjan',
        'Documentation claire et plan d’adressage remis à votre DSI',
      ],
      ctaText: 'Auditer et fiabiliser le réseau de mon entreprise',
    },
    {
      id: 3,
      title: 'Maîtres d’Ouvrage & Collectivités',
      icon: Landmark,
      badge: 'Ouvrages Publics Durables',
      problemSummary: 'Voiries qui se dégradent aux premières pluies et surcoûts imprévus en cours de chantier.',
      problemDetails:
        'Mauvaise gestion des eaux de ruissellement, fondations sous-dimensionnées et devis initiaux sous-évalués qui explosent de +30% au premier imprévu.',
      bleySolution:
        'Études techniques d’avant-projet poussées, dimensionnement hydraulique adapté aux fortes pluies tropicales d’Abidjan et engagement ferme sur le devis sans surprise financière.',
      guarantees: [
        'Matériaux testés et conformes aux normes du BNETD',
        'Canalisations et ouvrages d’art calibrés pour résister aux crues',
        'Transparence budgétaire totale validée par la Direction',
      ],
      ctaText: 'Lancer un chantier de génie civil sécurisé',
    },
  ];

  const current = profiles[selectedProfile];

  return (
    <section className="bg-[#0B1325] text-white py-20 lg:py-28 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête sobre */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block font-mono">
            DIAGNOSTIC & RÉSOLUTION DE PROBLÈMES
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-condensed tracking-tight text-white mt-2 leading-[0.95]">
            QUEL EST LE BLOCAGE MAJEUR<br />
            <span className="text-slate-300">SUR VOS CHANTIERS ACTUELS ?</span>
          </h2>
          <p className="text-sm text-slate-400 mt-3 font-normal leading-relaxed">
            Sélectionnez votre profil d'activité pour découvrir la réponse technique que BLEYO GROUPE apporte à vos contraintes de terrain.
          </p>
        </div>

        {/* 4 Boutons Sélecteurs sobres */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {profiles.map((p, idx) => {
            const Icon = p.icon;
            const isSelected = selectedProfile === idx;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedProfile(idx)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-slate-800 border-slate-500 text-white shadow-md'
                    : 'bg-slate-900/80 hover:bg-slate-800/60 border-slate-800 text-slate-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        isSelected ? 'bg-white text-slate-900' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                        isSelected ? 'bg-slate-700 text-white' : 'text-slate-500'
                      }`}
                    >
                      Profil 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold uppercase font-condensed tracking-tight text-white leading-tight">
                    {p.title}
                  </h4>
                </div>
                <p className="text-[11px] text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {p.problemSummary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Panneau sobre de confrontation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Colonne Gauche : Le Problème (sobre, fond ardoise foncé avec fine bordure) */}
              <div className="lg:col-span-6 bg-slate-950/80 border border-slate-800 rounded-xl p-6 relative">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider font-mono mb-3">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Risque constaté sur le terrain</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold uppercase font-condensed tracking-tight text-white mb-3">
                  {current.problemSummary}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {current.problemDetails}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                  Conséquences : pénalités de retard, surcoûts et mise en demeure.
                </div>
              </div>

              {/* Colonne Droite : La Solution BLEYO (sobre, fond ardoise et accent épuré) */}
              <div className="lg:col-span-6 bg-[#0B1325] border border-slate-800 rounded-xl p-6 relative">
                <div className="flex items-center gap-2 text-slate-300 text-xs font-semibold uppercase tracking-wider font-mono mb-3">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Réponse technique BLEYO GROUPE</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold uppercase font-condensed tracking-tight text-white mb-3">
                  Comment nous sécurisons votre projet
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                  {current.bleySolution}
                </p>

                <div className="space-y-2 mb-6">
                  {current.guarantees.map((g, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] shrink-0 mt-1.5" />
                      <span className="font-medium text-slate-200">{g}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onOpenQuote}
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 group"
                >
                  <span>{current.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#EA580C] transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
