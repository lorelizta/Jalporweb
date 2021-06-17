window.onload = iniciarEventos();

function iniciarEventos() {
    document.querySelector(".menu-btn").addEventListener("click", mostrarMenu);
    
}
function mostrarMenu() {
    var menu = document.querySelector(".menu-container");
    menu.classList.toggle('show'); //quita y pone la clase
    
    var texto = (document.querySelector(".menu-btn").textContent === "Menu") ? "X" : "Menu";//Operdador ternario
    
    document.querySelector(".menu-btn").textContent = texto;
}

function cerrarMenu() {
    var menu = document.querySelector(".menu-container");
    menu.classList.toggle('show'); //quita y pone la clase
    
    var texto = (document.querySelector(".menu-btn").textContent === "X") ? "Menu" : "X";//Operdador ternario
    
    document.querySelector(".menu-btn").textContent = texto;

}




function irInicio() {
    window.scrollTo({top: 0, behavior: "smooth"})
 }

botonUp = document.getElementById("boton-up");
window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;

    if (scroll > 500) {
        botonUp.style.transform = "scale(1)";
    } else if (scroll < 500) {
        botonUp.style.transform = "scale(0)";
    }
}