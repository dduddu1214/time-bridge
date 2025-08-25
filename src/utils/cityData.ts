import { City } from '../types';

export const DEFAULT_CITIES: City[] = [
  {
    id: 'seoul',
    name: 'Seoul',
    nameKo: '서울',
    timezone: 'Asia/Seoul',
    country: 'South Korea',
    countryKo: '대한민국',
    flag: '🇰🇷'
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    nameKo: '도쿄',
    timezone: 'Asia/Tokyo',
    country: 'Japan',
    countryKo: '일본',
    flag: '🇯🇵'
  },
  {
    id: 'new-york',
    name: 'New York',
    nameKo: '뉴욕',
    timezone: 'America/New_York',
    country: 'United States',
    countryKo: '미국',
    flag: '🇺🇸'
  },
  {
    id: 'london',
    name: 'London',
    nameKo: '런던',
    timezone: 'Europe/London',
    country: 'United Kingdom',
    countryKo: '영국',
    flag: '🇬🇧'
  },
  {
    id: 'paris',
    name: 'Paris',
    nameKo: '파리',
    timezone: 'Europe/Paris',
    country: 'France',
    countryKo: '프랑스',
    flag: '🇫🇷'
  },
  {
    id: 'sydney',
    name: 'Sydney',
    nameKo: '시드니',
    timezone: 'Australia/Sydney',
    country: 'Australia',
    countryKo: '호주',
    flag: '🇦🇺'
  }
];

export const ALL_CITIES: City[] = [
  ...DEFAULT_CITIES,
  {
    id: 'singapore',
    name: 'Singapore',
    nameKo: '싱가포르',
    timezone: 'Asia/Singapore',
    country: 'Singapore',
    countryKo: '싱가포르',
    flag: '🇸🇬'
  },
  {
    id: 'hong-kong',
    name: 'Hong Kong',
    nameKo: '홍콩',
    timezone: 'Asia/Hong_Kong',
    country: 'Hong Kong',
    countryKo: '홍콩',
    flag: '🇭🇰'
  },
  {
    id: 'dubai',
    name: 'Dubai',
    nameKo: '두바이',
    timezone: 'Asia/Dubai',
    country: 'UAE',
    countryKo: '아랍에미리트',
    flag: '🇦🇪'
  },
  {
    id: 'berlin',
    name: 'Berlin',
    nameKo: '베를린',
    timezone: 'Europe/Berlin',
    country: 'Germany',
    countryKo: '독일',
    flag: '🇩🇪'
  },
  {
    id: 'los-angeles',
    name: 'Los Angeles',
    nameKo: '로스앤젤레스',
    timezone: 'America/Los_Angeles',
    country: 'United States',
    countryKo: '미국',
    flag: '🇺🇸'
  },
  {
    id: 'toronto',
    name: 'Toronto',
    nameKo: '토론토',
    timezone: 'America/Toronto',
    country: 'Canada',
    countryKo: '캐나다',
    flag: '🇨🇦'
  }
];