//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }

}

//validacion del contacto
function enviarFormularioContacto(e){
    e.preventDefault();
    let inputNombre = document.querySelector("#nombre");
    let inputEmail = document.querySelector("#email");
    let inputMensaje = document.querySelector("#mensaje");
    let inputTema = document.querySelector("#tema");
    let alertFormContacto = document.querySelector("#contacto-form-alert");
    alertFormContacto.classList.remove('show');
    alertFormContacto.classList.add('hide');
    let mensajeAlert = '';
    let validacion = true;
    if(inputNombre.value =='' || inputEmail.value == '' || inputMensaje.value == ''){
        mensajeAlert += 'Por favor complete todos los campos.<br>';
        validacion = false;
    }

    if(inputNombre.value.length>25){
        mensajeAlert += 'El campo nombre no puede tener más de 25 caracteres.<br>';
        validacion = false;
    }
    if(inputMensaje.value.length>200){
        mensajeAlert += 'El mensaje no puede tener más de 200 caracteres.<br>';
        validacion = false;
    }
    if(!validacion){
        alertFormContacto.innerHTML = mensajeAlert;
        alertFormContacto.classList.remove('hide');
        alertFormContacto.classList.add('show');
    }
}