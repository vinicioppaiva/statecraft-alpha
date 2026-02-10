import styles from './Footer.module.css';
import ProgressStamps from '../ProgressStamps';
import ButtonNext from '../ButtonNext';

const Footer = ({ history, totalQuestions, onNext, canNext }) => {
  return (
    <footer className={styles.footerContainer}>
      {/* Camada Interativa (Stamps e Button sobrepondo) */}
      <div className={styles.interactiveLayer}>
        <div className={styles.stampsPos}>
          <ProgressStamps history={history} totalQuestions={totalQuestions} />
        </div>
        <div className={styles.buttonPos}>
          <ButtonNext onClick={onNext} disabled={!canNext} />
        </div>
      </div>

      <div className={styles.legalBar}>
        <p className={styles.footerLegalText}>
          2026 - DESENVOLVIDO POR VINICIO PAULO DE PAIVA
        </p>
      </div>
    </footer>
  );
};

export default Footer;