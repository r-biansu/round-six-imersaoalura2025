// PARTE 1: Lista de perguntas e respostas
perguntas = [
  {
    "pergunta": "Onde foi lançado origialmente a série Round Six?",
    "respostas": [
      { "opcao": "Netflix", "correto": true },
      { "opcao": "Amazon Prime", "correto": false },
      { "opcao": "HBO", "correto": false }
    ]
  },
  {
    "pergunta": "Qual a data de lançamento da série Round Six?",
    "respostas": [
      { "opcao": "17 de Setembro de 2021", "correto": true },
      { "opcao": "09 de Junho de 2023", "correto": false },
      { "opcao": "01 de Outubro de 2020", "correto": false }
    ]
  },
  {
    "pergunta": "Quem dirigiu a série Round Six?",
    "respostas": [
      { "opcao": "David Fincher", "correto": false },
      { "opcao": "Hwang Dong-hyuk", "correto": true },
      { "opcao": "Park Chan-wook", "correto": false }
    ]
  },
  {
    "pergunta": "O prêmio final em Round 6 (Squid Game) é de:",
    "respostas": [
      { "opcao": "46,5 bilhões de wons!", "correto": false },
      { "opcao": "65,4 bilhões de wons!", "correto": false },
      { "opcao": "45,6 bilhões de wons!", "correto": true }
    ]
  },
  {
    "pergunta": "Quem foi o último sobrevivente da primeira temporada de Round Six?",
    "respostas": [
      { "opcao": "Cho Sang-woo", "correto": false },
      { "opcao": "Han Mi-nyeo", "correto": false },
      { "opcao": "Seong Gi-hun", "correto": true }
    ]
  },
  {
    "pergunta": "Qual o número do jogador Seong Gi-hun?",
    "respostas": [
      { "opcao": "645", "correto": false },
      { "opcao": "456", "correto": true },
      { "opcao": "564", "correto": false }
    ]
  }
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos = acertos;
        acertos++; // Incrementa o contador de acertos
        
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
