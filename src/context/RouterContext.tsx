import React, { createContext, useContext, useState, useEffect } from 'react';
import { PageRoute } from '../types/index.ts';

interface RouterContextType {
  currentRoute: PageRoute;
  navigate: (route: PageRoute) => void;
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
  isQuoteModalOpen: boolean;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getInitialRoute = (): PageRoute => {
    const path = window.location.pathname.replace(/^\//, '').toLowerCase();
    if (path === 'solutions' || path === 'accueil' || path === '') return 'solutions';
    if (path === 'a-propos') return 'a-propos';
    if (path === 'telecommunications' || path === 'telecoms') return 'telecommunications';
    if (path === 'genie-civil' || path === 'btp') return 'genie-civil';
    if (path === 'projets' || path === 'realisations') return 'realisations';
    if (path === 'engagements' || path === 'qualite') return 'engagements';
    if (path === 'partenaires' || path === 'investissements') return 'partenaires';
    if (path === 'contact') return 'contact';
    return 'solutions';
  };

  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getInitialRoute);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getInitialRoute());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (route: PageRoute) => {
    setCurrentRoute(route);
    let newPath = '/';
    if (route === 'solutions' || route === 'accueil') newPath = '/';
    else if (route === 'realisations') newPath = '/projets';
    else newPath = `/${route}`;

    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider
      value={{
        currentRoute,
        navigate,
        openQuoteModal: () => setIsQuoteModalOpen(true),
        closeQuoteModal: () => setIsQuoteModalOpen(false),
        isQuoteModalOpen,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
