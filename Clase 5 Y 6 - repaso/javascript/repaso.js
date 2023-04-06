function agregarPersona() {
    let arrayErrores = validarCampos();
    if (!arrayErrores.length) {
        let nombre = document.getElementById('nombre-usuario').value;
        let apellido = document.getElementById('apellido-usuario').value;
        let sexo = document.getElementById('combo-sexo').value;
        let tipoDocumento = document.getElementById('tipo-documento').value;
        let dni = document.getElementById('dni-usuario').value;
        let telefono = document.getElementById('telefono-usuario').value;

        let tabla = document.getElementById("tabla");

        // La tabla se inicializa escondida y si esta escondida, ejecutamos la funcion mostrar tabla.
        if (tabla.style.display === '') {
            mostrarTabla(tabla);
        }

        let fila = tabla.insertRow(tabla.length);
        fila.insertCell().innerHTML = nombre;
        fila.insertCell().innerHTML = apellido;
        fila.insertCell().innerHTML = sexo;
        fila.insertCell().innerHTML = tipoDocumento;
        fila.insertCell().innerHTML = dni;
        fila.insertCell().innerHTML = telefono;

        document.getElementById('nombre-usuario').value = '';
        document.getElementById('apellido-usuario').value = '';
        document.getElementById('combo-sexo').value = '';
        document.getElementById('tipo-documento').value = '';
        document.getElementById('dni-usuario').value = '';
        document.getElementById('telefono-usuario').value = '';
    } else {
        alert(arrayErrores.join('.\n'));
    }
}

function mostrarTabla(tabla) {
    tabla.style.display = 'table';
}

function validarCampos() {
    let arrayErrores = [];

    if (!document.getElementById('nombre-usuario').value) {
        arrayErrores.push('No cargo el nombre');
    }

    if (!document.getElementById('apellido-usuario').value) {
        arrayErrores.push('No cargo el apellido');
    }

    if (!document.getElementById('combo-sexo').value) {
        arrayErrores.push('No cargo el sexo');
    }

    if (!document.getElementById('tipo-documento').value) {
        arrayErrores.push('No cargo el tipo de documento');
    }

    if (!document.getElementById('dni-usuario').value) {
        arrayErrores.push('No cargo el documento');
    }

    if (!document.getElementById('telefono-usuario').value) {
        arrayErrores.push('No cargo el telefono');
    }

    return arrayErrores;
}