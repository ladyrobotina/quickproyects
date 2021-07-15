// Ejercicio 1: Dado una cadena de texto, comprobar si es un palindromo o no.
// Los palindromos son palabras que se leen igual aun estando invertidas.
// Por ejemplo: ana, bob, otto

// Como hacerlo?
// 1- Funcion con parametro texto
// 2- separar el texto en un array de letras
// 3- darle la vuelta
// 4- unir el array de letras en un string para comparar con el parametro

function palindromo(texto) {
    let invertido = texto.split("").reverse().join("");

    console.log(invertido);
    return (invertido === texto);
}

console.log("¿Es un palindromo? " + palindromo("otto"));