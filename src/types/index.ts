export interface City {
    id: string;
    name: string;
    nameKo: string;
    timezone: string;
    country: string;
    countryKo: string;
    flag: string;
  }
  
  export interface TimeData {
    city: City;
    time: Date;
    formattedTime: string;
    period: 'work' | 'evening' | 'night' | 'morning';
    isWeekend: boolean;
  }
  
  export interface TimeFormat {
    is24Hour: boolean;
  }
  
  export interface Theme {
    isDark: boolean;
  }