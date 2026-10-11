// MODO CLARO Y MODO OSCURO
document.addEventListener("DOMContentLoaded", function () {
    const botonTema = document.getElementById("themeToggle");

    if (!botonTema) return;

    const icono = botonTema.querySelector("i");

    function aplicarTema(oscuro) {
        document.body.classList.toggle("modo-oscuro", oscuro);

        if (icono) {
            icono.classList.toggle("fa-moon", !oscuro);
            icono.classList.toggle("fa-sun", oscuro);
        }

        botonTema.setAttribute(
            "aria-label",
            oscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
        );
    }

    const temaGuardado = localStorage.getItem("tema");
    aplicarTema(temaGuardado === "oscuro");

    botonTema.addEventListener("click", function () {
        const estaOscuro = document.body.classList.contains("modo-oscuro");
        const nuevoTemaOscuro = !estaOscuro;

        aplicarTema(nuevoTemaOscuro);
        localStorage.setItem("tema", nuevoTemaOscuro ? "oscuro" : "claro");
    });
});


// MENSAJE DE LOS PRODUCTOS
function mostrarMensaje(producto) {
    alert(
        "Has seleccionado: " + producto +
        "\n\nGracias por visitar Minuta Fresh."
    );
}


// EJEMPLO DE JAVASCRIPT
function mostrarEjemploJS() {
    alert("¡JavaScript funciona correctamente en Minuta Fresh!");
}


// CALIFICAR CUESTIONARIO
function calificarQuiz() {
    const respuestasCorrectas = {
        p1: "b",
        p2: "a",
        p3: "c"
    };

    let puntos = 0;
    let total = Object.keys(respuestasCorrectas).length;

    for (const pregunta in respuestasCorrectas) {
        const seleccionada = document.querySelector(
            'input[name="' + pregunta + '"]:checked'
        );

        if (seleccionada && seleccionada.value === respuestasCorrectas[pregunta]) {
            puntos++;
        }
    }

    alert("Tu resultado es: " + puntos + " de " + total);
}


// ENVIAR MENSAJE A DISCORD DESDE EL FORMULARIO DE CONTACTO
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formContacto");

    if (!formulario) return;

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const mensaje = document.getElementById("mensaje").value;

        // 👇 PEGA TU ENLACE DE DISCORD AQUÍ ENTRE LAS COMILLAS 👇
        const webhookURL = "https://discord.com/api/webhooks/1557746325364412486/hARqnbRxguhCotdpoTwd-Bpl9jXsKJjSdO4-34EN4Uzc9uxhPg5MJxq_qhLmRI_0Gm2z";

        const contenido = {
            content: `📩 **Nuevo mensaje de Minuta Fresh**\n👤 **Nombre:** ${nombre}\n📧 **Correo:** ${correo}\n💬 **Mensaje:** ${mensaje}`
        };

        fetch(webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contenido)
        })
        .then(response => {
            if (response.ok) {
                alert("¡Mensaje enviado con éxito a Discord!");
                formulario.reset();
            } else {
                alert("No se pudo enviar el mensaje, inténtalo de nuevo.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Hubo un error al enviar el mensaje.");
        });
    });
});