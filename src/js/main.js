// Creación de un sistema interactivo de mensajes

// Solicitar el nombre
let userName = prompt("Ingresa tu nombre:");

if (userName === "" || userName === null) {
    console.error("Error: nombre inválido");
    alert("Debes ingresar tu nombre");
} else {

    // Solicitar la edad
    let userAge = Number(prompt("Ingresa tu edad:"));

    if (userAge === 0 || isNaN(userAge)) {

        console.error("Error: edad inválida");
        alert("Debes ingresar una edad válida");

    } else {

        console.log("Tu edad:", userAge);

        // Verificar si es menor o mayor de edad
        if (userAge < 18) {

            console.log("Hola " + userName + ", eres menor de edad");
            alert("Hola " + userName + ", eres menor de edad");

        } else {

            console.log("Hola " + userName + ", eres mayor de edad");
            alert("Hola " + userName + ", eres mayor de edad");
        }
    }
}