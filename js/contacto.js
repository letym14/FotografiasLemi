
function sendEmail() {
    // Obtenemos los valores de los campos del formulario
    const nombre = document.getElementsByName('nombre')[0].value;
    const apellidos = document.getElementsByName('apellidos')[0].value;
    const email = document.getElementsByName('correo')[0].value;
    const telefono = document.getElementsByName('telefono')[0].value;
    const asunto = document.getElementsByName('asunto')[0].value;
    const mensaje = document.getElementsByName('mensaje')[0].value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // significa que debe tener un @ y un punto
    const telefonoRegex = /^\d{9}$/; // significa que debe tener 9 dígitos

    // Comprobamos que los campos no estén vacíos y que el email y el teléfono sean válidos
    if (nombre != '' && apellidos != '' && asunto != '' && email != '' && telefono != '') {
        if (emailRegex.test(email) && telefonoRegex.test(telefono)) {
            alert('¡Mensaje enviado con éxito!');
        } else if (emailRegex.test(email) && !telefonoRegex.test(telefono)) {
            alert('Por favor, introduce un teléfono válido.');
            controlCampos();
        } else if (!emailRegex.test(email) && telefonoRegex.test(telefono)) {
            alert('Por favor, introduce un correo electrónico válido.');
            controlCampos();
        } else {
            alert('Por favor, introduce un correo electrónico y un teléfono válidos.');
            controlCampos();
        }
    } else {
        alert('Por favor, rellena todos los campos.');
        controlCampos();

    }
}

function controlCampos() {
    if (nombre == '') {
        nombre.classList.add('error');
    }
    if (apellidos == '') {
        apellidos.classList.add('error');
    }
    if (email == '') {
        email.classList.add('error');
    }
    if (telefono == '') {
        telefono.classList.add('error');
    }
    if (asunto == '') {
        asunto.classList.add('error');
    }
}

// Añadimos el evento click al botón de enviar
const botonEnviar = document.querySelector('.button');
botonEnviar.addEventListener('click', sendEmail);
