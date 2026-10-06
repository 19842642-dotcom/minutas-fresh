```javascript
// ==========================================
// EJEMPLO DE JAVASCRIPT
// ==========================================

function mostrarEjemploJS() {

    alert("¡Elegiste una deliciosa minuta de fresa! 🍓");

}


// ==========================================
// CUESTIONARIO
// ==========================================

function calificarQuiz() {

    let respuestas = {

        p1: "b",
        p2: "a",
        p3: "b",
        p4: "a",
        p5: "a",
        p6: "b",
        p7: "a",
        p8: "b",
        p9: "a",
        p10: "a"

    };


    let puntos = 0;


    for (let pregunta in respuestas) {

        let seleccionada =
            document.querySelector(
                'input[name="' + pregunta + '"]:checked'
            );


        if (seleccionada) {

            if (seleccionada.value === respuestas[pregunta]) {

                puntos++;

            }

        }

    }


    let resultado = document.getElementById("resultado");


    let porcentaje = (puntos / 10) * 100;


    if (puntos >= 8) {

        resultado.innerHTML =
            "🎉 Excelente trabajo. Obtuviste " +
            puntos +
            " de 10 respuestas correctas (" +
            porcentaje +
            "%).";

        resultado.style.background = "#4ECDC4";
        resultado.style.color = "white";

    }

    else if (puntos >= 5) {

        resultado.innerHTML =
            "👍 Buen trabajo. Obtuviste " +
            puntos +
            " de 10 respuestas correctas (" +
            porcentaje +
            "%).";

        resultado.style.background = "#FFE66D";
        resultado.style.color = "#333";

    }

    else {

        resultado.innerHTML =
            "📚 Puedes repasar nuevamente las páginas informativas. " +
            "Obtuviste " +
            puntos +
            " de 10 respuestas correctas (" +
            porcentaje +
            "%).";

        resultado.style.background = "#FF6B6B";
        resultado.style.color = "white";

    }

}
```
