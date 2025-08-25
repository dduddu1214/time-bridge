import { City, TimeData } from '../types';

export function getCurrentTimeInTimezone(timezone: string): Date {
  return new Date(new Date().toLocaleString("en-US", { timeZone: timezone }));
}

export function formatTime(date: Date, is24Hour: boolean): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: !is24Hour
  };
  
  return date.toLocaleString('en-US', options);
}

export function getTimePeriod(date: Date): 'work' | 'evening' | 'night' | 'morning' {
  const hour = date.getHours();
  
  if (hour >= 9 && hour < 18) return 'work';
  if (hour >= 18 && hour < 22) return 'evening';
  if (hour >= 22 || hour < 6) return 'night';
  return 'morning';
}

export function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6; // Sunday = 0, Saturday = 6
}

export function getTimeData(city: City, is24Hour: boolean): TimeData {
  const time = getCurrentTimeInTimezone(city.timezone);
  const formattedTime = formatTime(time, is24Hour);
  const period = getTimePeriod(time);
  const isWeekendDay = isWeekend(time);
  
  return {
    city,
    time,
    formattedTime,
    period,
    isWeekend: isWeekendDay
  };
}

export function convertTimeToAllTimezones(
  inputTime: string,
  _fromTimezone: string,
  cities: City[],
  is24Hour: boolean
): TimeData[] {
  try {
    const [hours, minutes] = inputTime.split(':').map(Number);
    
    // Create a date in the source timezone
    const sourceDate = new Date();
    sourceDate.setHours(hours, minutes, 0, 0);
    
    // Convert to UTC first, then to each target timezone
    const utcTime = new Date(sourceDate.toLocaleString("en-US", { timeZone: "UTC" }));
    
    return cities.map(city => {
      const cityTime = new Date(utcTime.toLocaleString("en-US", { timeZone: city.timezone }));
      const formattedTime = formatTime(cityTime, is24Hour);
      const period = getTimePeriod(cityTime);
      const isWeekendDay = isWeekend(cityTime);
      
      return {
        city,
        time: cityTime,
        formattedTime,
        period,
        isWeekend: isWeekendDay
      };
    });
  } catch (error) {
    // If conversion fails, return current times
    return cities.map(city => getTimeData(city, is24Hour));
  }
}