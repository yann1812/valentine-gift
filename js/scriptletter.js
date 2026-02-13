function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    const size = Math.random() * 15 + 10;
    heart.style.fontSize = size + "px";
    const duration = Math.random() * 5 + 5;
    heart.style.animation = `float ${duration}s linear forwards`;
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, duration * 1000);
}
setInterval(createHeart, 500);

let selectedMoodValue = "";

// 2. Fungsi Pilih Mood (Global agar terbaca onclick HTML)
window.selectMood = function(element, mood) {
    document.querySelectorAll('.mood-item').forEach(item => {
        item.classList.remove('selected');
    });
    element.classList.add('selected');
    selectedMoodValue = mood;
};

// 3. Fungsi Kirim WhatsApp (Global agar terbaca onclick HTML)
window.sendWA = function() {
    const storyInput = document.getElementById("storyInput");
    const messageText = storyInput.value;
    const phoneNumber = "6281267581280"; 
    
    if (!selectedMoodValue) {
        alert("Pilih mood kamu dulu ya sayang!");
        return;
    }

    if (!messageText || messageText.trim() === "") {
        alert("Tulis ceritamu sedikit ya!");
        return;
    }
    
    const finalMessage = `Sayanggggg!!!%0A%0A` +
        `Mood Tingting hari ini: *${selectedMoodValue}*%0A` +
        `Hari ini Tingting: ${messageText}%0A%0A` +
        `Tengkiyu sayang! Cepat balas yaaaaa ❤️`;

    window.open(`https://wa.me/${phoneNumber}?text=${finalMessage}`, '_blank');
};

// 4. Logika UI (Setelah DOM Load)
document.addEventListener("DOMContentLoaded", () => {
    const letterbox = document.getElementById("letterbox");
    const envelope = document.querySelector(".envelope");
    const letter = document.getElementById("letter");
    const nxtBtn = document.querySelector(".nxt");
    const tapText = document.getElementById("tap");
    const moodSection = document.getElementById("mood");
    const container = document.getElementById("lettercontainer");

    // Buka Surat
    letterbox.addEventListener("click", () => {
        envelope.style.transform = "rotateX(180deg)";
        envelope.style.zIndex = "1"; 
        if(tapText) tapText.style.opacity = "0";

        setTimeout(() => {
            letter.style.display = "flex";
            requestAnimationFrame(() => { letter.classList.add("slide-up"); });
            setTimeout(() => {
                letterbox.style.opacity = "0";
                setTimeout(() => {
                    letterbox.style.display = "none";
                    if(tapText) tapText.style.display = "none";
                    letter.style.position = "relative";
                    letter.style.transform = "translateX(-50%) translateY(0)";
                    setTimeout(() => {
                        nxtBtn.style.display = "block";
                        nxtBtn.style.animation = "fadeIn 0.5s forwards";
                    }, 500);
                }, 600);
            }, 1000);
        }, 500);
    });

    // Ke Mood Picker
    nxtBtn.addEventListener("click", () => {
        letter.classList.add("fade-out");
        nxtBtn.style.opacity = "0";
        setTimeout(() => {
            container.style.display = "none"; 
            moodSection.style.display = "flex";
            moodSection.style.animation = "fadeIn 0.8s forwards";
        }, 500);
    });
});