// Esperar a que el contenido de la página se cargue completamente
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el formulario mediante su ID
    const form = document.getElementById("contactForm");

    // Escuchar el evento de envío del formulario
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario recargue la página al enviarse

        // Obtener los valores de los campos del formulario, eliminando espacios adicionales
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Referencias a los elementos de error y al mensaje de éxito
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");
        const successMessage = document.getElementById("successMessage");

        let isValid = true; // Variable para rastrear si el formulario es válido

        // Ocultar el mensaje de éxito en cada intento de envío
        successMessage.classList.add("hidden");

        // Validación del campo de nombre
        if (name === "") {
            // Mostrar un mensaje de error si el nombre está vacío
            nameError.textContent = "⚠️ Por favor, ingresa tu nombre.";
            nameError.style.display = "block";
            isValid = false; // Indicar que el formulario no es válido
        } else {
            // Ocultar el mensaje de error si el nombre es válido
            nameError.style.display = "none";
        }

        // Validación del campo de correo electrónico
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Patrón para un correo electrónico válido
        if (email === "") {
            // Mostrar un mensaje de error si el correo está vacío
            emailError.textContent = "⚠️ El correo no puede estar vacío.";
            emailError.style.display = "block";
            isValid = false;
        } else if (!email.match(emailPattern)) {
            // Mostrar un mensaje de error si el correo no es válido
            emailError.textContent = "⚠️ Ingresa un correo válido.";
            emailError.style.display = "block";
            isValid = false;
        } else {
            // Ocultar el mensaje de error si el correo es válido
            emailError.style.display = "none";
        }

        // Validación del campo de mensaje
        if (message === "") {
            // Mostrar un mensaje de error si el mensaje está vacío
            messageError.textContent = "⚠️ Escribe un mensaje.";
            messageError.style.display = "block";
            isValid = false;
        } else {
            // Ocultar el mensaje de error si el mensaje es válido
            messageError.style.display = "none";
        }

        // Si todos los campos son válidos, mostrar mensaje de éxito
        if (isValid) {
            successMessage.classList.remove("hidden"); // Mostrar el mensaje de éxito
            successMessage.textContent = "✅ ¡Gracias Me Pondré en Contacto Pronto!";

            // Limpiar los campos del formulario después de 4 segundos
            setTimeout(() => {
                form.reset(); // Reiniciar los campos del formulario
                successMessage.classList.add("hidden"); // Ocultar el mensaje de éxito
            }, 4000); // Tiempo en milisegundos
        }
    });
});
