const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const header = document.getElementById("header");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.querySelectorAll(".menu a").forEach(enlace => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

const elementos = document.querySelectorAll(".reveal");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("active");
            observador.unobserve(entrada.target);
        }
    });
}, { threshold: 0.15 });

elementos.forEach(elemento => {
    observador.observe(elemento);
});

const formulario = document.getElementById("appointmentForm");
const modal = document.getElementById("confirmationModal");
const cerrarModal = document.getElementById("closeModal");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    modal.classList.add("active");
    formulario.reset();
});

cerrarModal.addEventListener("click", () => {
    modal.classList.remove("active");
});
