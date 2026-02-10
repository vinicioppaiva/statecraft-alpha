import styles from './Header.module.css';
import Timer from '../Timer';

const Header = ({ questionTitle, questionNumber, timePercent, phaseSubtitle }) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.topRow}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.mainTitle}>STATECRAFT</h1>
          {/* Agora aceita o subtítulo dinâmico da fase */}
          <p className={styles.subTitle}>{phaseSubtitle || "Relatório de Gestão de Crise"}</p>
        </div>
        <div className={styles.timerWrapper}>
          <Timer timePercent={timePercent} />
        </div>
      </div>

      <div className={styles.questionInfo}>
        <span className={styles.protocolNumber}>PROT. Nº 00{questionNumber}</span>
        {/*<h2 className={styles.currentQuestionText}>{questionTitle}</h2>*/}
      </div>
      {/* Divider removido conforme solicitado (ou mantido se for a linha que você quer tirar) */}
    </header>
  );
};

export default Header;