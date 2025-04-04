/**
 * Akárki is olvassa ezt, sajnálom
 */

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("input, textarea").forEach(input => {
        input.addEventListener("keydown", (event) => {
            let rect = input.getBoundingClientRect();
            for (let i = 0; i < 5; i++) {
                let cursorX = rect.left + (Math.random() * rect.width);
                let cursorY = rect.top + rect.height / 2 + (Math.random() * 10 - 5);

                new TypingExplosion(document.body, cursorX, cursorY);
            }
        });
    });
});

class TypingExplosion {
    constructor(parent, x, y) {
        let emojis = ["🔥", "💥", "⚡"];
        let emoji = emojis[Math.floor(Math.random() * emojis.length)];

        let particle = document.createElement("div");
        particle.className = "particle";
        particle.innerText = emoji;

        let size = Math.random() * 50 + 10;

        particle.style.fontSize = `${size}px`;
        particle.style.position = "absolute";
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.filter = "drop-shadow(0 0 10px rgba(255, 165, 0, 0.8))";

        parent.appendChild(particle);

        // Animate explosion effect
        let angle = Math.random() * 2 * Math.PI;
        let distance = Math.random() * 50 + 20;
        let moveX = Math.cos(angle) * distance;
        let moveY = Math.sin(angle) * distance;

        particle.animate([
            { transform: "scale(1)", opacity: 1 },
            { transform: `scale(${Math.random() * 2 + 1}) translate(${moveX}px, ${moveY}px)`, opacity: 0 }
        ], {
            duration: 600, // Keep it longer
            easing: "ease-out"
        }).onfinish = () => particle.remove();
    }
}
