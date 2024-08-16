

// document.addEventListener("DOMContentLoaded", function() {
//     // Display player names wherever necessary
//     document.getElementById("player1NameDisplay").textContent = player1Name;
//     document.getElementById("player2NameDisplay").textContent = player2Name;
    
   

//     // Populate scores table
//     populateScores();
// });

function goBack() {
    window.location.href = "home.html"; 
}

function populateScores() {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    console.log("High Scores from localStorage:", highScores);

    let highestScore=0 ;
    let highestScorer=null ;

    
    highScores.forEach(scores => {
        if (scores.player1Score > highestScore) {
            highestScore = scores.player1Score;
            highestScorer = scores.player1Name;
        }
        if (scores.player2Score > highestScore) {
            highestScore = scores.player2Score;
            highestScorer = scores.player2Name;
        }
    });

    console.log("Highest Score:", highestScore);
    console.log("Highest Scorer:", highestScorer);

    
    document.getElementById("highestScorer").textContent = highestScorer || 'NA';
    document.getElementById("highestScore").textContent = highestScore || 0;

    
    const tableBody = document.getElementById("scoreTableBody");
    tableBody.innerHTML = ""; 

    highScores.forEach(score => {
        const row = document.createElement("tr");
        const player1Cell = document.createElement("td");
        player1Cell.textContent = score.player1Name;
        const player1ScoreCell = document.createElement("td");
        player1ScoreCell.textContent = score.player1Score;

        const player2Cell = document.createElement("td");
        player2Cell.textContent = score.player2Name;
        const player2ScoreCell = document.createElement("td");
        player2ScoreCell.textContent = score.player2Score;

        row.appendChild(player1Cell);
        row.appendChild(player1ScoreCell);
        tableBody.appendChild(row);

        const row2 = document.createElement("tr");
        row2.appendChild(player2Cell);
        row2.appendChild(player2ScoreCell);
        tableBody.appendChild(row2);
    });
}
document.addEventListener("DOMContentLoaded", populateScores);