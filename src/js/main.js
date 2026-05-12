// // Creación de un sistema interactivo de mensajes

// // Solicitar el nombre

// let userName = prompt("Ingresa tu nombre:");

// if (userName === "" || userName === null) {
//     console.error("Error: nombre inválido");
//     alert("Debes ingresar tu nombre");
// else {
//         console.log("Hola ", userName);
//     }
// }

// // Solicitar el la edad

// let userAge = prompt("Ingresa tu edad:");

// if (userAge === "" || userAge === null) {
//     console.error("Error: edad inválido");
//     alert("Debes ingresar tu edad");
// } else {
//     console.log("Tu edad: ", userAge);
// }

// // Resultado: Verificar "Si es menor o mayor de edad"

// if (userAge < 18) { // Comprueba si es mayor o menor de edad de un usuario de nombre

//     console.log("Hola" + userName + ", eres menor de edad")
//     alert("Hola " + userName + ", eres menor de edad")
// } else {

//     console.log("Hola" + userName + ", eres mayor de edad")
//     alert("Hola ", + userName + ", eres mayor de edad")
// }

const frutas = ["manzana", "naranja", "cereza", "pera"]

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}
