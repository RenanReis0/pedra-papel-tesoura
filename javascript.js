const btnPedra = document.querySelector("#jogue-pedra")
const btnPapel = document.querySelector("#jogue-pedra")
const btnTesoura = document.querySelector("#jogue-pedra")



let humanScore = 0;
let computerScore = 0;
let empates = 0


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber){
        case 0:
            return "pedra"
        case 1:
            return "papel"
        case 2:
            return "tesoura"
    }
}

function getHumanChoice(){
    
}

function playRound(computerChoice, humanChoice) {
    if (
        (computerChoice === "pedra" && humanChoice === "papel")||
        (computerChoice === "papel" && humanChoice === "tesoura")||
        (computerChoice === "tesoura" && humanChoice === "pedra")
    ){
        humanScore++;
        alert(`${humanChoice} vence ${computerChoice}. jogador ganhou!`);
    } else if (
        (computerChoice === "pedra" && humanChoice === "tesoura")||
        (computerChoice === "papel" && humanChoice === "pedra")||
        (computerChoice === "tesoura" && humanChoice === "papel")
    ){
        computerScore++
        alert(`${computerChoice} vence ${humanChoice}. Computador ganhou!`)
    } else if(computerChoice == humanChoice){
        alert(`Deu empate!`)
        empates++
    }
    
}




function playGame(){
    for(let p = 1; p<=5; p++){
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice);
        
    }
    if(humanScore>computerScore){
        alert(`Pontuação jogador: ${humanScore}.`+"\n"+`Pontuação computador: ${computerScore}.`+"\n"+`Empates: ${empates}`+"\n"+`Jogador ganhou!`);
    } else{
        alert(`Pontuação jogador: ${humanScore}.`+"\n"+`Pontuação computador: ${computerScore}.`+"\n"+`Empates: ${empates}`+"\n"+`Computador ganhou!`);
    }
    
}
playGame()