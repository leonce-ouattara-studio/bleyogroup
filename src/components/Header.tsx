import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare, ChevronDown, Radio, Building2 } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { useRouter } from '../context/RouterContext.tsx';
import { PageRoute } from '../types/index.ts';

export const Header: React.FC = () => {
  const { currentRoute, navigate, openQuoteModal } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expertisesDropdownOpen, setExpertisesDropdownOpen] = useState(false);
  const [mobileExpertisesOpen, setMobileExpertisesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setExpertisesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (route: PageRoute) => {
    navigate(route);
    setMobileMenuOpen(false);
    setExpertisesDropdownOpen(false);
  };

  const isExpertisesActive =
    currentRoute === 'telecommunications' || currentRoute === 'genie-civil';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1325]/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-800'
          : 'bg-[#0B1325] py-4 border-b border-slate-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo BLEYO GROUPE */}
          <button
            onClick={() => handleLinkClick('solutions')}
            className="flex items-center gap-2 group cursor-pointer text-left"
            aria-label="Accueil BLEYO GROUPE"
          >
            <Logo variant="light" size={isScrolled ? 'sm' : 'md'} />
          </button>

          {/* Navigation centrale desktop : EXACTEMENT les 5 items demandés */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* 1. Solutions */}
            <button
              onClick={() => handleLinkClick('solutions')}
              className={`text-xs font-semibold uppercase tracking-wider transition-colors relative py-1 cursor-pointer ${
                currentRoute === 'solutions' || currentRoute === 'accueil'
                  ? 'text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>Solutions</span>
              {(currentRoute === 'solutions' || currentRoute === 'accueil') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EA580C] rounded-full" />
              )}
            </button>

            {/* 2. À propos */}
            <button
              onClick={() => handleLinkClick('a-propos')}
              className={`text-xs font-semibold uppercase tracking-wider transition-colors relative py-1 cursor-pointer ${
                currentRoute === 'a-propos' ? 'text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>À propos</span>
              {currentRoute === 'a-propos' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EA580C] rounded-full" />
              )}
            </button>

            {/* 3. Expertises : Menu Déroulant (TÉLÉCOMS & GÉNIE CIVIL) */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setExpertisesDropdownOpen(true)}
              onMouseLeave={() => setExpertisesDropdownOpen(false)}
            >
              <button
                onClick={() => setExpertisesDropdownOpen(!expertisesDropdownOpen)}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors relative py-1 cursor-pointer flex items-center gap-1.5 ${
                  isExpertisesActive ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
                aria-expanded={expertisesDropdownOpen}
              >
                <span>Expertises</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    expertisesDropdownOpen ? 'rotate-180 text-[#EA580C]' : 'text-slate-400'
                  }`}
                />
                {isExpertisesActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EA580C] rounded-full" />
                )}
              </button>

              {/* Menu Déroulant Desktop */}
              {expertisesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-[#0F172A] border border-slate-800 shadow-2xl p-2 animate-in fade-in zoom-in-95 duration-150 z-50">
                  <button
                    onClick={() => handleLinkClick('telecommunications')}
                    className={`w-full p-3 rounded-lg text-left transition-all flex items-center gap-3 cursor-pointer group ${
                      currentRoute === 'telecommunications'
                        ? 'bg-slate-800 text-white'
                        : 'hover:bg-slate-800/60 text-slate-300 hover:text-white'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-md bg-slate-800 text-slate-300 group-hover:text-[#EA580C] flex items-center justify-center shrink-0 transition-colors">
                      <Radio className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-tight block text-white">
                        TÉLÉCOMS
                      </span>
                      <span className="text-[10px] text-slate-400 block">
                        Réseaux 2G–5G & Fibre FTTX
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleLinkClick('genie-civil')}
                    className={`w-full p-3 rounded-lg text-left transition-all flex items-center gap-3 cursor-pointer group mt-1 ${
                      currentRoute === 'genie-civil'
                        ? 'bg-slate-800 text-white'
                        : 'hover:bg-slate-800/60 text-slate-300 hover:text-white'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-md bg-slate-800 text-slate-300 group-hover:text-blue-400 flex items-center justify-center shrink-0 transition-colors">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-tight block text-white">
                        GÉNIE CIVIL
                      </span>
                      <span className="text-[10px] text-slate-400 block">
                        Terrassement, VRD & Ouvrages
                      </span>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* 4. Projets */}
            <button
              onClick={() => handleLinkClick('realisations')}
              className={`text-xs font-semibold uppercase tracking-wider transition-colors relative py-1 cursor-pointer ${
                currentRoute === 'realisations' ? 'text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>Projets</span>
              {currentRoute === 'realisations' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EA580C] rounded-full" />
              )}
            </button>

            {/* 5. Contact */}
            <button
              onClick={() => handleLinkClick('contact')}
              className={`text-xs font-semibold uppercase tracking-wider transition-colors relative py-1 cursor-pointer ${
                currentRoute === 'contact' ? 'text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>Contact</span>
              {currentRoute === 'contact' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EA580C] rounded-full" />
              )}
            </button>
          </nav>

          {/* Actions à droite sobres */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://wa.me/2250707070707"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors bg-slate-800/70 px-3 py-1.5 rounded-lg border border-slate-700/60"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={openQuoteModal}
              className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-white text-slate-900 text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>DEVIS RAPIDE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#EA580C]" />
            </button>
          </div>

          {/* Bouton Mobile Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={openQuoteModal}
              className="px-3 py-1.5 rounded-md bg-white text-slate-900 text-[11px] font-bold uppercase tracking-wider sm:hidden"
            >
              DEVIS
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Déroulant Sobre */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F172A] border-b border-slate-800 px-6 py-6 shadow-2xl flex flex-col gap-3 animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            <button
              onClick={() => handleLinkClick('solutions')}
              className={`text-left text-sm font-semibold uppercase tracking-wider py-2.5 border-b border-slate-800 cursor-pointer ${
                currentRoute === 'solutions' || currentRoute === 'accueil'
                  ? 'text-white font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Solutions
            </button>

            <button
              onClick={() => handleLinkClick('a-propos')}
              className={`text-left text-sm font-semibold uppercase tracking-wider py-2.5 border-b border-slate-800 cursor-pointer ${
                currentRoute === 'a-propos'
                  ? 'text-white font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              À propos
            </button>

            <div className="border-b border-slate-800 py-1">
              <button
                onClick={() => setMobileExpertisesOpen(!mobileExpertisesOpen)}
                className="w-full flex items-center justify-between text-left text-sm font-semibold uppercase tracking-wider py-2 text-slate-300 hover:text-white cursor-pointer"
              >
                <span>Expertises</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileExpertisesOpen ? 'rotate-180 text-white' : 'text-slate-400'
                  }`}
                />
              </button>

              {mobileExpertisesOpen && (
                <div className="pl-4 pb-2 space-y-2 mt-1">
                  <button
                    onClick={() => handleLinkClick('telecommunications')}
                    className={`w-full flex items-center gap-2.5 text-xs uppercase font-medium py-1.5 text-left cursor-pointer ${
                      currentRoute === 'telecommunications' ? 'text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Radio className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>TÉLÉCOMS</span>
                  </button>

                  <button
                    onClick={() => handleLinkClick('genie-civil')}
                    className={`w-full flex items-center gap-2.5 text-xs uppercase font-medium py-1.5 text-left cursor-pointer ${
                      currentRoute === 'genie-civil' ? 'text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>GÉNIE CIVIL</span>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('realisations')}
              className={`text-left text-sm font-semibold uppercase tracking-wider py-2.5 border-b border-slate-800 cursor-pointer ${
                currentRoute === 'realisations'
                  ? 'text-white font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Projets
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className={`text-left text-sm font-semibold uppercase tracking-wider py-2.5 border-b border-slate-800 cursor-pointer ${
                currentRoute === 'contact'
                  ? 'text-white font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          <div className="pt-3 flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-xs text-slate-400 py-1">
              <span>Ligne Directe :</span>
              <a href="tel:+2250707070707" className="font-mono font-medium text-slate-200">
                +225 07 07 07 07 07
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-1">
              <a
                href="https://wa.me/2250707070707"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 text-center border border-slate-700"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="py-2.5 rounded-lg bg-white text-slate-900 text-center font-bold text-xs uppercase tracking-wider shadow flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>Devis</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#EA580C]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
