import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'color',
  showText = true,
  size = 'md',
}) => {
  const isLight = variant === 'light';

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-16',
  };

  const textSizeClasses = {
    sm: 'text-sm tracking-wider',
    md: 'text-lg tracking-wider',
    lg: 'text-2xl tracking-widest',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Monogramme officiel BG */}
      <div className={`relative flex items-center justify-center shrink-0 ${sizeClasses[size]} aspect-[1.1/1]`}>
        <svg
          viewBox="0 0 140 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto drop-shadow-sm"
        >
          <defs>
            {/* Dégradé Bleu Royal BLEYO */}
            <linearGradient id="bleyoBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="40%" stopColor="#003B96" />
              <stop offset="100%" stopColor="#0A2558" />
            </linearGradient>

            {/* Dégradé Orange Cuivré BLEYO */}
            <linearGradient id="bleyoOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="50%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#C2410C" />
            </linearGradient>

            {/* Ombre portée subtile */}
            <filter id="subtleShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Lettre B en Bleu Royal (style officiel avec découpe dynamique) */}
          <path
            d="M20 12 L70 12 C82 12 90 19 90 29 C90 36 86 42 78 45 C89 48 95 56 95 67 C95 81 83 88 68 88 L20 88 Z M44 30 L44 43 L63 43 C69 43 73 40 73 36 C73 32 69 30 63 30 Z M44 57 L44 71 L66 71 C72 71 77 68 77 64 C77 59 72 57 66 57 Z"
            fill="url(#bleyoBlueGrad)"
            filter="url(#subtleShadow)"
          />

          {/* Lettre G en Orange Vif (entrelacée) */}
          <path
            d="M92 20 C73 20 60 34 60 52 C60 70 73 84 92 84 C104 84 113 79 119 72 L119 55 L90 55 L90 41 L133 41 L133 79 C123 90 108 97 90 97 C62 97 42 77 42 52 C42 27 62 7 92 7 C109 7 122 13 131 22 L118 34 C111 26 102 20 92 20 Z"
            fill="url(#bleyoOrangeGrad)"
            filter="url(#subtleShadow)"
          />
        </svg>
      </div>

      {/* Titre textuel BLEYO GROUPE */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-black uppercase font-display tracking-tight ${textSizeClasses[size]} ${
              isLight ? 'text-white' : 'text-slate-900'
            }`}
          >
            BLEYO GROUPE
          </span>
          <span
            className={`text-[9px] uppercase tracking-widest font-bold mt-0.5 ${
              isLight ? 'text-orange-300' : 'text-orange-600'
            }`}
          >
            Télécoms & BTP
          </span>
        </div>
      )}
    </div>
  );
};
