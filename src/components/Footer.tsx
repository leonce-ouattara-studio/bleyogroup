import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  ArrowUp,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { Logo } from './Logo.tsx';
import { useRouter } from '../context/RouterContext.tsx';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Télécommunications',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        created_at: new Date().toISOString(),
        source: 'footer_contact_form_pdf_aligned',
      };

      const existingQuotes = JSON.parse(localStorage.getItem('bleyo_quotes') || '[]');
      existingQuotes.push(payload);
      localStorage.setItem('bleyo_quotes', JSON.stringify(existingQuotes));

      await new Promise((res) => setTimeout(res, 500));
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0B1325] text-white pt-20 pb-12 relative overflow-hidden border-t border-slate-800">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Entête conforme au PDF Page 7 */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block font-mono mb-2">
            DERNIÈRE ÉTAPE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-condensed tracking-tight text-white leading-tight">
            EXPOSEZ VOTRE BESOIN, ON S'EN OCCUPE
          </h2>
          <p className="text-sm text-slate-300 mt-3 font-normal leading-relaxed">
            Pas de formulaire interminable, pas d'attente : un message WhatsApp suffit pour démarrer.
          </p>
        </div>

        {/* Ligne Supérieure : Canaux Directs + Formulaire Sobre (Pages 7 & 8 du PDF) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          {/* Colonne Gauche : Canaux Directs */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <button
                onClick={() => navigate('solutions')}
                className="cursor-pointer text-left mb-6 block"
              >
                <Logo variant="light" size="lg" />
              </button>

              {/* Canal 1 : Écrivez-nous sur WhatsApp */}
              <a
                href="https://wa.me/2250707070707"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-600 transition-all flex items-center justify-between group shadow-sm mb-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">
                      Écrivez-nous sur WhatsApp
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      La façon la plus rapide de nous joindre
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1.5 rounded bg-emerald-700/80 text-white text-[11px] font-bold uppercase tracking-wider group-hover:bg-emerald-600 transition-colors">
                  WhatsApp
                </span>
              </a>

              {/* Autres Canaux Directs */}
              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-[#EA580C]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block uppercase tracking-wider">Téléphone Direct</span>
                    <a href="tel:+2250707070707" className="text-slate-200 hover:text-white font-mono text-sm font-semibold transition-colors">
                      +225 07 07 07 07 07
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-[#EA580C]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block uppercase tracking-wider">Email Professionnel</span>
                    <a href="mailto:contact@bleyogroupe.com" className="hover:text-white transition-colors">
                      contact@bleyogroupe.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-[#EA580C]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block uppercase tracking-wider">Bureaux</span>
                    <span className="text-slate-300">
                      Abidjan, Côte d'Ivoire (Cocody Riviera-Palmeraie, Rue Ministre)
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation Rapide */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 font-mono block mb-3">
                  NAVIGATION RAPIDE
                </span>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-medium">
                  <button
                    onClick={() => navigate('solutions')}
                    className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>Solutions</span>
                  </button>

                  <button
                    onClick={() => navigate('a-propos')}
                    className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>À propos</span>
                  </button>

                  <button
                    onClick={() => navigate('telecommunications')}
                    className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>Télécoms</span>
                  </button>

                  <button
                    onClick={() => navigate('genie-civil')}
                    className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>Génie Civil</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Formulaire Devis Conforme aux Pages 7 & 8 du PDF */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-black uppercase font-condensed tracking-tight text-slate-900">
                Demander un devis
              </h3>
              <p className="text-xs text-slate-600 mt-1 font-normal">
                Décrivez votre besoin, nous revenons vers vous rapidement.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center mb-1">
                  <CheckCircle2 className="w-6 h-6 text-[#EA580C]" />
                </div>
                <h4 className="text-xl font-bold uppercase font-condensed text-slate-900">
                  DEMANDE TRANSMIS À BLEYO GROUPE
                </h4>
                <p className="text-xs text-slate-600 max-w-sm">
                  Votre demande a bien été envoyée. Un conseiller prendra contact avec vous dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Votre nom"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+225 ..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Service concerné
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  >
                    <option value="Télécommunications">Télécommunications</option>
                    <option value="Génie civil">Génie civil</option>
                    <option value="Fibre optique">Fibre optique</option>
                    <option value="Énergie solaire & électrique">Énergie solaire & électrique</option>
                    <option value="Autre prestation">Autre prestation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Votre besoin
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Décrivez votre projet en quelques mots"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Envoi en cours...</span>
                  ) : (
                    <>
                      <span>Envoyer ma demande</span>
                      <Send className="w-3.5 h-3.5 text-[#EA580C]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Ligne Inférieure */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <span>© 2024–2026 BLEYO GROUPE. Tous droits réservés.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Retour en haut"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
