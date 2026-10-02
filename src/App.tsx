import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext.tsx';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { QuoteModal } from './components/QuoteModal.tsx';

// Pages
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { TelecomPage } from './pages/TelecomPage.tsx';
import { CivilEngineeringPage } from './pages/CivilEngineeringPage.tsx';
import { RealisationsPage } from './pages/RealisationsPage.tsx';
import { QualityEngagementsPage } from './pages/QualityEngagementsPage.tsx';
import { PartnersPage } from './pages/PartnersPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

import { Phone, MessageSquare } from 'lucide-react';

const AppContent: React.FC = () => {
  const { currentRoute, isQuoteModalOpen, closeQuoteModal } = useRouter();

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'a-propos':
        return <AboutPage />;
      case 'telecommunications':
        return <TelecomPage />;
      case 'genie-civil':
        return <CivilEngineeringPage />;
      case 'realisations':
        return <RealisationsPage />;
      case 'engagements':
        return <QualityEngagementsPage />;
      case 'partenaires':
        return <PartnersPage />;
      case 'contact':
        return <ContactPage />;
      case 'accueil':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-900 font-sans selection:bg-[#EA580C] selection:text-white flex flex-col justify-between">
      {/* Barre de navigation institutionnelle */}
      <Header />

      {/* Contenu de la page active */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Pied de page institutionnel complet */}
      <Footer />

      {/* Modal Devis & Étude Rapide */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />

      {/* Boutons d'action rapide flottants (WhatsApp & Téléphone) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href="https://wa.me/2250707070707"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all ring-4 ring-emerald-500/20"
          title="Échanger sur WhatsApp (+225 07 07 07 07 07)"
          aria-label="WhatsApp BLEYO GROUPE"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        <a
          href="tel:+2250707070707"
          className="w-12 h-12 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all ring-4 ring-orange-500/20"
          title="Appeler la Direction (+225 07 07 07 07 07)"
          aria-label="Appeler BLEYO GROUPE"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
