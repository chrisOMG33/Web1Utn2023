     alert('¡Bienvenido a la tarea de funciones!');


    // Aqui usando el operador modulo ('%') se verifica si el numero es divisible entre 2
    function numPar(num) {
        if (num % 2 == 0) {
            return "El número es par";
        } else {
            return "El número es impar";
        }
    }
    //El toUpperCase() devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada
    //El toLowerCase() devuelve el valor en minúsculas de la cadena que realiza la llamada
    function CadenaUpperLower(texto) {
        if (texto == texto.toUpperCase()) {
            return "Esta cadena de texto solo posee mayúsculas";
        } else if (texto == texto.toLowerCase()) {
            return "Esta cadena de texto solo posee minúsculas";
        } else {
            return "Esta cadena de texto tiene una combinación de mayúsculas y minúsculas";
        }
    }

    function Palindromo(texto) {
        ///[^a-zA-Z0-9]+/g,'') se utiliza para eliminar todos los caracteres que no son letras o números de una cadena de texto en JavaScript
        texto = texto.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        //slipt separa con comas cada uno de los caracteres
        //reverse invierte el orden de cada uno de los caracteres
        //join devuelve los resultados de la cadena de caracteres
        let inverso = texto.split("").reverse().join("");
        if (texto == inverso) {
            return "La cadena de texto es un palíndromo";
        } else {
            return "La cadena de texto no es un palíndromo";
        }
    }