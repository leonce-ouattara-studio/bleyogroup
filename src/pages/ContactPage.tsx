import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    company_name: '',
    phone: '',
    email: '',
    project_type: 'Télécommunications',
    urgency: 'Dans les 30 jours',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.full_name || !formData.phone || !formData.email) return;

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        created_at: new Date().toISOString(),
        source: 'contact_page_form',
      };

      const existingQuotes = JSON.parse(localStorage.getItem('bleyo_quotes') || '[]');
      existingQuotes.push(payload);
      localStorage.setItem('bleyo_quotes', JSON.stringify(existingQuotes));

      await new Promise((res) => setTimeout(res, 600));
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F8FAFC] text-slate-900 pt-20 pb-20">
      {/* En-tête sobre Contact */}
      <section className="bg-[#0B1325] text-white py-16 lg:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono text-xs font-semibold uppercase tracking-wider border border-slate-700 inline-block mb-3">
            RELATION DIRECTE
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-condensed tracking-tight text-white leading-none">
            CONTACTER BLEYO GROUPE<br />
            <span className="text-slate-300">& DEMANDER UN DEVIS CHIFFRÉ</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
            Notre bureau technique à Cocody Riviera-Palmeraie vous accueille du lundi au samedi. Vous pouvez également nous joindre par téléphone direct, WhatsApp ou via notre formulaire d’étude de projet.
          </p>
        </div>
      </section>

      {/* Contenu Contact & Formulaire Projet sobre */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Colonne Gauche : Coordonnées, Téléphone, WhatsApp & Localisation */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block font-mono">
                COORDONNÉES OFFICIELLES
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase font-condensed tracking-tight text-slate-900 mt-1">
                SIÈGE SOCIAL & CANAUX DIRECTS
              </h2>
            </div>

            {/* Cartes Canaux de communication sobres */}
            <div className="space-y-3.5">
              {/* WhatsApp Direct Sobre */}
              <a
                href="https://wa.me/2250707070707"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-slate-400 font-mono block">
                      Messagerie Directe
                    </span>
                    <h4 className="font-bold text-sm text-slate-900">
                      Discuter sur WhatsApp
                    </h4>
                    <span className="text-xs text-slate-600 font-mono">
                      +225 07 07 07 07 07
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold uppercase tracking-wider group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  Ouvrir
                </span>
              </a>

              {/* Téléphone Direct */}
              <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#EA580C]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 font-mono block">
                    Appel Téléphonique
                  </span>
                  <a href="tel:+2250707070707" className="font-bold text-sm text-slate-900 hover:text-[#EA580C] font-mono transition-colors">
                    +225 07 07 07 07 07
                  </a>
                  <p className="text-[11px] text-slate-500">Du lundi au samedi aux heures de bureau</p>
                </div>
              </div>

              {/* Emails */}
              <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 font-mono block">
                    Courriers Électroniques
                  </span>
                  <div className="flex flex-col text-xs">
                    <a href="mailto:contact@bleyogroupe.com" className="text-slate-900 font-medium hover:text-[#EA580C] transition-colors">
                      contact@bleyogroupe.com
                    </a>
                    <a href="mailto:gueileon43@gmail.com" className="text-slate-500 hover:text-[#EA580C] transition-colors mt-0.5">
                      gueileon43@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Localisation Physique */}
              <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 font-mono block">
                    Adresse Géographique
                  </span>
                  <p className="text-xs text-slate-900 font-medium leading-relaxed mt-0.5">
                    Abidjan, Cocody, Riviera-Palmeraie, Rue Ministre (non loin de l’École MACI Canada)
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-mono">IDU: CI-2024-0072706 G</p>
                </div>
              </div>

              {/* Horaires */}
              <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 font-mono block">
                    Horaires de Permanence
                  </span>
                  <p className="text-xs text-slate-900 font-medium">Lundi – Vendredi : 08h00 à 18h00</p>
                  <p className="text-xs text-slate-500 font-medium">Samedi : 08h00 à 14h00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Formulaire Complet de Projet & Devis */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <div className="mb-6">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block font-mono">
                FORMULAIRE DE PROJET
              </span>
              <h3 className="text-2xl font-black uppercase font-condensed tracking-tight text-slate-900 mt-1">
                DEMANDER UNE ÉTUDE & UN DEVIS CHIFFRÉ
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Remplissez les informations ci-dessous pour que nos ingénieurs puissent dimensionner votre besoin.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center mb-1">
                  <CheckCircle2 className="w-6 h-6 text-[#EA580C]" />
                </div>
                <h4 className="text-xl font-bold uppercase font-condensed text-slate-900">
                  VOTRE DOSSIER A ÉTÉ TRANSMIS
                </h4>
                <p className="text-xs text-slate-600 max-w-sm">
                  Merci pour votre confiance. La Direction Technique de BLEYO GROUPE étudie vos données et vous recontactera d’ici 48h.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors"
                >
                  Renseigner un autre projet
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Nom complet & Titre *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      placeholder="M. Konan (Responsable Travaux)"
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Structure / Entreprise
                    </label>
                    <input
                      type="text"
                      value={formData.company_name}
                      onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                      placeholder="Nom de la société"
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Téléphone Joignable *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+225 07 00 00 00 00"
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Email Professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contact@organisation.ci"
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Type de Prestation Souhaitée
                    </label>
                    <select
                      value={formData.project_type}
                      onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    >
                      <option value="Télécommunications">Télécommunications (Réseaux 2G–5G)</option>
                      <option value="Fibre Optique">Déploiement Fibre Optique & FTTX</option>
                      <option value="Génie Civil & VRD">Génie Civil, Tranchées & Voirie (VRD)</option>
                      <option value="BTP & Ouvrages d'art">BTP, Bâtiments & Radiers</option>
                      <option value="Énergie & Raccordement">Énergie & Postes MT/BT</option>
                      <option value="Autre prestation">Autre besoin spécifique</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Délai d'Exécution Souhaité
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    >
                      <option value="Urgent : sous 7 jours">Urgent : Sous 7 jours</option>
                      <option value="Dans les 30 jours">Dans les 30 jours</option>
                      <option value="Dans les 3 mois">Dans les 3 mois</option>
                      <option value="Étude d'avant-projet">Étude préalable de budget</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Description Détaillée du Chantier
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Localisation du site, volume de travaux, contraintes techniques particulières, exigences de calendrier..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Transmission sécurisée...</span>
                  ) : (
                    <>
                      <span>SOUMETTRE MA DEMANDE À LA DIRECTION TECHNIQUE</span>
                      <Send className="w-3.5 h-3.5 text-[#EA580C]" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                  <span>Traitement confidentiel · Chiffrage sans engagement sous 48h</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
