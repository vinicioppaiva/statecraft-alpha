// src/pages/Result.jsx
import Layout from '../components/layout/Layout';
import { useGame } from '../context/GameContext';

const Result = () => {
  const { score, history, totalQuestions } = useGame();
  const correctCount = history.filter(status => status === true).length;

  return (
    <Layout>
      <div style={{ textAlign: 'center', padding: '50px 20px', fontFamily: 'Special Elite' }}>
        <h1 style={{ letterSpacing: '2px' }}>PROCESSO FINALIZADO</h1>
        <div style={{ margin: '20px auto', width: '50px', height: '3px', background: '#333' }}></div>
        
        <p>IDENTIFICAÇÃO: AGENTE ATIVO</p>
        <p style={{ fontSize: '1.4rem', margin: '30px 0' }}>
          ACERTOS: <strong>{correctCount} / {totalQuestions}</strong>
        </p>
        <p>PONTUAÇÃO DE INFLUÊNCIA: {score}</p>
        
        <button 
          onClick={() => window.location.reload()}
          style={{ marginTop: '40px', cursor: 'pointer', padding: '10px 20px', fontFamily: 'Special Elite' }}
        >
          REINICIAR SISTEMA
        </button>
      </div>
    </Layout>
  );
};

export default Result;