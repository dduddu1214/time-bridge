import { useState } from 'react';
import { Plus, X, Settings, Search, Globe, Check } from 'lucide-react';
import { City } from '../types';
import { Translations } from '../utils/translations';

interface CitySelectorProps {
  availableCities: City[];
  selectedCities: City[];
  onAddCity: (city: City) => void;
  onRemoveCity: (cityId: string) => void;
  translations: Translations;
  language: 'en' | 'ko';
}

export function CitySelector({ 
  availableCities, 
  selectedCities, 
  onAddCity, 
  onRemoveCity,
  translations,
  language
}: CitySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const selectedCityIds = new Set(selectedCities.map(city => city.id));
  const filteredCities = availableCities.filter(city => {
    const cityName = language === 'ko' ? city.nameKo : city.name;
    const countryName = language === 'ko' ? city.countryKo : city.country;
    const searchLower = searchTerm.toLowerCase();
    
    return !selectedCityIds.has(city.id) &&
      (cityName.toLowerCase().includes(searchLower) ||
       countryName.toLowerCase().includes(searchLower));
  });

  const handleAddCity = (city: City) => {
    onAddCity(city);
    setSearchTerm('');
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/60 via-emerald-50/60 to-teal-50/60 dark:from-gray-900/60 dark:via-emerald-900/60 dark:to-teal-900/60 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-400/15 to-teal-400/15 rounded-full translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-teal-400/15 to-cyan-400/15 rounded-full -translate-x-24 translate-y-24"></div>
      </div>

      <div className="relative p-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 shadow-xl">
                <Settings className="text-white drop-shadow-sm" size={32} />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full animate-pulse shadow-lg"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-800 dark:from-white dark:via-emerald-200 dark:to-teal-200 bg-clip-text text-transparent mb-2">
                {translations.manageCitiesTitle}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">Customize your world clock experience</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-white px-8 py-4 rounded-2xl hover:shadow-xl font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Plus size={20} />
            <span>{translations.addCity}</span>
          </button>
        </div>

        {/* Selected Cities */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-6">
            <Globe className="text-emerald-600 dark:text-emerald-400" size={24} />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-800 dark:from-white dark:via-emerald-200 dark:to-teal-200 bg-clip-text text-transparent">
              {translations.selectedCities} ({selectedCities.length})
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedCities.map(city => (
              <div
                key={city.id}
                className="group relative flex items-center space-x-4 bg-gradient-to-r from-white/70 to-white/50 dark:from-black/40 dark:to-black/20 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/30 dark:border-white/10 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="text-2xl drop-shadow-sm">{city.flag}</span>
                <div className="flex-1">
                  <div className="font-bold text-gray-800 dark:text-white text-lg korean-text">
                    {language === 'ko' ? city.nameKo : city.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 korean-text">
                    {language === 'ko' ? city.countryKo : city.country}
                  </div>
                </div>
                <button
                  onClick={() => onRemoveCity(city.id)}
                  className="p-2 text-red-500 hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                >
                  <X size={18} />
                </button>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Add City Modal */}
        {isOpen && (
          <div className="border-t border-white/20 dark:border-white/10 pt-8">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder={translations.searchCities}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-0 bg-white/70 dark:bg-black/30 backdrop-blur-sm rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/30 text-gray-900 dark:text-white text-lg shadow-lg transition-all duration-300"
                  autoFocus
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            <div className="max-h-80 overflow-y-auto rounded-2xl bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/30 dark:border-white/10">
              {filteredCities.length === 0 ? (
                <div className="text-center py-12">
                  <Globe className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    {translations.noCitiesAvailable}
                  </p>
                </div>
              ) : (
                <div className="p-4 space-y-2">
                  {filteredCities.map(city => (
                    <button
                      key={city.id}
                      onClick={() => handleAddCity(city)}
                      className="w-full group flex items-center space-x-4 px-4 py-4 text-left hover:bg-white/50 dark:hover:bg-black/30 rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      <span className="text-2xl drop-shadow-sm">{city.flag}</span>
                      <div className="flex-1">
                        <div className="font-bold text-gray-800 dark:text-white text-lg korean-text">
                          {language === 'ko' ? city.nameKo : city.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 korean-text">
                          {language === 'ko' ? city.countryKo : city.country}
                        </div>
                      </div>
                      <div className="p-2 bg-emerald-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Plus className="text-emerald-600 dark:text-emerald-400" size={18} />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="px-8 py-3 bg-white/50 dark:bg-black/30 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-2xl hover:bg-white/60 dark:hover:bg-black/40 transition-all duration-300 font-semibold border border-white/30 dark:border-white/10 shadow-lg hover:shadow-xl"
              >
                {translations.done}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}