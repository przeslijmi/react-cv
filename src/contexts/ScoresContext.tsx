import type React from 'react';
import { createContext } from 'react';

export interface ScoresContextData {
  leaderScore: number;
}

const defaultValue = {
  leaderScore: 0,
}

export const ScoresContext = createContext<ScoresContextData>(defaultValue);

interface Props {
  children: React.ReactNode;
}

export default function ScoresProvider({
  children,
}: Props) {

  return (
    <ScoresContext.Provider value={defaultValue}>
      {children}
    </ScoresContext.Provider>
  )
}
