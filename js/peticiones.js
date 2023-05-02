const URL = "http://localhost:8094"

//Pacientes
async function iniciarSesion(paciente){

    try{
        const pacienteJSON = await fetch(`${URL}/pacientes/login/email`, {
            method:"POST",
            body: JSON.stringify(paciente),
            headers:{
                "Content-Type":"application/json"
            }
        });
        const resultado = await pacienteJSON.json();
        return resultado;
    } catch(error){
        throw new Error(error);
    }

}

async function registrar(paciente){

    try{
        const pacienteJSON = await fetch(`${URL}/pacientes/save`, {
            method:"POST",
            body: JSON.stringify(paciente),
            headers:{
                "Content-Type":"application/json"
            }
        });
        const resultado = await pacienteJSON.json();
        return resultado;
    } catch(error){
        throw new Error(error);
    }
}

//Permisos

async function registrarPermiso(permiso){
    try{
        const permisoJSON = await fetch(`${URL}/permisos/save`, {
            method:"POST",
            body: JSON.stringify(permiso),
            headers:{
                "Content-Type":"application/json"
            }
        });
        const resultado = await permisoJSON.json();
        return resultado;
    } catch(error){
        throw new Error(error);
    }
}


export {
    iniciarSesion,
    registrar,
    registrarPermiso
}