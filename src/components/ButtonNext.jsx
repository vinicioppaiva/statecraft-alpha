import styles from '../styles/components/ButtonNext.module.css';
import sealImg from '../assets/botao-next.png';

const ButtonNext = ({ onClick, disabled }) => {
  return (
    <button 
      className={styles.sealContainer} 
      onClick={onClick} 
      disabled={disabled}
    >
      <img 
        src={sealImg} 
        alt="Lacre de Cera" 
        className={styles.sealImage} 
      />
    </button>
  );
};

export default ButtonNext;