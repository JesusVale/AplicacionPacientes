import { iniciarSesion } from "./peticiones.js";

const loginForm = document.querySelector(".form--login");

loginForm.addEventListener("submit", submitLogin)

async function submitLogin(e){
    e.preventDefault();
    const email = document.querySelector(".form__input--email").value;
    const contrasenia = document.querySelector(".form__input--password").value;

    const paciente = {
        email,
        contrasenia
    }

    const resultado = await iniciarSesion(paciente);


    if(resultado){

        const {nss} = resultado;

        localStorage.setItem("pacienteid", nss);

        window.location.href = "../notificaciones.html"
    } else{
        mostrarError("Usuario o Contraseña Incorrectos");
    }

}

function mostrarError(mensaje){
    alert(mensaje);
}

export {
    submitLogin
}