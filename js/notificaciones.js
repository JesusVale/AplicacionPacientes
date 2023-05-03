import { registrarPermiso } from "./peticiones.js";


const contenedorNotificaciones = document.querySelector(".notificaciones");
let usuario = null;
let websocket = null;

document.addEventListener("DOMContentLoaded", (e) =>{
    const identificador = localStorage.getItem("pacienteid");
    usuario = {
        identificador,
        tipo: "Paciente"

    }
    const usuarioString = JSON.stringify(usuario);
    console.log(usuarioString)
    websocket = new WebSocket(`ws://localhost:8080/ServidorNotificaciones/websocketendpoint/${usuarioString}`)


    websocket.onopen = evt =>{
        //websocket.send(usuarioString);
    }

    websocket.onmessage = manejarMensaje

    websocket.onclose = (e) =>{
        console.log("Se cerró :(")
    }

    
})

function manejarMensaje(evt){
    const mensaje = JSON.parse(evt.data);
    const {tipo, datos} = mensaje
    if(tipo === "Solicitar Expediente"){
        const div = document.createElement("div");
        div.dataset.id = datos;
        const pNombre = document.createElement("p");
        pNombre.textContent = "Doctor Omar"
        const buttonPermiso = document.createElement("button")
        buttonPermiso.textContent = "Dar Permiso"
        buttonPermiso.addEventListener("click", async () => {
            await registrarPermiso({cedulaMedico: datos, idPaciente: usuario.identificador})
            websocket.send(JSON.stringify({
                destinatario: datos,
                evento: "Expediente Subido"
            }))
        })
        div.appendChild(pNombre);
        div.appendChild(buttonPermiso);
        contenedorNotificaciones.appendChild(div);
    }
}
