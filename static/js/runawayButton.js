document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mouseover", (event) => {
            setTimeout(() => {
                let btn = event.target;
                let maxX = window.innerWidth - btn.clientWidth;
                let maxY = window.innerHeight - btn.clientHeight;

                let randomX = Math.max(0, Math.random() * maxX);
                let randomY = Math.max(0, Math.random() * maxY);

                btn.style.position = "absolute";
                btn.style.left = `${randomX}px`;
                btn.style.top = `${randomY}px`;
            }, 250);
        });
    });
});
