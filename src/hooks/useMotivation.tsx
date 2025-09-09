import { useState } from 'react';

export interface Person {
  id: number,
  anger: number,
  selected: boolean,
}

const randomAnger = (): number => {
  return 0 + (Math.random() * 8);
}

const initialPeople:Person[] = [
  { id: 1, anger: randomAnger(), selected: false},
  { id: 2, anger: randomAnger(), selected: false},
  { id: 3, anger: randomAnger(), selected: false},
  { id: 4, anger: randomAnger(), selected: true},
  { id: 5, anger: randomAnger(), selected: false},
  { id: 6, anger: randomAnger(), selected: false},
];

export const useMotivation = () => {
  const [ people, setPeople ] = useState<Person[]>(initialPeople);

  const setSelected = (id: number): void => {
    setPeople(prev =>
      prev.map(p => (p.id === id ? { ...p, selected: true } : { ...p, selected: false }))
    );
  };

  const calcAngerChange = (): number => 0.3 + Math.random() * 0.3;

  const peronFired = (id: number): void => {
    const next = people.filter((p: Person) => p.id !== id);
    setPeople(next);
  }

  const changeAnger = (direction: 1 | -1): void => {
    setPeople(prev => {
      const delta = calcAngerChange();
      let mutated = false;

      const next = prev.map((p: Person) => {
        if (!p.selected) return p;
        mutated = true;
        const newAnger = p.anger + direction * delta;
        if (newAnger > 10) {
          peronFired(p.id);
        }
        // Clamp 0–10 and round to 2 decimals
        const clamped = Math.max(0, Math.min(10, newAnger));
        return { ...p, anger: +clamped.toFixed(2) };
      });

      return mutated ? next : prev; // no-op if nothing was selected
    });
  };
  const increaseAnger = (): void => changeAnger(1);
  const decreaseAnger = (): void => changeAnger(-1);

  const getResult = (): number => {
    return 60
      - (people.reduce((sum: number, p: Person) => {
        return sum + p.anger
      }, 0))
      - ( (initialPeople.length - people.length)*10 ) // for those no longer hired
  };

  const isAnyoneSelected = (): boolean => people.some((p: Person) => p.selected)

  return { people, setSelected, increaseAnger, decreaseAnger, getResult, isAnyoneSelected };
};
