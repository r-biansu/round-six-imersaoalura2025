//JOGO PEDRA, PAPEL OU TESOURA
function playppt() {
  idade = prompt("Quantos anos você tem?");
  if (idade < 18) {
    alert("Acesso Negado!");
  }
  //alert("Go!")
  if (idade >= 18) {
    escolhaJogador = prompt("Digite um dos números para jogar: 1 = Pedra, 2 = Papel, 3 = Tesoura. E então, pedra, papel ou tesoura!?");
    escolhaComputador = Math.floor(Math.random() * 3) + 1;

    //empates
    if (escolhaJogador == escolhaComputador) {
      alert("EMPATE!");
    }

    //variaveis 1
    if (escolhaJogador == 1) {
      if (escolhaComputador == 2) 
        alert("Papel! Você perdeu!");
      
      if (escolhaComputador == 3) 
        alert("Tesoura! Você venceu!");
      
    }

    //variaveis 2
    if (escolhaJogador == 2) {
      if (escolhaComputador == 1) 
        alert("Pedra! Você venceu!");
    
      if (escolhaComputador == 3) 
        alert("Tesoura! Você perdeu!");
    }

    //variaveis 3
    if (escolhaJogador == 3) {
      if (escolhaComputador == 1) 
        alert("Pedra! Você perdeu!");

      if (escolhaComputador == 2) 
        alert("Papel! Você venceu!");
    }

    alert("Computador escolheu: " + escolhaComputador);
  }
}

//JOGO DO PISO FALSO
function playpf () {

idade = prompt("Quantos anos você tem?");
  if (idade < 18) {
    alert("Acesso Negado!");
  }
  //alert("Go!")
  if (idade >= 18) {
    
rodada = 1
while(rodada <= 3) {
  console.log("Rodada:" + rodada)
  //rodada = rodada + 1
  
  escolhaJogador = prompt("Você tem três pontes de vidro a sua frente. Digite 1, 2 ou 3 para escolher em qual ponte seguir. Rodada "+rodada+"! Em qual ponte está o piso verdadeiro?")
  pisoQuebrado = Math.floor(Math.random()*3) + 1;
  
  if(escolhaJogador == pisoQuebrado) {
    alert("O vidro quebrou!")
    rodada = 1000
  }
  
  else{
    alert("Passou! Piso quebrado estava na ponte: " + pisoQuebrado)
  }
    
  rodada = rodada + 1
  
  if(rodada == 4) {
  alert("Parabéns! Você venceu!")
}
}
}
}

//JOGO VERSUS

function playversus () {

    idade = prompt("Quantos anos você tem?");
  if (idade < 18) {
    alert("Acesso Negado!");
  }
  //alert("Go!")
  if (idade >= 18) {

  alert("Vamos fazer uma disputa de força?")
  
  //Lista de três personagem.
personagem = ["", "", ""]

viloes = ["", "", ""]

forcaPersonagem = 0
forcaViloes = 0

console.log("Agora seu time contém: " + personagem)

for(let i=0; i<3; i++){
  escolhaPersonagem = prompt("Digite o nome do seu personagem " + (i + 1))
  personagem[i] = escolhaPersonagem
//Calculo e soma dos personagens.
forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1
//"Maneira altarnativa para a mesma função --> forcaPersonagem += Math.floor(Math.random() * 10) + 1
}
alert("Agora seu time contém: " + personagem)
console.log("Vilões: " + viloes)

for(let i=0; i<3; i++){
  indiceAleatorio = Math.floor(Math.random() * 5)
  viloesPossiveis = ["Thanos", "Seong Gi-hun", "Front Man", "Kang Sae-byeok", "Cho Hyun-ju", "Cho Sang-woo", "The Salesman", "Oh Il-nam", "Han Mi-nyeo", "Hwang Jun-ho", "Ali Abdul", "Ji-yeong", "Kim Jun-hee", "Lee Myung-gi", "Kang No-eul", "Kang Dae-ho", "Kim Gi-min", "Kang Mi-na"]
  viloes[i] = viloesPossiveis[indiceAleatorio]
//Calculo e soma dos vilões.
forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1
}
alert("Vilões: " + viloes)

//Comparação times.
if (forcaPersonagem > forcaViloes){
  alert("Você ganhou! Sua força foi " + forcaPersonagem)
}
else{
  if(forcaPersonagem < forcaViloes){
    alert("Você perdeu! Força dos Vilões foi " + forcaViloes)
  }
  else{
    if(forcaPersonagem == forcaViloes){
      alert("Empate! Ambos os times tiveram a mesma força!")
   }
  }
 }
}
}