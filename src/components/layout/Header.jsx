import styles from './Header.module.css';
import Timer from '../Timer';

const Header = ({ questionTitle, questionNumber, timePercent }) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.topRow}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.mainTitle}>STATECRAFT</h1>
          <p className={styles.subTitle}>Relatório de Gestão de Crise</p>
        </div>
        {/* Círculo Amarelo */}
        <div className={styles.timerWrapper}>
          <Timer timePercent={timePercent} />
        </div>
      </div>

      <div className={styles.questionInfo}>
        <span className={styles.protocolNumber}>PROT. Nº 00{questionNumber}</span>
        <h2 className={styles.currentQuestionText}>{questionTitle}</h2>
      </div>
      <div className={styles.divider}></div>
    </header>
  );
};

export default Header;