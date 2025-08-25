export interface Translations {
    // Header
    appTitle: string;
    
    // Navigation
    worldClock: string;
    manageCities: string;
    
    // Time periods
    workHours: string;
    evening: string;
    night: string;
    morning: string;
    weekend: string;
    
    // World Clock page
    worldClockTitle: string;
    worldClockDescription: string;
    noCitiesSelected: string;
    
    // Manage Cities page
    manageCitiesTitle: string;
    manageCitiesDescription: string;
    addCity: string;
    selectedCities: string;
    searchCities: string;
    noCitiesAvailable: string;
    done: string;
    
    // Footer
    footerText: string;
    
    // Theme
    lightMode: string;
    darkMode: string;
  }
  
  export const translations: Record<'en' | 'ko', Translations> = {
    en: {
      // Header
      appTitle: 'TimeBridge',
      
      // Navigation
      worldClock: 'World Clock',
      manageCities: 'Manage Cities',
      
      // Time periods
      workHours: 'Work Hours',
      evening: 'Evening',
      night: 'Night',
      morning: 'Morning',
      weekend: 'Weekend',
      
      // World Clock page
      worldClockTitle: 'World Clock',
      worldClockDescription: 'Current time across your selected cities',
      noCitiesSelected: 'No cities selected. Add some cities to see their times!',
      
      // Manage Cities page
      manageCitiesTitle: 'Manage Cities',
      manageCitiesDescription: 'Add or remove cities from your world clock',
      addCity: 'Add City',
      selectedCities: 'Selected Cities',
      searchCities: 'Search cities...',
      noCitiesAvailable: 'No cities available',
      done: 'Done',
      
      // Footer
      footerText: 'TimeBridge - Perfect for remote teams and global collaboration',
      
      // Theme
      lightMode: 'Light',
      darkMode: 'Dark',
    },
    ko: {
      // Header
      appTitle: 'TimeBridge',
      
      // Navigation
      worldClock: '세계시계',
      manageCities: '도시 관리',
      
      // Time periods
      workHours: '업무시간',
      evening: '저녁',
      night: '밤',
      morning: '아침',
      weekend: '주말',
      
      // World Clock page
      worldClockTitle: '세계시계',
      worldClockDescription: '선택한 도시들의 현재 시간',
      noCitiesSelected: '선택된 도시가 없습니다. 도시를 추가해서 시간을 확인해보세요!',
      
      // Manage Cities page
      manageCitiesTitle: '도시 관리',
      manageCitiesDescription: '세계시계에서 도시를 추가하거나 제거',
      addCity: '도시 추가',
      selectedCities: '선택된 도시',
      searchCities: '도시 검색...',
      noCitiesAvailable: '사용 가능한 도시가 없습니다',
      done: '완료',
      
      // Footer
      footerText: 'TimeBridge - 원격 팀과 글로벌 협업을 위한 완벽한 도구',
      
      // Theme
      lightMode: '라이트',
      darkMode: '다크',
    },
  };