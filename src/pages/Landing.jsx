import { useEffect } from 'react';
import { useGame } from '../context/GameContext';
import styles from './Landing.module.css';

const Landing = () => {
  const { setGameState } = useGame();

  useEffect(() => {
    console.log("Iniciando timer de 2s..."); // Veja se isso aparece no F12
    const timer = setTimeout(() => {
      setGameState('QUIZ');
    }, 2000);
    return () => clearTimeout(timer);
  }, [setGameState]);

  return (
    <div className={styles.fullScreenOverlay}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logoText}>STATECRAFT</h1>
        <div className={styles.loaderLine}></div>
        <p className={styles.statusText}>INICIALIZANDO PROTOCOLO 2026...</p>
      </div>
    </div>
  );
};

export default Landing;