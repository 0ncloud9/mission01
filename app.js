// do something!

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".toggle");
    const nav = document.querySelector("nav");
    const body = document.body;

    if (localStorage.getItem("currentState") === "open") {
        nav.classList.add("active");
    }

    document.body.style.visibility = "visible";
    
    setTimeout(() => {
        body.classList.remove("preload");
    }, 100);

    toggleButton.addEventListener("click", () => {
        nav.classList.toggle("active");
        localStorage.setItem("currentState", nav.classList.contains("active") ? "open" : "closed");
    });
});
