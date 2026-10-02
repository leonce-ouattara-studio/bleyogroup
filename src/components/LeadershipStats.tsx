import React from 'react';
import { Building2, Layers, ShieldCheck, Quote, Award } from 'lucide-react';
import { motion } from 'motion/react';
import founderImg from '../assets/images/portrait_dirigeant_guei_1790951367849.jpg';

export const LeadershipStats: React.FC = () => {
  const statsRows = [
    {
      id: 1,
      icon: Building2,
      title: 'ZÉRO CONFLIT ENTRE MÉTIERS',
      subtitle: 'Une seule équipe pilote le terrassement VRD et le tirage des réseaux télécoms',
      metric: '01',
      metricLabel: 'Partenaire Unique',
    },
    {
      id: 2,
      icon: Layers,
      title: 'CONFORMITÉ & QUALITÉ DE RÉCEPTION',
      subtitle: 'Recette technique sans réserve aux normes internationales et ivoiriennes (ARTCI/BNETD)',
      metric: '100%',
      metricLabel: 'Chantiers Conformes',
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: 'GARANTIES CONTRACTUELLES STRICTES',
      subtitle: 'Respect des délais, transparence budgétaire et sécurité totale des équipes',
      metric: '05',
      metricLabel: 'Piliers de Confiance',
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Colonne Gauche : Carte Sobre du Dirigeant M. GUEI LEON PARFAIT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative rounded-2xl bg-[#0B1325] border-t-2 border-t-[#EA580C] border border-slate-800 text-white p-6 sm:p-8 flex-1 flex flex-col justify-between overflow-hidden shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-300 font-mono">
                    DIRECTION GÉNÉRALE
                  </span>
                  <Award className="w-4 h-4 text-slate-400" />
                </div>

                <div className="flex items-center gap-5 mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-slate-700 shadow-md shrink-0 bg-slate-900">
                    <img
                      src={founderImg}
                      alt="M. GUEI LEON PARFAIT - Dirigeant de BLEYO GROUPE"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase font-condensed tracking-tight text-white leading-none">
                      M. GUEI LEON PARFAIT
                    </h3>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1.5 font-display">
                      Dirigeant de BLEYO GROUPE
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1 font-mono">
                      SARL · Abidjan Cocody
                    </p>
                  </div>
                </div>

                <div className="relative bg-slate-900/80 rounded-xl p-4 sm:p-5 border border-slate-800">
                  <Quote className="w-5 h-5 text-slate-500 mb-2" />
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                    « Trop de projets en Côte d’Ivoire s’enlisent à cause de prestataires qui ne tiennent pas leurs promesses. Chez BLEYO GROUPE, notre engagement est clair : nous protégeons vos investissements en livrant des infrastructures fiables, à la date exacte convenue. »
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Immatriculation légale IDU</span>
                <span className="font-mono text-white font-bold">CI-2024-0072706 G</span>
              </div>
            </div>
          </motion.div>

          {/* Colonne Droite : 3 Rangées Horizontales sobres */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-4 sm:gap-5">
            <div className="mb-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block font-mono">
                NOTRE VALEUR AJOUTÉE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase font-condensed tracking-tight text-slate-900 mt-1">
                L'EXCELLENCE OPÉRATIONNELLE EN ACTION
              </h2>
            </div>

            {statsRows.map((row, index) => {
              const Icon = row.icon;
              return (
                <motion.div
                  key={row.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="p-5 sm:p-6 rounded-xl bg-[#F8FAFC] hover:bg-slate-50 border border-slate-200 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                      <Icon className="w-6 h-6 text-slate-300" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold uppercase font-condensed tracking-tight text-slate-900">
                        {row.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-snug">
                        {row.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="self-end sm:self-center text-right shrink-0">
                    <span className="text-3xl sm:text-4xl font-black font-condensed text-slate-900 leading-none block font-mono">
                      {row.metric}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                      {row.metricLabel}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
