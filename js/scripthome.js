document.addEventListener("DOMContentLoaded", () => {
    const login = document.getElementById("log");
    const error = document.getElementById("error");
    let wrongCount = 0;
    const wrong = [
    "Try Again My Love!",
    "Remember it carefully Honey!",
    "Take your time my girl, don't rush!",
    "Maybe check your spelling babe?",
    "One more try! You can do it, dear!"
];

login.addEventListener("click", () => {
    const usn = document.getElementById("usn").value;
    const pw = document.getElementById("pw").value;

if (usn === "yiiting_" && pw === "18122025") {
    window.location.href = "letter.html"; 
    } else {
        if (wrongCount < wrong.length) {
            error.innerText = wrong[wrongCount];
            wrongCount++; 
        } else {
            error.innerText = "'18122025' is the key, baby!";
        }
        document.getElementById("pw").value = "";
        }
    });

function create() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    
    heart.style.left = Math.random() * 100 + "vw";
    const size = Math.random() * 15 + 10;
    heart.style.fontSize = size + "px";
    const duration = Math.random() * 5 + 5;
    heart.style.animation = `float ${duration}s linear forwards`;
    document.body.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
    setInterval(create, 500);
}); 