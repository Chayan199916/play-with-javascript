/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result gets added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
- If a Player playes two consecutive sixes, next player gets the turn and same rule goes as like playing 1.
- User can set the final score
- There are two dices now. If one of them plays 1, other player will get the chance and prev player's score will get lost

*/
let gameScores, roundScore, activePlayer, prevDice1, prevDice2, dice1, dice2, maxScore;
let activeGame;

let diceElements = document.querySelectorAll(".dice");

let curScoreZero = document.getElementById("current-0");

let curScoreOne = document.getElementById("current-1");
let mainScoreZero = document.getElementById("score-0");
let mainScoreOne = document.getElementById("score-1");
let inputElement = document.querySelector(".final-score");

initializeGame();

document.querySelector(".btn-roll").addEventListener("click", () => {

    if(activeGame){

        dice1 = Math.floor(Math.random() * 6 ) + 1;
        dice2 = Math.floor(Math.random() * 6 ) + 1;

        if((dice1 === 6 && prevDice1 === 6) || (dice2 === 6 && prevDice2 === 6)){

            roundScore = 0;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            activePlayer = Number(!activePlayer);
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");
            diceElements.forEach((diceElement) => {
                diceElement.style.display = "none";
            })

        }

        else if(dice1 !== 1 && dice2 !== 1){

            diceElements.forEach((diceElement) => {
                diceElement.style.display = "block";
            })
            diceElements[0].src = "./assets/images/" + "dice-" + dice1 + ".png";
            diceElements[1].src = "./assets/images/" + "dice-" + dice2 + ".png";
            roundScore += dice1 + dice2;
            document.getElementById("current-" + activePlayer).textContent = roundScore;

        }
        else{

            roundScore = 0;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            activePlayer = Number(!activePlayer);
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");
            diceElements.forEach((diceElement) => {
                diceElement.style.display = "none";
            })

        }
        prevDice1 = dice1;
        prevDice2 = dice2;

    }
    
})

document.querySelector(".btn-hold").addEventListener("click", () => {

    if(activeGame){

        gameScores[activePlayer] += roundScore;
        document.getElementById("score-" + activePlayer).textContent = gameScores[activePlayer];
        
        let input = inputElement.value;

        if(input)
            maxScore = input;
        else
            maxScore = 50;
        
        if(gameScores[activePlayer] >= maxScore){

            document.getElementById("name-" + activePlayer).textContent = "Winner!";
            curScoreZero.textContent = 0;
            curScoreOne.textContent = 0;
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            activeGame = false;
        
        }else{

            roundScore = 0;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            activePlayer = Number(!activePlayer);
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");

        }
        diceElements.forEach((diceElement) => {
            diceElement.style.display = "none";
        })

        
    }

})

document.querySelector(".btn-new").addEventListener("click", () => {

    initializeGame();

})

function initializeGame(){

    if(activeGame === false){

        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("winner");
        document.getElementById("name-" + activePlayer).textContent = "Player " + Number(activePlayer + 1);

    }
    activeGame = true;
    gameScores = [0, 0];
    roundScore = 0;
    diceElements.forEach((diceElement) => {
        diceElement.style.display = "none";
    })
    curScoreZero.textContent = 0;
    curScoreOne.textContent = 0;
    mainScoreZero.textContent = 0;
    mainScoreOne.textContent = 0;
    if(activePlayer === undefined){
        activePlayer = 0;
    }
    document.querySelector(".player-"+ activePlayer + "-panel").classList.remove("active");
    activePlayer = 0;
    document.querySelector(".player-0-panel").classList.add("active");
    inputElement.value = "";

}