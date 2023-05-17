import { registrar } from "./peticiones.js"; 

const registroForm = document.querySelector(".form--registro");

registroForm.addEventListener("submit", submitRegistro)


async function submitRegistro(e){
    e.preventDefault();
    const nombre = document.querySelector(".form__input--full").value;
    const nss = document.querySelector(".form__input--nss").value;
    const email = document.querySelector(".form__input--email").value;
    const contrasenia = document.querySelector(".form__input--pass").value;
    const edad = document.querySelector(".form__input--edad").value;
    const confirmacion = document.querySelector(".form__input--confirm").value;

    const paciente = {
        nombre,
        edad,
        contrasenia,
        email,
        nss
    }

    try{
        const response = await registrar(paciente);
        alert(response.message)
        window.location.href = "../index.html"
    }catch(e){
        alert(e);
    }
}