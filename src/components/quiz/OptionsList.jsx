import styles from './Quiz.module.css';

const OptionsList = ({ options, selectedOption, onSelect }) => {
  return (
    <div className={styles.optionsContainer}>
      {options.map((option, index) => (
        <label 
          key={index} 
          className={`${styles.optionItem} ${selectedOption === index ? styles.selected : ''}`}
        >
          <input
            type="radio"
            name="quiz-option"
            className={styles.hiddenRadio}
            checked={selectedOption === index}
            onChange={() => onSelect(index)}
          />
          <span className={styles.checkbox}>
            {selectedOption === index ? 'X' : ''}
          </span>
          <span className={styles.optionText}>{option.text}</span>
        </label>
      ))}
    </div>
  );
};

export default OptionsList;