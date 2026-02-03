// src/pages/QuizPage.jsx
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import QuestionCard from '../components/quiz/QuestionCard';
import { useGame } from '../context/GameContext'; // Certifique-se que o Contexto usa o useGameLogic

const QuizPage = () => {
  // Extraindo exatamente o que seu Hook retorna
  const { 
    currentQuestion, 
    currentIndex, 
    timePercent, 
    history, 
    totalQuestions, 
    onNext, // Aqui estava handleNext, o correto conforme seu hook é onNext
    canNext 
  } = useGame();

  return (
    <Layout>
      <Header 
        questionTitle={currentQuestion?.question} 
        questionNumber={currentIndex + 1} 
        timePercent={timePercent} 
      />
      
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* O QuestionCard precisa receber as funções de clique/input */}
        <QuestionCard />
      </main>

      <Footer 
        history={history} 
        totalQuestions={totalQuestions} 
        onNext={onNext} 
        canNext={canNext} 
      />
    </Layout>
  );
};

export default QuizPage;