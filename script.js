function encode() {
    const inputText = document.getElementById("introducirTexto").value;
    let encodedText = "";

    for (let i = 0; i < inputText.length; i++) {
        const asciiCode = inputText.charCodeAt(i);
        encodedText += asciiCode + " ";
    }
    
    document.getElementById("textoEncriptado").value = encodedText;
    document.getElementById("textoEncriptado").style.backgroundImage = "none"; // Eliminar la imagen de fondo al encriptar
    document.getElementById("introducirTexto").value = ""; // Limpiar el texto de la caja de introducir texto
}

function decode() {
    const encodedText = document.getElementById("introducirTexto").value;
    let decodedText = "";

    const codes = encodedText.split(" ");
    for (let i = 0; i < codes.length; i++) {
        const asciiCode = parseInt(codes[i]);
        decodedText += String.fromCharCode(asciiCode);
    }

    document.getElementById("textoEncriptado").value = decodedText; // Mostrar el resultado en la caja de texto encriptado
}

// Asociar la función de desencriptar al botón correspondiente
document.getElementById("desencriptarBoton").addEventListener("click", decode);


// Funcion para limpiar
function limpiarCaja() {
    document.getElementById("textoEncriptado").value = ""; // Limpiar la caja de texto encriptado
    document.getElementById("introducirTexto").value = ""; // Limpiar la caja de introducir texto
}

// Boton para copiar
function botonCopiar() {
    document.getElementById("textoEncriptado").select();
    document.execCommand('copy');
    limpiarCaja();
}

// Asociar las funciones a los botones
document.getElementById("encriptarBoton").addEventListener("click", encode);
document.getElementById("desencriptarBoton").addEventListener("click", decode);
document.getElementById("copiarBoton").addEventListener("click", botonCopiar);
