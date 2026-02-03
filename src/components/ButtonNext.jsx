import styles from '../styles/components/ButtonNext.module.css';
import sealImg from '../assets/botao-next.png';

const ButtonNext = ({ onClick, disabled }) => {
  return (
    <button 
      className={styles.sealButton} 
      onClick={onClick} 
      disabled={disabled}
    >
      <img src={sealImg} alt="Decidir" />
      <span className={styles.sealText}>DECIDIR</span>
    </button>
  );
};

export default ButtonNext;