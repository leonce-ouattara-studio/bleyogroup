import React from 'react';
import { useRouter } from '../context/RouterContext.tsx';
import {
  Award,
  Clock,
  Sparkles,
  Leaf,
  CheckCircle2,
  HardHat
} from 'lucide-react';

export const QualityEngagementsPage: React.FC = () => {
  const { openQuoteModal } = useRouter();

  const pillars = [
    {
      id: 'qualite',
      title: '01. EXCELLENCE & CONTRÔLE QUALITÉ',
      kicker: 'ZÉRO MALFAÇON TOLÉRÉE',
      icon: Award,
      desc: 'La qualité chez BLEYO GROUPE ne commence pas lors de la réception, mais dès l’étude géotechnique et le choix des matériaux. Chaque câble, chaque mètre cube de béton et chaque soudure optique est testé selon des protocoles documentés.',
      points: [
        'Étalonnage régulier de tous les appareils de mesure (soudeuses optiques, réflectomètres OTDR, pénétromètres)',
        'Contrôle contradictoire de compactage du sol et des enrobés avec PV d’essai',
        'Contrôle qualité systématique avant coulage du béton pour radiers et fondations',
        'Dossier des Ouvrages Exécutés (DOE) complet remis au client',
      ],
    },
    {
      id: 'securite',
      title: '02. SÉCURITÉ AU TRAVAIL & DÉMARCHE HSE',
      kicker: 'LA VIE DE NOS COMPAGNONS AVANT TOUT',
      icon: HardHat,
      desc: 'Nos techniciens et ouvriers opèrent souvent sur des pylônes en hauteur ou le long de voies à forte circulation à Abidjan. Notre politique Hygiène, Sécurité et Environnement (HSE) impose le respect strict des standards internationaux.',
      points: [
        'Port obligatoire des EPI (harnais anti-chute certifiés, casques à jugulaire, gilets haute visibilité)',
        'Balisage rigoureux de chaque emprise de chantier pour protéger les usagers et véhicules',
        'Quart d’heure de sécurité quotidien avant toute prise de poste',
        'Zéro accident du travail comme objectif prioritaire permanent',
      ],
    },
    {
      id: 'delais',
      title: '03. RESPECT STRICT DES DÉLAIS CONTRACTUELS',
      kicker: 'LE TEMPS, C’EST LA RENTABILITÉ DE VOTRE PROJET',
      icon: Clock,
      highlight: true, // CARTE MISE EN AVANT SOBRE AVEC LISERÉ
      desc: 'Un retard sur un chantier télécom ou BTP génère des pénalités financières et gèle votre retour sur investissement. Nous contractualisons notre planning et mettons en œuvre les moyens humains et mécaniques pour tenir l’échéance convenue.',
      points: [
        'Planification réaliste basée sur des rendements éprouvés et les saisons météorologiques',
        'Organisation en double poste (2x8 ou 3x8) en cas de phase critique d’intervention',
        'Alerte proactive dès le moindre aléa de terrain avec plan de rattrapage immédiat',
        'Acceptation contractuelle des pénalités de retard en cas de manquement de notre fait',
      ],
    },
    {
      id: 'innovation',
      title: '04. INNOVATION TECHNIQUE & OUTILLAGE MODERNE',
      kicker: 'LES MEILLEURES TECHNOLOGIES DE TERRAIN',
      icon: Sparkles,
      desc: 'Le secteur des télécoms et du BTP évolue vite. Nous investissons constamment dans des équipements modernes pour accélérer les opérations et garantir une précision millimétrique.',
      points: [
        'Détection géo-référencée non destructive des réseaux enterrés avant terrassement',
        'Soudeuses à alignement de cœur haute précision pour les liaisons 5G et FTTX',
        'Guidage laser pour le nivellement de voiries et plateformes industrielles',
        'Suivi de chantier par imagerie aérienne pour des comptes-rendus visuels transparents',
      ],
    },
    {
      id: 'developpement-durable',
      title: '05. DÉVELOPPEMENT DURABLE & ÉCO-RESPONSABILITÉ',
      kicker: 'PRÉSERVER L’ENVIRONNEMENT IVOIRIEN',
      icon: Leaf,
      desc: 'Bâtir durablement, c’est aussi respecter l’environnement et les communautés locales. Nous nous engageons à limiter notre impact carbone et à valoriser les filières responsables.',
      points: [
        'Évacuation et recyclage des déblais de terrassement en centres autorisés',
        'Préférence pour les matériaux locaux conformes (gravillons, sables de carrière certifiés)',
        'Sensibilisation des équipes au tri des déchets de câblage et chutes de cuivre/fibre',
        'Gestion optimisée des écoulements d’eaux pluviales pour éviter l’érosion des sols',
      ],
    },
  ];

  return (
    <div className="bg-[#F8FAFC] text-slate-900 pt-20 pb-20">
      {/* En-tête sobre Engagements */}
      <section className="bg-[#0B1325] text-white py-16 lg:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono text-xs font-semibold uppercase tracking-wider border border-slate-700 inline-block mb-3">
            CHARTE DE CONFIANCE
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-condensed tracking-tight text-white leading-none">
            QUALITÉ, SÉCURITÉ, DÉLAIS<br />
            <span className="text-slate-300">& INNOVATION DURABLE</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
            Chez BLEYO GROUPE, les engagements ne sont pas des slogans publicitaires, mais des clauses contractuelles strictes que nous respectons sur chaque mètre de tranchée et chaque brin de fibre.
          </p>
        </div>
      </section>

      {/* Détail des 5 Piliers d'Engagement sobres */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-8">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block font-mono">
            PILIERS OPÉRATIONNELS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase font-condensed tracking-tight text-slate-900 mt-1">
            DES GARANTIES FORMELLES POUR VOS INVESTISSEMENTS
          </h2>
        </div>

        <div className="space-y-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            const isHighlight = p.highlight;

            return (
              <div
                key={p.id}
                className={`rounded-2xl p-6 sm:p-8 shadow-sm border transition-all ${
                  isHighlight
                    ? 'bg-[#0B1325] text-white border-t-2 border-t-[#EA580C] border-slate-800'
                    : 'bg-white text-slate-900 border-slate-200'
                }`}
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                          isHighlight ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span
                          className={`text-[10px] font-mono font-semibold uppercase tracking-wider ${
                            isHighlight ? 'text-slate-400' : 'text-slate-500'
                          }`}
                        >
                          {p.kicker}
                        </span>
                        <h3
                          className={`text-xl sm:text-2xl font-bold uppercase font-condensed tracking-tight leading-tight ${
                            isHighlight ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {p.title}
                        </h3>
                      </div>
                    </div>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed mb-5 ${
                        isHighlight ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {p.desc}
                    </p>

                    <h4
                      className={`text-xs font-semibold uppercase tracking-widest font-mono mb-2.5 ${
                        isHighlight ? 'text-slate-400' : 'text-slate-400'
                      }`}
                    >
                      MESURES CONCRÈTES SUR LE TERRAIN :
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {p.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                              isHighlight ? 'text-[#EA580C]' : 'text-slate-500'
                            }`}
                          />
                          <span className={isHighlight ? 'text-slate-200' : 'text-slate-700'}>
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`w-full lg:w-64 rounded-xl p-5 shrink-0 border ${
                      isHighlight
                        ? 'bg-slate-900 border-slate-800 text-white'
                        : 'bg-[#F8FAFC] border-slate-200 text-slate-900'
                    }`}
                  >
                    <span className="text-[10px] font-mono uppercase font-semibold text-slate-400 block mb-1">
                      Engagement BLEYO
                    </span>
                    <h5 className="font-bold text-sm uppercase font-display">
                      Contrat Validé
                    </h5>
                    <p className="text-xs mt-1.5 text-slate-400 leading-relaxed font-normal">
                      Chaque chantier fait l'objet d'un engagement signé par M. GUEI LEON PARFAIT.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-7 rounded-2xl bg-[#0B1325] text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm mt-10">
          <div>
            <h4 className="text-xl font-bold uppercase font-condensed tracking-tight text-white">
              Besoin de garanties spécifiques pour votre appel d'offres ?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5 max-w-xl">
              Nous fournissons les attestations techniques, habilitations et fiches de contrôle requises par les bureaux de contrôle et régulateurs.
            </p>
          </div>
          <button
            onClick={openQuoteModal}
            className="px-6 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer shadow-sm active:scale-95"
          >
            Échanger avec notre Responsable Qualité
          </button>
        </div>
      </section>
    </div>
  );
};
