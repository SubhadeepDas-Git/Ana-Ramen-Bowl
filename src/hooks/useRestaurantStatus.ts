import { useState, useEffect } from 'react';

export interface RestaurantStatus {
  isOpen: boolean;
  statusText: string;
  subText: string;
  openingHours: string;
  badgeColor: string;
  isLateNight: boolean;
}

export function useRestaurantStatus(): RestaurantStatus {
  const [status, setStatus] = useState<RestaurantStatus>(calculateStatus());

  function calculateStatus(): RestaurantStatus {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentDecimalTime = hour + minute / 60;

    // Restaurant is open from 6:00 PM (18:00) to 4:00 AM (04:00)
    // Between 18:00 and 24:00, OR 00:00 and 04:00
    const isOpen = currentDecimalTime >= 18 || currentDecimalTime < 4;
    const isLateNight = currentDecimalTime >= 0 && currentDecimalTime < 4;

    if (isOpen) {
      if (isLateNight) {
        return {
          isOpen: true,
          statusText: 'OPEN UNTIL DAWN',
          subText: 'Serving steaming broth under the moon until 4:00 AM',
          openingHours: '6:00 PM – 4:00 AM',
          badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-300',
          isLateNight: true,
        };
      }
      return {
        isOpen: true,
        statusText: 'OPEN TONIGHT',
        subText: 'Late-night sanctuary open until 4:00 AM',
        openingHours: '6:00 PM – 4:00 AM',
        badgeColor: 'bg-lavender-100 text-plum-900 border-lavender-300',
        isLateNight: false,
      };
    } else {
      // It is daytime (4:00 AM - 6:00 PM)
      const hoursUntilOpen = Math.round(18 - currentDecimalTime);
      return {
        isOpen: false,
        statusText: 'RESTING UNTIL DUSK',
        subText: `Doors reopen at 6:00 PM (${hoursUntilOpen}h away)`,
        openingHours: '6:00 PM – 4:00 AM',
        badgeColor: 'bg-cream-200 text-plum-600 border-cream-400',
        isLateNight: false,
      };
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(calculateStatus());
    }, 60000); // refresh every minute

    return () => clearInterval(interval);
  }, []);

  return status;
}