import styles from '../styles/components/Timer.module.css';
import clockImg from '../assets/relogio.png';

const Timer = ({ timePercent }) => {
  // Calculamos a rotação: 360 graus vezes o percentual de tempo (0 a 1)
  const rotation = { transform: `rotate(${timePercent * 360}deg)` };

  return (
    <div className={styles.timerContainer}>
      <img src={clockImg} alt="Cronômetro" className={styles.clockBase} />
      <div className={styles.hand} style={rotation}></div>
    </div>
  );
};

export default Timer;