import { Moon, Sun } from 'lucide-react';
import { Translations } from '../utils/translations';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
  translations: Translations;
}

export function ThemeToggle({ isDark, onToggle, translations }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="relative group flex items-center space-x-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-white/30 to-white/20 dark:from-black/30 dark:to-black/20 backdrop-blur-xl hover:from-white/40 hover:to-white/30 dark:hover:from-black/40 dark:hover:to-black/30 transition-all duration-500 border border-white/40 dark:border-white/20 hover:scale-105 hover:shadow-xl shadow-lg"
      title={`Switch to ${isDark ? translations.lightMode : translations.darkMode} mode`}
    >
      <div className="relative">
        {isDark ? (
          <Sun size={18} className="text-yellow-400 drop-shadow-lg animate-pulse" />
        ) : (
          <Moon size={18} className="text-indigo-500 drop-shadow-lg animate-pulse" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 dark:from-indigo-400/20 to-purple-400/20 rounded-full blur-sm"></div>
      </div>
      <span className="text-sm font-bold text-gray-800 dark:text-gray-200 tracking-wide">
        {isDark ? translations.lightMode : translations.darkMode}
      </span>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 dark:from-indigo-400/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </button>
  );
}