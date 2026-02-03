🧭 Statecraft — Phase 1
Statecraft é um simulador de avaliação estratégica e política desenvolvido em React. O objetivo é desafiar o jogador através de um quiz progressivo, onde cada decisão molda o perfil do líder e determina sua permanência no poder.

"Toda decisão molda o mundo."

🏗️ Estrutura do Projeto
O projeto utiliza Vite + React + JavaScript com a seguinte organização de pastas:

Plaintext

statecraft/
├── src/
│   ├── assets/             # Identidade visual e ícones
│   ├── components/         # Componentes de UI (Button, Card, ProgressBar)
│   ├── data/               # Dados estáticos (questions.json)
│   ├── hooks/              # Lógica de estado (useGameLogic.js)
│   ├── pages/              # As 7 telas principais do fluxo
│   ├── styles/             # CSS Global e por componente
│   ├── App.jsx             # Gerenciamento de rotas (React Router)
│   └── main.jsx            # Inicialização do sistema
🕹️ Fluxo do Jogo (Game Flow)
O jogo é dividido em 7 telas principais com lógica condicional baseada em pontuação:

Landing: Boas-vindas e introdução ao conceito.

Onboarding: Coleta de dados do jogador (gênero, idade, nacionalidade).

Instruções: Briefing sobre o sistema de avaliação.

Bloco A (Fundamentos): Questões 1 a 5.

Regra: Se Pontos < 6 → Fim de Jogo.

Bloco B (Estratégia): Questões 6 a 8.

Regra: Se Pontos < 18 → Resultado Regular.

Bloco C (Ética e Perfil): Questões 9 e 10.

Questões subjetivas para traçar o perfil narrativo.

Resultado Final: Feedback detalhado, pontuação e perfil psicológico do líder.

🛠️ Tecnologias Utilizadas
React 18 (Biblioteca Frontend)

Vite (Build Tool e Servidor de Desenvolvimento)

React Router Dom (Navegação Single Page)

JSON (Estrutura de dados para o Quiz)

CSS Modules (Estilização isolada)