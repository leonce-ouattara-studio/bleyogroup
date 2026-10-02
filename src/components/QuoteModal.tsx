import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    full_name: '',
    company_name: '',
    phone: '',
    email: '',
    project_type: 'Télécommunications',
    urgency: 'Dans les 30 jours',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.full_name || !formData.phone || !formData.email) {
      setErrorMsg('Veuillez renseigner votre nom, téléphone et adresse email.');
      return;
    }

    setIsSubmitting(true);

    try {
      const supabasePayload = {
        full_name: formData.full_name,
        company_name: formData.company_name || 'Non spécifié',
        phone: formData.phone,
        email: formData.email,
        project_type: formData.project_type,
        urgency: formData.urgency,
        message: formData.message,
        created_at: new Date().toISOString(),
        source: 'bleyo_groupe_problem_solver_modal',
      };

      const existingQuotes = JSON.parse(localStorage.getItem('bleyo_quotes') || '[]');
      existingQuotes.push(supabasePayload);
      localStorage.setItem('bleyo_quotes', JSON.stringify(existingQuotes));

      await new Promise((resolve) => setTimeout(resolve, 600));
      setSubmitted(true);
    } catch {
      setErrorMsg("Une erreur est survenue lors de l'enregistrement. Veuillez nous contacter directement par téléphone.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      full_name: '',
      company_name: '',
      phone: '',
      email: '',
      project_type: 'Télécommunications',
      urgency: 'Dans les 30 jours',
      message: '',
    });
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-200"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors z-20 cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Entête sobre du Modal */}
        <div className="bg-[#0B1325] text-white p-6 sm:p-8 rounded-t-2xl relative overflow-hidden border-b border-slate-800">
          <div className="relative z-10">
            <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono text-[10px] font-semibold uppercase tracking-wider border border-slate-700">
              RÉPONSE TECHNIQUE EN 48H
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase font-condensed tracking-tight mt-2 text-white">
              EXPOSEZ VOTRE DÉFI CHANTIER
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal">
              Faites chiffrer vos travaux par les ingénieurs de BLEYO GROUPE avec engagement contractuel de délais.
            </p>
          </div>
        </div>

        {/* Corps du Formulaire */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center mb-1">
                <CheckCircle2 className="w-6 h-6 text-[#EA580C]" />
              </div>
              <h4 className="text-xl font-bold uppercase font-condensed text-slate-900">
                VOTRE DEMANDE A ÉTÉ ENREGISTRÉE
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal">
                Merci <span className="font-semibold text-slate-900">{formData.full_name}</span>. Un ingénieur de notre bureau d'études analyse vos données et prendra contact avec vous d'ici 24 à 48 heures au <span className="font-semibold text-slate-900">{formData.phone}</span>.
              </p>
              <button
                onClick={handleReset}
                className="mt-5 px-6 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-slate-100 border border-slate-300 text-slate-800 text-xs font-medium">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Nom & Titre *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    placeholder="M. Jean Konan"
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Entreprise / Organisation
                  </label>
                  <input
                    type="text"
                    value={formData.company_name}
                    onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                    placeholder="Structure commanditaire"
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Téléphone Direct *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+225 07 00 00 00 00"
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 font-sans"
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
                    placeholder="contact@entreprise.ci"
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Domaine du Projet
                  </label>
                  <select
                    value={formData.project_type}
                    onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 font-sans"
                  >
                    <option value="Télécommunications">Télécommunications (2G à 5G)</option>
                    <option value="Fibre Optique">Fibre Optique (Tirage / FTTX)</option>
                    <option value="Génie Civil & VRD">Génie Civil, Tranchées & VRD</option>
                    <option value="BTP & Construction">BTP & Ouvrages Spéciaux</option>
                    <option value="Énergie">Énergie & Postes MT/BT</option>
                    <option value="Autre prestation">Autre contrainte</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Degré d'Urgence
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 font-sans"
                  >
                    <option value="Urgent : sous 7 jours">Urgent : Sous 7 jours</option>
                    <option value="Dans les 30 jours">Dans les 30 jours</option>
                    <option value="Dans les 3 mois">Dans les 3 mois</option>
                    <option value="Étude préalable">Étude préalable</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Décrivez votre Problème ou Besoin Technique
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Localisation exacte du site, volume de travaux, contraintes de délais..."
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 font-sans resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Transmission en cours...</span>
                  ) : (
                    <>
                      <span>SOUMETTRE POUR CHIFFRAGE RAPIDE</span>
                      <Send className="w-3.5 h-3.5 text-[#EA580C]" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                <span>Traitement confidentiel et réponse garantie sous 48h</span>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};
