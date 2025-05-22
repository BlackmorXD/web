document.addEventListener("DOMContentLoaded", () => {
    const carta = document.getElementById("carta");

    carta.addEventListener("click", () => {
        carta.classList.toggle("abierta");
    });
});
