// src/App.jsx
import { GameProvider, useGame } from './context/GameContext';
import Landing from './pages/Landing';
import QuizPage from './pages/QuizPage';
import Result from './pages/Result';

const GameSwitcher = () => {
  const { gameState } = useGame();

  // 1. Se for Landing, retorna sem Layout (Tela Cheia)
  if (gameState === 'LANDING') return <Landing />;

  // 2. Se for Result ou Quiz, as páginas internas já devem chamar o <Layout>
  if (gameState === 'RESULT') return <Result />;

  return <QuizPage />;
};

function App() {
  return (
    <GameProvider>
      <GameSwitcher />
    </GameProvider>
  );
}

export default App;