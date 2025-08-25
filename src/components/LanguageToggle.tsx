import { Languages, Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLanguage: 'en' | 'ko';
  onToggle: () => void;
}

export function LanguageToggle({ currentLanguage, onToggle }: LanguageToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="relative group flex items-center space-x-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-white/30 to-white/20 dark:from-black/30 dark:to-black/20 backdrop-blur-xl hover:from-white/40 hover:to-white/30 dark:hover:from-black/40 dark:hover:to-black/30 transition-all duration-500 border border-white/40 dark:border-white/20 hover:scale-105 hover:shadow-xl shadow-lg"
      title={`Switch to ${currentLanguage === 'en' ? '한국어' : 'English'}`}
    >
      <div className="relative">
        <Globe size={18} className="text-emerald-500 drop-shadow-lg animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-sm"></div>
      </div>
      <span className="text-sm font-bold text-gray-800 dark:text-gray-200 tracking-wide">
        {currentLanguage === 'en' ? '한국어' : 'English'}
      </span>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </button>
  );
}