document.addEventListener("DOMContentLoaded", function() {
    const  countdownElement = document.getElementById("countdown");
    const  playButton = document.getElementById("playButton");
    const  audio = document.getElementById("audio");

    
    function startCountdown() {
        let  count = 5;
        
        playButton.style.display = "none";
        audio.play();
        const  countdownInterval = setInterval(function() {
            countdownElement.textContent = count;
            if (count === 0) {
                clearInterval(countdownInterval);
                
                window.location.href = "memory.html";
            }
            count--;
        }, 1000);
    }

   
    playButton.addEventListener("click", startCountdown);
});
