import styles from './Quiz.module.css';

const QuestionDescription = ({ text }) => {
  return (
    <div className={styles.descriptionWrapper}>
      <p className={styles.descriptionText}>{text}</p>
    </div>
  );
};

export default QuestionDescription;