
function playGameSound() {
    const gameSound = document.getElementById("game_sound");
    gameSound.play().catch(error => {
        console.error("Failed to play sound:", error);
    });
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        playGameSound(); 
        window.location.href = "home.html";
    } else {
        document.getElementById("errorMessage").textContent = "Invalid username or password.";
    }
});


window.addEventListener('load', function() {
    
    if (!localStorage.getItem("email") && !localStorage.getItem("password")) {
        localStorage.setItem("email", "user@example.com");
        localStorage.setItem("password", "password123");
    }
});


document.addEventListener("click", function() {
    playGameSound(); 
});
