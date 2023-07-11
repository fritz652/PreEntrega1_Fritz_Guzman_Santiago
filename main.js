function juegoAdivinarNumero() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let adivinado = false;

    while (!adivinado && intentos < 5) {
        const numeroElegido = parseInt(prompt("Intento #" + (intentos + 1) + ": Adivina el número (del 1 al 100):"));

        if (isNaN(numeroElegido) || numeroElegido < 1 || numeroElegido > 100) {
            alert("Por favor, ingresa un número válido del 1 al 100.");
            continue;
        }

        if (numeroElegido === numeroSecreto) {
            alert("¡Felicitaciones! ¡Adivinaste el número secreto!");
            adivinado = true;
        } else if (numeroElegido < numeroSecreto) {
            alert("El número secreto es mayor. Sigue intentando.");
        } else {
            alert("El número secreto es menor. Sigue intentando.");
        }

        intentos++;
    }

    if (!adivinado) {
        alert("Lo siento, has agotado tus intentos. El número secreto era: " + numeroSecreto);
    }
}

juegoAdivinarNumero();
