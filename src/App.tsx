import { useState, useEffect } from 'react';
import { Clock as ClockIcon, Settings, Sparkles } from 'lucide-react';
import { Clock } from './components/Clock';
import { CitySelector } from './components/CitySelector';
import { ThemeToggle } from './components/ThemeToggle';
import { LanguageToggle } from './components/LanguageToggle';
import { useLocalStorage } from './hooks/useLocalStorage';
import { City } from './types';
import { DEFAULT_CITIES, ALL_CITIES } from './utils/cityData';
import { translations } from './utils/translations';

function App() {
  const [selectedCities, setSelectedCities] = useLocalStorage<City[]>('timeBridge-cities', DEFAULT_CITIES);
  const [is24Hour, setIs24Hour] = useLocalStorage<boolean>('timeBridge-24hour', true);
  const [isDark, setIsDark] = useLocalStorage<boolean>('timeBridge-dark', false);
  const [language, setLanguage] = useLocalStorage<'en' | 'ko'>('timeBridge-language', 'en');
  const [activeTab, setActiveTab] = useState<'clock' | 'settings'>('clock');

  const t = translations[language];

  // Background pattern SVG
  const backgroundPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  // Apply dark mode class to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // 기존 도시 데이터에 한국어 필드가 없을 경우 업데이트
  useEffect(() => {
    const updatedCities = selectedCities.map(city => {
      const defaultCity = ALL_CITIES.find(dc => dc.id === city.id);
      if (defaultCity && (!city.nameKo || !city.countryKo)) {
        return {
          ...city,
          nameKo: defaultCity.nameKo,
          countryKo: defaultCity.countryKo
        };
      }
      return city;
    });
    
    if (JSON.stringify(updatedCities) !== JSON.stringify(selectedCities)) {
      setSelectedCities(updatedCities);
    }
  }, [selectedCities, setSelectedCities]);

  const handleAddCity = (city: City) => {
    if (!selectedCities.some(c => c.id === city.id)) {
      setSelectedCities([...selectedCities, city]);
    }
  };

  const handleRemoveCity = (cityId: string) => {
    setSelectedCities(selectedCities.filter(city => city.id !== cityId));
  };

  const toggleTimeFormat = () => {
    setIs24Hour(!is24Hour);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ko' : 'en');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 transition-all duration-700">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{ backgroundImage: `url('${backgroundPattern}')` }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative bg-gradient-to-r from-white/60 via-blue-50/60 to-indigo-50/60 dark:from-gray-900/60 dark:via-blue-900/60 dark:to-indigo-900/60 backdrop-blur-xl shadow-2xl border-b border-white/30 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="relative">
                  <ClockIcon className="text-blue-600 dark:text-blue-400 drop-shadow-2xl" size={42} />
                  <div className="absolute inset-0 text-blue-600 dark:text-blue-400 blur-xl opacity-30">
                    <ClockIcon size={42} />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {t.appTitle}
                </h1>
                <div className="flex items-center space-x-2">
                  <Sparkles className="text-purple-500 dark:text-purple-400" size={16} />
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">Global Time, Simplified</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTimeFormat}
                className="relative group px-6 py-3 text-sm font-bold bg-gradient-to-r from-white/30 to-white/20 dark:from-black/30 dark:to-black/20 backdrop-blur-xl text-gray-700 dark:text-gray-300 rounded-2xl hover:from-white/40 hover:to-white/30 dark:hover:from-black/40 dark:hover:to-black/30 transition-all duration-500 border border-white/40 dark:border-white/20 hover:scale-105 hover:shadow-xl shadow-lg"
              >
                {is24Hour ? '24H' : '12H'}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <LanguageToggle currentLanguage={language} onToggle={toggleLanguage} />
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} translations={t} />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="relative bg-gradient-to-r from-white/40 via-blue-50/40 to-indigo-50/40 dark:from-gray-900/40 dark:via-blue-900/40 dark:to-indigo-900/40 backdrop-blur-xl border-b border-white/20 dark:border-white/5 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex space-x-12">
            <button
              onClick={() => setActiveTab('clock')}
              className={`relative flex items-center space-x-3 py-8 px-2 font-bold text-base transition-all duration-500 ${
                activeTab === 'clock'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              <ClockIcon size={20} />
              <span>{t.worldClock}</span>
              {activeTab === 'clock' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full shadow-lg"></div>
              )}
            </button>
            
            <button
              onClick={() => setActiveTab('settings')}
              className={`relative flex items-center space-x-3 py-8 px-2 font-bold text-base transition-all duration-500 ${
                activeTab === 'settings'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              <Settings size={20} />
              <span>{t.manageCities}</span>
              {activeTab === 'settings' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full shadow-lg"></div>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {activeTab === 'clock' && (
          <div className="animate-fade-in">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
                {t.worldClockTitle}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {t.worldClockDescription}
              </p>
            </div>
            
            <Clock
              cities={selectedCities}
              is24Hour={is24Hour}
              onRemoveCity={handleRemoveCity}
              showRemoveButtons={selectedCities.length > 1}
              translations={t}
              language={language}
            />
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="animate-fade-in">
            <CitySelector
              availableCities={ALL_CITIES}
              selectedCities={selectedCities}
              onAddCity={handleAddCity}
              onRemoveCity={handleRemoveCity}
              translations={t}
              language={language}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-white/40 via-blue-50/40 to-indigo-50/40 dark:from-gray-900/40 dark:via-blue-900/40 dark:to-indigo-900/40 backdrop-blur-xl border-t border-white/30 dark:border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="relative">
                <ClockIcon className="text-blue-600 dark:text-blue-400" size={24} />
                <div className="absolute inset-0 text-blue-600 dark:text-blue-400 blur-lg opacity-20">
                  <ClockIcon size={24} />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                TimeBridge
              </span>
            </div>
            <p className="text-base text-gray-500 dark:text-gray-400 font-medium mb-3">
              {t.footerText}
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 font-medium">
              Made by devdduddu ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;