function startGame() {
    const player1Name = document.getElementById("player1").value;
    const player2Name = document.getElementById("player2").value;

    if (player1Name.trim() === "" || player2Name.trim() === "") {
        alert("Please enter names for both players.");
        return;
    }

    localStorage.setItem("player1Name", player1Name);
    localStorage.setItem("player2Name", player2Name);

    localStorage.setItem("player1Score", 0);
    localStorage.setItem("player2Score", 0);

    window.location.href = "play.html"; 
}

function saveScores(player1Score, player2Score) {
    localStorage.setItem("player1Score", player1Score);
    localStorage.setItem("player2Score", player2Score);
}

function openScoreCard() {
    window.location.href = "scorecard.html";
}

function openRatingPopup() {
    const ratingPopup = document.getElementById('ratingPopup');
    if (ratingPopup) {
        ratingPopup.style.display = 'block';
    }
}

function closeRatingPopup() {
    const ratingPopup = document.getElementById('ratingPopup');
    if (ratingPopup) {
        ratingPopup.style.display = 'none';
    }
}

function submitRating() {
    const ratings = document.getElementsByName('popupRating');
    let selectedRating;
    for (const rating of ratings) {
        if (rating.checked) {
            selectedRating = rating.value;
            break;
        }
    }
    const ratingPlayer= document.getElementById('ratingPlayer').value;
    if (selectedRating && ratingPlayer.trim() !== "" ) {
        const allRatings = JSON.parse(localStorage.getItem("allRatings")) || [];

        allRatings.push({
            player: ratingPlayer,
           
            rating: selectedRating
        });

        localStorage.setItem("allRatings", JSON.stringify(allRatings));

        alert(`You rated us ${selectedRating} stars!`);
        closeRatingPopup();
        window.location.href = "ratings.html";
    } else {
        alert('Please fill in all fields and select a rating before submitting.');
    }
}

function toggleMusic() {
    const audio = document.getElementById("game_sound");
    const musicButton = document.getElementById("musicButton");

    if (audio.paused) {
        audio.play();
        musicButton.textContent = "Mute Music";
    } else {
        audio.pause();
        musicButton.textContent = "Play Music";
    }
}

function showInstructionsPopup() {
    const instructionsPopup = document.getElementById("instructionsPopup");
    if (instructionsPopup) {
        instructionsPopup.style.display = "block";
    }
}

function closeInstructionsPopup() {
    const instructionsPopup = document.getElementById("instructionsPopup");
    if (instructionsPopup) {
        instructionsPopup.style.display = "none";
    }
}
