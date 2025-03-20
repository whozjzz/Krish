const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
    e.preventDefault();
    button.classList.add("animate");

    setTimeout(() => {
        button.classList.remove("animate");
    }, 600); // 1s = 1000ms
});

document.getElementById(".button").onclick = function () {
    location.href = "Fireworks.html";}