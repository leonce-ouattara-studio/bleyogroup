import React from 'react';
import { useRouter } from '../context/RouterContext.tsx';
import {
  Compass,
  Tractor,
  Route,
  Building,
  Layers,
  Trees,
  Hammer,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const CivilEngineeringPage: React.FC = () => {
  const { openQuoteModal } = useRouter();

  const specialties = [
    {
      id: 'etudes',
      title: 'ÉTUDES & CONCEPTION TECHNIQUE',
      subtitle: 'Calculs de Structure & Préparation de Chantier',
      icon: Compass,
      desc: 'Études géotechniques de sol, notes de calculs BAEL / Eurocodes adaptées aux terrains ivoiriens, dimensionnement de fondations et plans de ferraillage validés.',
      deliverables: ['Études d’avant-projet sommaire et détaillé (APS/APD)', 'Plans de coffrage et de ferraillage', 'Bordereaux quantitatifs et estimatifs précis'],
    },
    {
      id: 'terrassement',
      title: 'TERRASSEMENT DE MASSE & DÉBLAIS / REMBLAIS',
      subtitle: 'Préparation & Nivellement Mécanique',
      icon: Tractor,
      desc: 'Décapage, fouilles en pleine masse, tranchées pour canalisations, nivellement au laser et compactage contrôlé par pénétromètre dynamique.',
      deliverables: ['Terrassement de plateformes logistiques et industrielles', 'Purge de sols instables et substitution d’argiles', 'Gestion et évacuation contrôlée des déblais'],
    },
    {
      id: 'voirie',
      title: 'VOIRIE & CIRCULATION (VRD)',
      subtitle: 'Chaussées Bitumineuses, Pavés & Bordures',
      icon: Route,
      desc: 'Conception et réalisation de voies de circulation urbaines et privées. Pose de bordures T2/T3, caniveaux préfabriqués, enrobés bitumineux à chaud et pavés autobloquants lourds.',
      deliverables: ['Voies d’accès pour programmes immobiliers et zones industrielles', 'Caniveaux de drainage pluvial avec grilles fonte', 'Revêtements en enrobé ou béton balayé haute résistance'],
    },
    {
      id: 'batiments',
      title: 'BÂTIMENTS, LOCAUX TECHNIQUES & OUVRAGES D’ART',
      subtitle: 'Gros Œuvre, Maçonnerie & Radiers Spéciaux',
      icon: Building,
      desc: 'Construction d’ouvrages techniques en béton armé, fondations spéciales pour charges lourdes, locaux techniques étanches et dalots de franchissement.',
      deliverables: ['Radiers béton armé haute densité pour pylônes télécom', 'Bâtiments industriels, entrepôts et clôtures sécurisées', 'Ouvrages de franchissement hydraulique (dalots, buses armées)'],
    },
    {
      id: 'reseaux-divers',
      title: 'RÉSEAUX DIVERS (EAU, ÉLECTRICITÉ, FOURREAUX TÉLÉCOM)',
      subtitle: 'Canalisations Enterrées & Viabilisation Complète',
      icon: Layers,
      desc: 'Pose conjointe de réseaux sous-terrains sans risque d’interférence. Adduction d’eau potable (AEP), assainissement des eaux usées et pose de fourreaux PEHD.',
      deliverables: ['Canalisations d’eau potable et raccordement au réseau public', 'Réseaux d’assainissement avec regards de visite étanches', 'Fourreaux multitubulaires et chambres de tirage intégrées'],
    },
    {
      id: 'amenagement',
      title: 'AMÉNAGEMENT URBAIN & PAYSAGER',
      subtitle: 'Valorisation des Espaces & Espaces Publics',
      icon: Trees,
      desc: 'Aménagement extérieur de lotissements, trottoirs accessibles, parkings sécurisés pour poids lourds et véhicules légers, éclairage public et mobilier urbain.',
      deliverables: ['Aménagement de parvis et parkings en pavés drainants', 'Stabilisation de talus par enrochement ou gabions', 'Murs de soutènement en béton armé ou blocs préfabriqués'],
    },
    {
      id: 'rehabilitation',
      title: 'RÉNOVATION & RÉHABILITATION D’INFRASTRUCTURES',
      subtitle: 'Remise aux Normes & Confortement',
      icon: Hammer,
      desc: 'Reprise en sous-œuvre de structures fissurées, réfection complète de voiries dégradées par les pluies et modernisation de bâtiments industriels existants.',
      deliverables: ['Injection de coulis de ciment et reprise de fondations', 'Fraisage et rechargement de chaussées bitumineuses', 'Étanchéité de toitures et réfection de caniveaux effondrés'],
    },
  ];

  return (
    <div className="bg-[#F8FAFC] text-slate-900 pt-20 pb-20">
      {/* En-tête sobre BTP */}
      <section className="bg-[#0B1325] text-white py-16 lg:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono text-xs font-semibold uppercase tracking-wider border border-slate-700 inline-block mb-3">
            PÔLE 02 · GÉNIE CIVIL & BTP
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-condensed tracking-tight text-white leading-none">
            TERRASSEMENT, VOIRIES (VRD)<br />
            <span className="text-slate-300">& OUVRAGES DE GÉNIE CIVIL</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
            « Construire aujourd'hui les infrastructures de demain ». Des ouvrages d'art et des chaussées durables, calibrés pour résister aux contraintes géotechniques et climatiques de la Côte d'Ivoire.
          </p>
        </div>
      </section>

      {/* Détail des 7 Spécialités BTP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-8">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block font-mono">
            CHAMP D'INTERVENTION BTP
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase font-condensed tracking-tight text-slate-900 mt-1">
            DES ÉTUDES DE SOL À LA RESTITUTION DE CHAUSSÉE
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Grâce à notre parc matériel et à la rigueur de nos conducteurs de travaux, vos chantiers sont menés dans les règles de l'art sans dépassement budgétaire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialties.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                id={s.id}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-slate-300" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-semibold uppercase text-slate-400">
                        {s.subtitle}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold uppercase font-condensed tracking-tight text-slate-900 leading-tight">
                        {s.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                    {s.desc}
                  </p>

                  <h5 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2">
                    Livrables & Prestations Incluses :
                  </h5>
                  <ul className="space-y-1.5 mb-5">
                    {s.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">Normes BNETD</span>
                  <button
                    onClick={openQuoteModal}
                    className="text-xs font-semibold uppercase text-slate-900 hover:text-[#EA580C] transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Consulter</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#EA580C]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Appel à projet Génie Civil sobre */}
      <section className="bg-[#0B1325] text-white py-14 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black uppercase font-condensed tracking-tight text-white">
            VOUS AVEZ UN PROJET DE VOIRIE OU DE CONSTRUCTION ?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl mx-auto font-normal">
            Contactez notre bureau d'études pour un métré sur plan ou une visite préalable sur site à Abidjan.
          </p>
          <button
            onClick={openQuoteModal}
            className="mt-6 px-8 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>DEMANDER UNE ÉTUDE BTP</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#EA580C]" />
          </button>
        </div>
      </section>
    </div>
  );
};
