/* Dada una cadena de texto, darle la vuelta e invertir el orden de sus
caracteres, sin usar metodos propios del lenguaje, solo estructuras
de control 

ejemplo:
invertir ('hola')   // Devuelve 'aloh'

Como hacerlo:
1- Funcion con parametro "texto"
2- Crear una variable para guardar la cadena inveetida
3- Bucle que recorra el string y guarde los caracteres en la variable
*/

function invertir(texto) {

    let invertido = "";

    for(let letra of texto){
        invertido = letra + invertido;
    }

    return invertido;
}

function invertir(texto){
    return texto.split("").reverse().join("");
}

console.log("Texto invertido:", invertir("hola"))