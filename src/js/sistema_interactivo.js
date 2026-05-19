// Practica de javascript: Creación de un sistema interactivo de mensajes
// **********************************************

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

            console.log("Hola " + userName + ", eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!");
            alert("Hola " + userName + ", eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!");

        } else {

            console.log("Hola " + userName + ", eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!");
            alert("Hola " + userName + ", eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!");
        }
    }
}

// // Solicitar el nombre y edad (Basico)

// let userName = prompt("Ingresar su nombre");
// let userEdad = prompt("Ingresar su edad");

// if (userEdad >= 18) { // Verificar si es mayor de edad
//     console.log("Hola " + userName + ", eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!");
//     alert("Hola " + userName + ", eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!");

// } else { // Verificar si es menor de edad
//     console.log("Hola " + userName + ", eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!");
//     alert("Hola " + userName + ", eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!");
// }