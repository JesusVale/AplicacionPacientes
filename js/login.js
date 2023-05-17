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

    let  resultado
    try{
        resultado = await iniciarSesion(paciente);

        //Guarda el NSS y el token del paciente para que pueda autenticarse
        const {body} = resultado
        const {nss} = body
        const {token} = body
        localStorage.setItem("nss", nss)
        localStorage.setItem("token", token)

        //Te redirecciona al inicio
        window.location.href = "../inicio.html"

    }catch(e){
        mostrarError(e);
    }
}

function mostrarError(mensaje){
    alert(mensaje);
}

export {
    submitLogin
}