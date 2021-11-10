const titulo = document.querySelector("h1");
const botao = document.querySelector("btn-login");
const form = document.querySelector("form");

botao.addEventListener("click",(event) => {
    event.preventDefault ();
    form.classList.add("esconder-form");
    titulo.innerHTML = "oii";
})
