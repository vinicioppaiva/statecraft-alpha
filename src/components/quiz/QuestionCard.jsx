import QuestionDescription from './QuestionDescription';
import OptionsList from './OptionsList';
import TextInput from './TextInput';
import { useGame } from '../../context/GameContext';
import styles from './Quiz.module.css';

const QuestionCard = () => {
  const { currentQuestion, handleSelect, handleInputChange, selectedOption, inputValue } = useGame();

  if (!currentQuestion) return null;

  return (
    <div className={styles.cardContainer}>
      {/* Texto da questão/crise */}
      <QuestionDescription text={currentQuestion.question} />

      <div className={styles.interactionArea}>
        {currentQuestion.type === 'text' ? (
          <TextInput 
            value={inputValue} 
            onChange={handleInputChange} 
          />
        ) : (
          <OptionsList 
            options={currentQuestion.options} 
            selectedOption={selectedOption}
            onSelect={handleSelect}
          />
        )}
      </div>
    </div>
  );
};

export default QuestionCard;