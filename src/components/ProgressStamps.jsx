import styles from '../styles/components/ProgressStamps.module.css';
import stampGreen from '../assets/carimbo-certo.png';
import stampRed from '../assets/carimbo-errado.png';

const ProgressStamps = ({ history = [], totalQuestions = 5 }) => {
  const slots = Array.from({ length: totalQuestions });

  return (
    <div className={styles.stampsWrapper}>
      <div className={styles.stampsContainer}>
        {slots.map((_, index) => {
          const status = history[index];

          return (
            <div key={index} className={styles.stampSlot}>
               <span className={styles.placeholderNumber}>{index + 1}</span>
              
              {status === true && (
                <img src={stampGreen} alt="Correto" className={styles.stampImage} />
              )}
              {status === false && (
                <img src={stampRed} alt="Incorreto" className={styles.stampImage} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProgressStamps;