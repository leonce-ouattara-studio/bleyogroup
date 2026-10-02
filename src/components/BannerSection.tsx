import React from 'react';
import { Star, ShieldCheck, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import constructionBannerImg from '../assets/images/banner_infrastructure_construction_1790951333724.jpg';

export const BannerSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#F8FAFC] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Conteneur principal de la grande photo immersive */}
        <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-between p-6 sm:p-8 lg:p-12 border border-slate-200">
          {/* Image d'arrière-plan avec traitement sobre */}
          <div className="absolute inset-0 z-0">
            <img
              src={constructionBannerImg}
              alt="Infrastructures de génie civil et télécoms BLEYO GROUPE"
              className="w-full h-full object-cover object-center animate-slow-zoom"
            />
            {/* Voiles dégradés neutres pour lisibilité sans surcoloration */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-slate-950/20" />
          </div>

          {/* Ligne haute : Badges sobres */}
          <div className="relative z-10 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-200 text-xs font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Abidjan, Cocody Riviera-Palmeraie</span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-200 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-300" />
              <span>IDU: CI-2024-0072706 G</span>
            </div>
          </div>

          {/* Ligne basse : Carte de gauche sobre + Bloc de droite en ardoise sobre */}
          <div className="relative z-10 flex flex-col lg:flex-row items-end justify-between gap-6 pt-16">
            {/* Gauche : Badge "100% Délais & Conformité Respectés" */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-2xl p-5 text-white max-w-md shadow-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl sm:text-4xl font-black font-condensed tracking-tight text-white">
                  100%
                </span>
                <div className="flex flex-col">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300 tracking-wider uppercase font-mono">
                    Délais & Conformité Garantis
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                Nos clients ne payent aucun surcoût imprévu : chaque projet bénéficie d'une étude préalable rigoureuse et d'un engagement contractuel sur la date de livraison.
              </p>
            </motion.div>

            {/* Droite : Bloc Sobre en Ardoise avec accent discret (au lieu du bloc orange criard) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-88 bg-[#0F172A] border-t-2 border-t-[#EA580C] border border-slate-800 text-white p-6 sm:p-7 rounded-2xl shadow-xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-4xl sm:text-5xl font-black font-condensed tracking-tight block leading-none mb-1 text-white">
                  01 SEUL
                </span>
                <span className="text-xs font-bold uppercase tracking-wider block text-slate-300 mb-2 font-display">
                  INTERLOCUTEUR RESPONSABLE
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Fini les renvois de responsabilité entre maçons et câbleurs. BLEYO GROUPE pilote l'infrastructure sous-terraine et les réseaux optiques pour une coordination parfaite.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
                  <span>SARL Enregistrée · Abidjan</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
