// Dada una palabra, buscarla en una frase y devolver cuantas veces aparezca
// La frase y la palabra deben ser parametros de una funcion

// Ejemplo: ("hola soy una palabra en la frase PALABRA", "palabra")
// Devuelve 2

// Como hacerlo:
// - Funcion con dos parametros "frase" y "busqueda"
// - poner un string en minusculas y limpiarlo
// - comprobar si la busqueda esta incluida en la frase
// - crear un array de palabras de la frase
// - mapear esas palabras y hacer un contador de cada una
// - devolver el contador de la busqueda

function coinciden(frase, busqueda) {
    let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi, '');
    console.log(texto_limpio);

    let resultado = 0;

    if(texto_limpio.includes('busqueda')) {
        let palabras = texto_limpio.split(" ");
        let mapa = {};

        for(let palabra of palabras) {
            if(mapa[palabra]) {
                mapa[palabra]++;
            } else{
                mapa[palabra] = 1;
            }
        }
        console.log(palabras);
        console.log(mapa);

        resultado = mapa[busqueda];
    } else {
        resultado = 0;
    }

    return resultado;
}
console.log("Numero de coincidencias en la frase: ", coinciden("hola soy victor, de victor", "victor"));