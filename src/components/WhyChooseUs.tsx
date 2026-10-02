import React from 'react';
import { Award, Wrench, Clock, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      id: 1,
      badge: 'QUALITÉ',
      title: 'Plus de travaux à refaire',
      description: 'Des prestations fiables et durables, pensées pour tenir dans le temps.',
      icon: Award,
      highlighted: false,
    },
    {
      id: 2,
      badge: 'EXPERTISE',
      title: "Plus d'improvisation sur le terrain",
      description: 'Une équipe qualifiée et expérimentée sur chaque intervention.',
      icon: Wrench,
      highlighted: false,
    },
    {
      id: 3,
      badge: 'RESPECT DES DÉLAIS',
      title: 'Plus de chantier qui traîne',
      description: 'Votre satisfaction est notre priorité — les délais annoncés sont tenus.',
      icon: Clock,
      highlighted: true, // CARTE PHARE SOBRE
    },
    {
      id: 4,
      badge: 'PARTENARIAT',
      title: 'Plus de prestataire qui disparaît',
      description: 'Une collaboration de confiance, du premier contact à la fin des travaux.',
      icon: Users,
      highlighted: false,
    },
    {
      id: 5,
      badge: 'INNOVATION DURABLE',
      title: 'Plus de solutions dépassées',
      description: 'Des solutions pensées pour un avenir meilleur, pas des réparations provisoires.',
      icon: Sparkles,
      highlighted: false,
    },
  ];

  return (
    <section id="engagements" className="bg-[#F8FAFC] py-20 lg:py-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Entête Éditoriale conforme au PDF : Page 4 */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block font-mono">
            CE QUE VOUS NE RISQUEZ PLUS AVEC NOUS
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-condensed tracking-tight text-slate-900 mt-2 leading-[0.95]">
            LES MAUVAISES SURPRISES QUE VOUS ÉVITEZ
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
            Chaque engagement ci-dessous répond à une inquiétude que nos clients nous expriment avant de signer.
          </p>
        </div>

        {/* Grille des 5 Cartes d'engagements selon le PDF */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isHighlighted = card.highlighted;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-md ${
                  isHighlighted
                    ? 'bg-[#0B1325] text-white border-t-2 border-t-[#EA580C] border border-slate-800 lg:col-span-1'
                    : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-lg flex items-center justify-center ${
                        isHighlighted
                          ? 'bg-slate-800 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span
                      className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded ${
                        isHighlighted
                          ? 'bg-slate-800 text-slate-300 border border-slate-700'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold uppercase font-condensed tracking-tight leading-tight ${
                      isHighlighted ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`text-xs mt-3 leading-relaxed font-normal ${
                      isHighlighted ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-current/10 flex items-center gap-1.5 text-[11px] font-medium">
                  <CheckCircle2
                    className={`w-3.5 h-3.5 ${
                      isHighlighted ? 'text-[#EA580C]' : 'text-slate-700'
                    }`}
                  />
                  <span className={isHighlighted ? 'text-slate-300' : 'text-slate-700'}>
                    Engagement BLEYO garanti
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
