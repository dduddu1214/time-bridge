
import { City, TimeData } from '../types';
import { getTimeData } from '../utils/timeUtils';
import { CityCard } from './CityCard';
import { Translations } from '../utils/translations';

interface ClockProps {
  cities: City[];
  is24Hour: boolean;
  onRemoveCity?: (cityId: string) => void;
  showRemoveButtons?: boolean;
  translations: Translations;
  language: 'en' | 'ko';
}

export function Clock({ cities, is24Hour, onRemoveCity, showRemoveButtons = false, translations, language }: ClockProps) {
  const timeDataList: TimeData[] = cities.map(city => 
    getTimeData(city, is24Hour)
  );

  if (cities.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          {translations.noCitiesSelected}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {timeDataList.map(timeData => (
        <CityCard
          key={timeData.city.id}
          timeData={timeData}
          onRemove={onRemoveCity}
          showRemoveButton={showRemoveButtons}
          translations={translations}
          language={language}
        />
      ))}
    </div>
  );
}