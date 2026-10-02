import React from 'react';
import { useRouter } from '../context/RouterContext.tsx';
import {
  Radio,
  Wifi,
  Network,
  Wrench,
  Server,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const TelecomPage: React.FC = () => {
  const { openQuoteModal } = useRouter();

  const services = [
    {
      id: 'reseaux-mobiles',
      title: 'RÉSEAUX MOBILES (2G, 3G, 4G, 5G)',
      subtitle: 'Installation, Swap & Intégration Radio',
      icon: Radio,
      desc: 'Déploiement complet de sites radio cellulaires pour les opérateurs mobiles. Pose d’antennes panneau et directives, raccordement feeder coaxial, intégration de BBU/RRU et mise en service conforme aux normes 3GPP.',
      capabilities: [
        'Installation et orientation précise d’antennes (tilt mécanique et électrique)',
        'Câblage coaxial, pose de connecteurs et tests VSWR / PIM certifiés',
        'Intégration d’équipements radio Huawei, Ericsson, Nokia ou ZTE',
        'Montage sur pylônes autoportants, haubanés et terrasses d’immeubles',
      ],
    },
    {
      id: 'fibre-optique',
      title: 'DÉPLOIEMENT DE FIBRE OPTIQUE (FTTX & BACKBONE)',
      subtitle: 'Tirage, Soudure par Fusion & Recette OTDR',
      icon: Wifi,
      desc: 'Réalisation clé en main de réseaux optiques métropolitains et inter-urbains. Tirage souterrain et aérien, épissurage haute précision au microscope thermique et certification de chaque liaison.',
      capabilities: [
        'Tirage et soufflage de câbles à fibres optiques (de 12 à 288 brins)',
        'Soudure par fusion thermique avec affaiblissement garanti < 0.08 dB',
        'Mesures de réflectométrie optique bidirectionnelle (OTDR) et photométrie',
        'Raccordement FTTX d’immeubles, points de mutualisation et répartiteurs',
      ],
    },
    {
      id: 'lan-wan',
      title: 'RÉSEAUX INFORMATIQUES D’ENTREPRISE (LAN / WAN)',
      subtitle: 'Câblage Structuré & Continuité d’Activité',
      icon: Network,
      desc: 'Conception et rénovation de l’infrastructure réseau des entreprises, banques, hôpitaux et sièges sociaux. Câblage Cat 6A / 7 / Fibre, baies de brassage climatisées et sécurisation des flux.',
      capabilities: [
        'Câblage structuré cuivre et rocade optique intra-bâtiment',
        'Fourniture et aménagement de baies informatiques étiquetées et rangées',
        'Mise en place de routeurs, commutateurs manageables et liaisons redondantes',
        'Certification Fluke Networks avec remise des fiches de tests individuelles',
      ],
    },
    {
      id: 'infrastructures',
      title: 'INFRASTRUCTURES TÉLÉCOMS LOURDES',
      subtitle: 'Pylônes, Shelters & Énergie Secourue',
      icon: Server,
      desc: 'Construction et aménagement de l’environnement technique d’un site télécom : génie civil d’accueil, montage de tours métalliques, shelters climatisés, clôtures de sécurité et groupes électrogènes de secours.',
      capabilities: [
        'Fondations et radiers spéciaux pour pylônes jusqu’à 60 mètres',
        'Montage et haubanage dans le respect des règles de sécurité au travail',
        'Alimentation électrique, inverseurs de source et onduleurs industriels',
        'Systèmes de mise à la terre (parafoudre, boucle de terre < 5 ohms)',
      ],
    },
    {
      id: 'maintenance',
      title: 'MAINTENANCE & ASTREINTE TECHNIQUE 24/7',
      subtitle: 'Contrats Préventifs & Rétablissement d’Urgence',
      icon: Wrench,
      desc: 'Maintien en conditions opérationnelles des infrastructures de communication. Visites d’inspection régulières, contrôle des bilans optiques et intervention d’urgence sous délai garanti en cas d’arrachement de câble.',
      capabilities: [
        'Contrôle préventif trimestriel des liaisons et équipements d’énergie',
        'Astreinte technique 24h/24 et 7j/7 pour opérateurs et FAI à Abidjan',
        'Réparation express sur fibre optique sectionnée (localisation par réflectométrie)',
        'Rapports d’audit technique détaillés pour vos directions des opérations',
      ],
    },
  ];

  return (
    <div className="bg-[#F8FAFC] text-slate-900 pt-20 pb-20">
      {/* En-tête sobre Télécoms */}
      <section className="bg-[#0B1325] text-white py-16 lg:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono text-xs font-semibold uppercase tracking-wider border border-slate-700 inline-block mb-3">
            PÔLE 01 · TÉLÉCOMMUNICATIONS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-condensed tracking-tight text-white leading-none">
            RÉSEAUX MOBILES, FIBRE OPTIQUE<br />
            <span className="text-slate-300">& INFRASTRUCTURES TÉLÉCOMS</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
            « Des solutions connectées pour un monde plus proche ». BLEYO GROUPE garantit à ses clients une transmission de signal sans coupure et une recette technique conforme aux exigences les plus sévères.
          </p>
        </div>
      </section>

      {/* Détail des 5 Spécialités Télécoms */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-8">
        {services.map((s) => {
          const Icon = s.icon;

          return (
            <div
              key={s.id}
              id={s.id}
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm p-6 sm:p-8 lg:p-10 transition-all hover:shadow-md"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-slate-300" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 font-mono">
                        {s.subtitle}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black uppercase font-condensed tracking-tight text-slate-900 leading-tight">
                        {s.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {s.desc}
                  </p>

                  <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 font-mono mb-2.5">
                    COMPÉTENCES OPÉRATIONNELLES DÉPLOYÉES :
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.capabilities.map((c, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full lg:w-72 bg-[#F8FAFC] border border-slate-200 rounded-xl p-5 shrink-0 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-semibold text-slate-400 block mb-1">
                      Engagement BLEYO
                    </span>
                    <h5 className="font-bold text-sm uppercase text-slate-900 font-display">
                      Zéro Défaut de Recette
                    </h5>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-normal">
                      Rapport contradictoire et PV de réception technique remis à votre maître d’ouvrage.
                    </p>
                  </div>

                  <button
                    onClick={openQuoteModal}
                    className="mt-5 w-full py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Chiffrer ce service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#EA580C]" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Appel à l'action Télécom sobre */}
      <section className="bg-[#0B1325] text-white py-14 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black uppercase font-condensed tracking-tight text-white">
            UN DÉPLOIEMENT TÉLÉCOM À PLANIFIER EN CÔTE D'IVOIRE ?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl mx-auto font-normal">
            Nos ingénieurs réseau étudient vos tracés de fibre optique ou vos contraintes de couverture radio sous 48 heures.
          </p>
          <button
            onClick={openQuoteModal}
            className="mt-6 px-8 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>DEMANDER UNE ÉTUDE TÉLÉCOM</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#EA580C]" />
          </button>
        </div>
      </section>
    </div>
  );
};
