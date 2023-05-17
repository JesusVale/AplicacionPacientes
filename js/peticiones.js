//URL del API Gateway
const URL = "http://localhost:8094"


//Pacientes - Iniciar Sesion
async function iniciarSesion(paciente){
    const pacienteJSON = await fetch(`${URL}/pacientes/login`, {
        method:"POST",
        body: JSON.stringify(paciente),
        headers:{
            "Content-Type":"application/json"
            }
    });
    const resultado = await pacienteJSON.json();
    const status =  pacienteJSON.status

    if(status !== 200){
        throw new Error(resultado.message)
    }
    return resultado;
}

//Pacientes - Registrar
async function registrar(paciente){

    const pacienteJSON = await fetch(`${URL}/pacientes/save`, {
        method:"POST",
        body: JSON.stringify(paciente),
        headers:{
            "Content-Type":"application/json"
        }
    });
    const resultado = await pacienteJSON.json();
    const status = pacienteJSON.status

    if(status !== 200){
        throw new Error(resultado.message)
    }
    return resultado;
}

//Permisos
async function registrarPermiso(permiso){
    try{
        const token = localStorage.getItem('token');
        const permisoJSON = await fetch(`${URL}/permisos/save`, {
            method:"POST",
            body: JSON.stringify(permiso),
            headers:{
                "Content-Type":"application/json",
                'Authorization': `Bearer ${token}`
                
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