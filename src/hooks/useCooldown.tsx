import { useState } from 'react';

export const useCooldown = () => {
  const [ cooldowns, setCooldowns ] = useState<string[]>([]);

  const unsetCooldown = (id: string) => {
    setCooldowns((prev) => prev.filter((x) => x !== id));
  };

  const addCooldown = (id: string, time: number = 500) => {
    setCooldowns((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setTimeout(() => unsetCooldown(id), time);
  };

  return { cooldowns, addCooldown };
};
