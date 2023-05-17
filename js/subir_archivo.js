const form = document.querySelector('.upload-form');

form.addEventListener('submit', subirArchivo)

//Enviar un archivo
async function subirArchivo(e){
    e.preventDefault();

    const url = 'http://localhost:8094/expedientes/uploadFile';
    const token = localStorage.getItem('token');

    const formData = new FormData(form);
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    };

    fetch(url, options)
        .then(response => {
            //Manejar la respuesta
            console.log(response);
            alert("Archivo subido")
        })
        .catch(error => {
            // Manejar el error
            alert("Error")
        });
}