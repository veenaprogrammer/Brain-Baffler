

const cards = document.querySelectorAll(".card");


let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;
let timeCounter = document.getElementById("time-counter");
let flipCounter = document.getElementById("flip-counter");
let timeLeft = 25;
let timer;
let flips = 0;
let gameStarted = false;
let player1Score = 0; 
let player2Score = 0; 
let currentPlayer = 1; 

const flipSound = document.getElementById("flip-sound");
const matchSound = document.getElementById("match-sound");
const mismatchSound = document.getElementById("mismatch-sound");
const timeoutSound = document.getElementById("timeout-sound");

const player1Name = localStorage.getItem("player1Name") || "Player 1";
const player2Name = localStorage.getItem("player2Name") || "Player 2";

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timeCounter.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            saveScores(player1Name, player1Score, player2Name, player2Score)
            alert("Time's up! Game Over.");
            timeoutSound.play();
            restartGame();
        }
    }, 1000);
}

function flipCard({ target: clickedCard }) {
    if (!gameStarted) {
        startTimer();
        gameStarted = true;
    }

    flips++;
    flipCounter.textContent = flips;

    if (cardOne !== clickedCard && !disableDeck) {
        flipSound.play();
        clickedCard.classList.add("flip");
        if (!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
            cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) {
        matchSound.play();
        matched++;
        
        if (currentPlayer === 1) {
            player1Score++;
        } else {
            player2Score++;
        }
        updateScoreDisplay(player1Name, player2Name, player1Score, player2Score); 
        
        if (matched == 8) {
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(() => {
        mismatchSound.play();
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
        
        currentPlayer = currentPlayer === 1 ? 2 : 1;
    }, 1200);
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [
        "1.webp", "2.jpg", "3.webp", "4.webp", "5.jpg", "6.webp", "7.jpg", "8.webp",
        "1.webp", "2.jpg", "3.webp", "4.webp", "5.jpg", "6.webp", "7.jpg", "8.webp"
    ];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `image/${arr[i]}`;  
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();

function updateScoreDisplay(player1Name, player2Name, player1Score, player2Score) {
    const player1ScoreElement = document.getElementById("player1-score");
    const player2ScoreElement = document.getElementById("player2-score");

    
    player1ScoreElement.textContent = ` :${player1Score}`;
    player2ScoreElement.textContent = ` :${player2Score}`;
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("player1NameDisplay").textContent = player1Name;
    document.getElementById("player2NameDisplay").textContent = player2Name;
    updateScoreDisplay(player1Name, player2Name, player1Score, player2Score);
});

function restartGame() {
    clearInterval(timer);
    timeLeft = 25;
    timeCounter.textContent = timeLeft;
    flips = 0;
    flipCounter.textContent = flips;
    player1Score = 0; 
    player2Score = 0; 
    currentPlayer = 1;
    gameStarted = false;
    shuffleCard();
    document.getElementById("player1-score").textContent = ` :${player1Score}`;
    document.getElementById("player2-score").textContent = ` :${player2Score}`;
   
}

function endGame() {
    // saveScores(player1Name, player1Score, player2Name, player2Score);
    window.location.href = "scorecard.html";
}

function saveScores(player1Name, player1Score, player2Name, player2Score) {
    const scores = {
        player1Name ,
        player1Score ,
        player2Name ,
        player2Score 
    };
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push(scores);
    localStorage.setItem("highScores",JSON.stringify(highScores));
    
}
