import React from 'react';
import { useRouter } from '../context/RouterContext.tsx';
import {
  Briefcase,
  TrendingUp,
  Building,
  Handshake,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const PartnersPage: React.FC = () => {
  const { openQuoteModal } = useRouter();

  const legalCapacities = [
    {
      id: 'immobilier',
      title: 'ACQUISITION, LOCATION & VENTE IMMOBILIÈRE',
      kicker: 'FONCIER & PATRIMOINE STRATÉGIQUE',
      icon: Building,
      desc: 'Conformément à nos statuts juridiques validés en Côte d’Ivoire, BLEYO GROUPE SARL dispose de la pleine capacité juridique pour acquérir, louer, valoriser et céder des biens meubles et immeubles (parcelles, emprises de télécoms, bâtiments techniques et plateformes d’affaires).',
      applications: [
        'Sécurisation foncière pour l’implantation de pylônes et répartiteurs',
        'Acquisition et aménagement de zones d’activités et lotissements',
        'Mise à disposition et location-gérance d’actifs techniques équipés',
        'Transactions immobilières pour le compte d’investisseurs institutionnels',
      ],
    },
    {
      id: 'financement',
      title: 'CAPACITÉ DE LEVÉE DE FONDS & STRUCTURATION FINANCIÈRE',
      kicker: 'FINANCEMENT DE PROJETS D’ENVERGURE',
      icon: TrendingUp,
      desc: 'Capacité statutaire et bancaire d’emprunter des fonds auprès d’établissements financiers, de mobiliser des garanties sociales et de structurer des montages financiers pour des chantiers d’infrastructures de plusieurs centaines de millions de Francs CFA.',
      applications: [
        'Emprunts bancaires avec mise en garantie d’actifs sociaux certifiés',
        'Préfinancement partiel de chantiers pour opérateurs et maîtres d’ouvrage',
        'Montages en Partenariat Public-Privé (PPP) et délégation de service',
        'Cautions bancaires d’avance de démarrage et de bonne fin d’exécution',
      ],
    },
    {
      id: 'participations',
      title: 'PRISE DE PARTICIPATION & CAPITAL-DÉVELOPPEMENT',
      kicker: 'INVESTISSEMENT & ALLIANCES STRATÉGIQUES',
      icon: Handshake,
      desc: 'Faculté de prendre des participations directes dans des sociétés existantes ou à créer (consortiums, joint-ventures, SPV de projet) pour mutualiser les risques et accélérer les grands programmes d’infrastructures télécoms et BTP en Afrique de l’Ouest.',
      applications: [
        'Création de filiales dédiées par zone géographique ou projet d’envergure',
        'Alliance capitalistique avec des équipementiers et constructeurs internationaux',
        'Synergies technologiques avec des startups de connectivité et d’énergie',
        'Partage de gouvernance transparent sous contrôle d’auditeurs assermentés',
      ],
    },
    {
      id: 'fonds-commerce',
      title: 'GESTION & LOCATION-GÉRANCE DE FONDS DE COMMERCE',
      kicker: 'EXPLOITATION OPÉRATIONNELLE',
      icon: Briefcase,
      desc: 'Aptitude légale à prendre en location-gérance ou à exploiter directement des fonds de commerce dans les secteurs connexes : distribution d’énergie, gestion de réseaux télécoms tiers, maintenance de parcs d’équipements et logistique.',
      applications: [
        'Reprise et redressement d’infrastructures techniques en difficulté',
        'Exploitation déléguée de centres de transit et de distribution',
        'Gestion complète de parcs matériels et flottes de chantier',
        'Contrats d’affermage et d’exploitation commerciale de réseaux',
      ],
    },
  ];

  return (
    <div className="bg-[#F8FAFC] text-slate-900 pt-20 pb-20">
      {/* En-tête sobre Partenaires */}
      <section className="bg-[#0B1325] text-white py-16 lg:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono text-xs font-semibold uppercase tracking-wider border border-slate-700 inline-block mb-3">
            CAPACITÉS JURIDIQUES & FINANCIÈRES ÉTENDUES
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-condensed tracking-tight text-white leading-none">
            PARTENAIRES, INVESTISSEURS<br />
            <span className="text-slate-300">& CO-DÉVELOPPEMENT D'ENVERGURE</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
            Au-delà de son rôle d'exécutant technique de terrain, BLEYO GROUPE SARL dispose de prérogatives statutaires et financières majeures pour porter, financer et co-investir dans des projets structurants en Côte d'Ivoire.
          </p>
        </div>
      </section>

      {/* Détail des 4 Capacités Juridiques et Financières */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-10">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block font-mono">
            OBJET SOCIAL ÉTENDU · IDU: CI-2024-0072706 G
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase font-condensed tracking-tight text-slate-900 mt-1">
            UNE BASE JURIDIQUE SOLIDE POUR DE GRANDS PROGRAMMES
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
            Nos statuts officiels confèrent à BLEYO GROUPE une flexibilité d’intervention unique pour nouer des alliances stratégiques, co-financer des infrastructures et gérer des portefeuilles d'actifs complexes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {legalCapacities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center transition-colors shrink-0">
                      <Icon className="w-5 h-5 text-slate-300" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase font-semibold text-slate-400 tracking-wider block">
                        {item.kicker}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold uppercase font-condensed tracking-tight text-slate-900 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {item.desc}
                  </p>

                  <h5 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2">
                    Applications Stratégiques :
                  </h5>
                  <ul className="space-y-1.5 mb-5">
                    {item.applications.map((app, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-400">Statut Validé RCCM/IDU</span>
                  <button
                    onClick={openQuoteModal}
                    className="font-semibold text-slate-900 hover:text-[#EA580C] uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Proposer une alliance</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#EA580C]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloc Appel aux Investisseurs sobre */}
        <div className="rounded-2xl bg-[#0B1325] border border-slate-800 text-white p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase font-semibold text-slate-400 font-mono tracking-wider block mb-1">
              OPPORTUNITÉS DE CO-INVESTISSEMENT & JOINT-VENTURE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase font-condensed tracking-tight text-white leading-tight">
              VOUS ÊTES UN OPÉRATEUR INTERNATIONAL, UNE BANQUE OU UN INVESTISSEUR PRIVÉ ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-normal">
              BLEYO GROUPE apporte son ancrage local en Côte d'Ivoire, sa maîtrise des procédures réglementaires, sa capacité technique de terrain et ses garanties juridiques pour réussir vos projets d'envergure.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={openQuoteModal}
                className="px-7 py-3 rounded-lg bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>ÉCHANGER AVEC LA DIRECTION</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#EA580C]" />
              </button>
              <a
                href="mailto:contact@bleyogroupe.com?subject=Opportunite%20Partenariat%20BLEYO%20GROUPE"
                className="px-7 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <span>COURRIER OFFICIEL</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
