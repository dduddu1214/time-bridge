import { X, MapPin, Zap, Moon, Sun, Coffee, Clock } from 'lucide-react';
import { TimeData } from '../types';
import { Translations } from '../utils/translations';

interface CityCardProps {
  timeData: TimeData;
  onRemove?: (cityId: string) => void;
  showRemoveButton?: boolean;
  translations: Translations;
  language: 'en' | 'ko';
}

export function CityCard({ timeData, onRemove, showRemoveButton = false, translations, language }: CityCardProps) {
  const { city, formattedTime, period, isWeekend } = timeData;
  
  // 나라별 고유 색상 정의
  const getCountryStyle = (countryId: string) => {
    switch (countryId) {
      case 'seoul':
        return {
          bg: 'bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/50 dark:to-pink-950/50',
          border: 'border-red-200/60 dark:border-red-800/40',
          accent: 'from-red-500 to-pink-500',
          timeColor: 'text-red-900 dark:text-red-100'
        };
      case 'tokyo':
        return {
          bg: 'bg-gradient-to-br from-red-50 to-white dark:from-red-950/50 dark:to-gray-900/50',
          border: 'border-red-200/60 dark:border-red-800/40',
          accent: 'from-red-500 to-red-600',
          timeColor: 'text-red-900 dark:text-red-100'
        };
      case 'new-york':
      case 'los-angeles':
        return {
          bg: 'bg-gradient-to-br from-blue-50 to-red-50 dark:from-blue-950/50 dark:to-red-950/50',
          border: 'border-blue-200/60 dark:border-blue-800/40',
          accent: 'from-blue-500 to-red-500',
          timeColor: 'text-blue-900 dark:text-blue-100'
        };
      case 'london':
        return {
          bg: 'bg-gradient-to-br from-blue-50 to-red-50 dark:from-blue-950/50 dark:to-red-950/50',
          border: 'border-blue-200/60 dark:border-blue-800/40',
          accent: 'from-blue-500 to-red-500',
          timeColor: 'text-blue-900 dark:text-blue-100'
        };
      case 'paris':
        return {
          bg: 'bg-gradient-to-br from-blue-50 to-red-50 dark:from-blue-950/50 dark:to-red-950/50',
          border: 'border-blue-200/60 dark:border-blue-800/40',
          accent: 'from-blue-500 to-red-500',
          timeColor: 'text-blue-900 dark:text-blue-100'
        };
      case 'sydney':
        return {
          bg: 'bg-gradient-to-br from-blue-50 to-red-50 dark:from-blue-950/50 dark:to-red-950/50',
          border: 'border-blue-200/60 dark:border-blue-800/40',
          accent: 'from-blue-500 to-red-500',
          timeColor: 'text-blue-900 dark:text-blue-100'
        };
      case 'singapore':
        return {
          bg: 'bg-gradient-to-br from-red-50 to-white dark:from-red-950/50 dark:to-gray-900/50',
          border: 'border-red-200/60 dark:border-red-800/40',
          accent: 'from-red-500 to-red-600',
          timeColor: 'text-red-900 dark:text-red-100'
        };
      case 'hong-kong':
        return {
          bg: 'bg-gradient-to-br from-red-50 to-white dark:from-red-950/50 dark:to-gray-900/50',
          border: 'border-red-200/60 dark:border-red-800/40',
          accent: 'from-red-500 to-red-600',
          timeColor: 'text-red-900 dark:text-red-100'
        };
      case 'dubai':
        return {
          bg: 'bg-gradient-to-br from-green-50 to-red-50 dark:from-green-950/50 dark:to-red-950/50',
          border: 'border-green-200/60 dark:border-green-800/40',
          accent: 'from-green-500 to-red-500',
          timeColor: 'text-green-900 dark:text-green-100'
        };
      case 'berlin':
        return {
          bg: 'bg-gradient-to-br from-yellow-50 to-red-50 dark:from-yellow-950/50 dark:to-red-950/50',
          border: 'border-yellow-200/60 dark:border-yellow-800/40',
          accent: 'from-yellow-500 to-red-500',
          timeColor: 'text-yellow-900 dark:text-yellow-100'
        };
      case 'toronto':
        return {
          bg: 'bg-gradient-to-br from-red-50 to-white dark:from-red-950/50 dark:to-gray-900/50',
          border: 'border-red-200/60 dark:border-red-800/40',
          accent: 'from-red-500 to-red-600',
          timeColor: 'text-red-900 dark:text-red-100'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-gray-50 to-white dark:from-gray-950/50 dark:to-gray-900/50',
          border: 'border-gray-200/60 dark:border-gray-800/40',
          accent: 'from-gray-500 to-gray-600',
          timeColor: 'text-gray-900 dark:text-gray-100'
        };
    }
  };

  const getPeriodStyle = (period: string, isWeekend: boolean) => {
    if (isWeekend) {
      return {
        bg: 'bg-gradient-to-r from-violet-500 to-fuchsia-500',
        icon: Coffee,
        text: 'text-white'
      };
    }
    
    switch (period) {
      case 'work':
        return {
          bg: 'bg-gradient-to-r from-emerald-500 to-teal-500',
          icon: Zap,
          text: 'text-white'
        };
      case 'evening':
        return {
          bg: 'bg-gradient-to-r from-amber-500 to-orange-500',
          icon: Sun,
          text: 'text-white'
        };
      case 'night':
        return {
          bg: 'bg-gradient-to-r from-indigo-500 to-purple-500',
          icon: Moon,
          text: 'text-white'
        };
      case 'morning':
        return {
          bg: 'bg-gradient-to-r from-rose-500 to-pink-500',
          icon: Sun,
          text: 'text-white'
        };
      default:
        return {
          bg: 'bg-gradient-to-r from-slate-500 to-gray-500',
          icon: Clock,
          text: 'text-white'
        };
    }
  };

  const getPeriodText = (period: string, isWeekend: boolean) => {
    if (isWeekend) return translations.weekend;
    
    switch (period) {
      case 'work': return translations.workHours;
      case 'evening': return translations.evening;
      case 'night': return translations.night;
      case 'morning': return translations.morning;
      default: return '';
    }
  };

  const countryStyle = getCountryStyle(city.id);
  const periodStyle = getPeriodStyle(period, isWeekend);
  const PeriodIcon = periodStyle.icon;

  // 언어에 따라 도시 이름과 나라 이름 선택
  const displayName = language === 'ko' ? city.nameKo : city.name;
  const displayCountry = language === 'ko' ? city.countryKo : city.country;

  return (
    <div className={`relative group overflow-hidden rounded-2xl ${countryStyle.bg} ${countryStyle.border} border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}>
      {/* Remove Button */}
      {showRemoveButton && onRemove && (
        <button
          onClick={() => onRemove(city.id)}
          className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-red-500/90 backdrop-blur-sm text-white hover:bg-red-600 hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-md"
        >
          <X size={14} />
        </button>
      )}
      
      <div className="relative p-6">
        {/* Header - City Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-3xl drop-shadow-sm">{city.flag}</span>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-0.5 korean-text">{displayName}</h3>
              <div className="flex items-center space-x-1.5">
                <MapPin size={12} className="text-gray-400" />
                <p className="text-sm text-gray-500 dark:text-gray-400 korean-text">{displayCountry}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Time Display - Main Focus */}
        <div className="text-center mb-4">
          <div className={`text-4xl font-mono font-bold ${countryStyle.timeColor} tracking-wide`}>
            {formattedTime}
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center justify-center">
          <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full ${periodStyle.bg} shadow-sm`}>
            <PeriodIcon size={14} className={periodStyle.text} />
            <span className={`text-xs font-medium ${periodStyle.text} tracking-wide`}>
              {getPeriodText(period, isWeekend)}
            </span>
          </div>
        </div>

        {/* Subtle accent line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${countryStyle.accent} opacity-60`}></div>
      </div>
    </div>
  );
}