// src/context/GameContext.jsx
import { createContext, useContext } from 'react';
import { useGameLogic } from '../hooks/useGameLogic';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const game = useGameLogic(); // Seu hook de lógica aqui
  return (
    <GameContext.Provider value={game}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);