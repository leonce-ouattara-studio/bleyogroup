import React from 'react';
import { ArrowRight, PhoneCall, FileText, CheckCircle2, MessageSquare } from 'lucide-react';
import { useRouter } from '../context/RouterContext.tsx';

export const ProcessSection: React.FC = () => {
  const { openQuoteModal } = useRouter();

  const steps = [
    {
      number: '1',
      title: 'Vous nous contactez',
      description: 'Par téléphone, WhatsApp ou via le formulaire de devis.',
      icon: PhoneCall,
    },
    {
      number: '2',
      title: 'Vous recevez votre devis',
      description: 'Un devis clair, adapté à votre besoin et votre budget.',
      icon: FileText,
    },
    {
      number: '3',
      title: 'Nous réalisons vos travaux',
      description: "Exécution soignée, avec un suivi régulier jusqu'à la livraison.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Entête conforme au PDF Page 6 */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block font-mono mb-2">
            NOTRE PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-condensed tracking-tight text-slate-900">
            SIMPLE, DIRECT, SANS DÉTOUR
          </h2>
        </div>

        {/* Les 3 Étapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto mb-20">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 transition-all shadow-sm"
              >
                <div className="w-14 h-14 rounded-full bg-slate-900 text-white font-mono font-black text-2xl flex items-center justify-center mb-6 shadow-sm">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold uppercase font-condensed tracking-tight text-slate-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bannière de passage à l'action conforme à la Page 6 du PDF */}
        <div className="rounded-2xl bg-[#0B1325] border border-slate-800 p-8 sm:p-12 lg:p-14 text-white shadow-xl text-center max-w-5xl mx-auto relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest block font-mono mb-3">
              VOTRE PARTENAIRE POUR DES INFRASTRUCTURES CONNECTÉES ET DURABLES
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase font-condensed tracking-tight text-white leading-tight">
              NE LAISSEZ PAS UN IMPRÉVU TECHNIQUE DÉCIDER À VOTRE PLACE
            </h3>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 mt-4 leading-relaxed font-normal">
              Chaque jour sans solution est un jour de risque en plus pour votre activité. Parlez-nous-en maintenant.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={openQuoteModal}
                className="px-8 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer inline-flex items-center gap-2 active:scale-95"
              >
                <span>Parler à BLEYO GROUPE maintenant</span>
                <ArrowRight className="w-4 h-4 text-[#EA580C]" />
              </button>

              <a
                href="https://wa.me/2250707070707"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
