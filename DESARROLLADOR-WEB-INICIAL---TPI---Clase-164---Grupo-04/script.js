document.addEventListener("DOMContentLoaded", function() {
const form = document.querySelector('#contacto');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Formulario enviado');
    const nombre = document.querySelector('#contacto input[name="nombre"]').value;
    console.log(`Nombre: ${nombre}`);
    const correo = document.querySelector('#contacto input[name="correo"]').value;
    console.log(`Correo: ${correo}`);
    const telefono = document.querySelector('#contacto input[name="telefono"]').value;
    console.log(`Teléfono: ${telefono}`);
    const mensaje = document.querySelector('#contacto textarea[name="mensaje"]').value;
    console.log(`Mensaje: ${mensaje}`);
    const pdf = new jsPDF();
    pdf.text(`Nombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`, 10, 10);
    pdf.save("contacto.pdf");
  });

});