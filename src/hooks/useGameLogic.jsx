// src/hooks/useGameLogic.jsx
import { useState, useEffect } from 'react';
import questionsData from '../data/questions.json';

export const useGameLogic = () => {
  // 1. Estados de Navegação e Fluxo
  const [gameState, setGameState] = useState('LANDING'); // 'LANDING', 'QUIZ', 'RESULT'
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 2. Estados de Feedback e Pontuação
  const [history, setHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  // 3. Estados de Input do Jogador
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [timeLeft, setTimeLeft] = useState(100);

  // Dados auxiliares
  const currentQuestion = questionsData.questions[currentIndex];
  const totalQuestions = questionsData.questions.length;

  // Timer: Controla a barra de progresso no Header
  useEffect(() => {
    if (gameState !== 'QUIZ' || isGameOver) return;
    
    if (timeLeft <= 0) {
      handleNext(); // Pula se o tempo acabar
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 0.5); 
    }, 100);

    return () => clearInterval(timer);
  }, [timeLeft, currentIndex, isGameOver, gameState]);

  // Função para validar e avançar
  const handleNext = () => {
    let isCorrect = false;

    if (currentQuestion.type === 'text') {
      isCorrect = inputValue.trim().toLowerCase() === currentQuestion.answer.toLowerCase();
    } else {
      const selectedText = currentQuestion.options[selectedOption];
      isCorrect = selectedText === currentQuestion.answer;
    }

    if (isCorrect) setScore(prev => prev + (currentQuestion.points || 0));
    setHistory(prev => [...prev, isCorrect]);

    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setInputValue("");
      setTimeLeft(100);
    } else {
      setIsGameOver(true);
      setGameState('RESULT'); // Avisa o App.jsx para trocar de tela
    }
  };

  // Determina se o botão de "Próximo" pode ser clicado
  const canNext = currentQuestion?.type === 'text' 
    ? inputValue.trim().length > 0 
    : selectedOption !== null;

  return {
    // Navegação
    gameState,
    setGameState,
    
    // Dados da Questão
    currentQuestion,
    currentIndex,
    totalQuestions,
    
    // Progresso e Score
    history,
    score,
    timePercent: timeLeft,
    isGameOver,
    
    // Inputs
    selectedOption,
    inputValue,
    canNext,
    
    // Ações
    handleSelect: setSelectedOption,
    handleInputChange: setInputValue,
    onNext: handleNext
  };
};