// function showMessage(from, text) { // parámetros: from, text
//     alert(from + ': ' + text);
//    }
//    showMessage('Ann', '¡Hola!'); // Ann: ¡Hola! (*)
//    showMessage('Ann', "¿Cómo estás?"); // Ann: ¿Cómo estás? (**)




//    function showMessage(from, text) {
//     from = '*' + from + '*'; // hace que "from" se vea mejor
//     alert( from + ': ' + text );
//    }
//    let from = "Ann";
//    showMessage(from, "Hola"); // *Ann*: Hola
//    // el valor de "from" es el mismo, la función modificó una copia
//    local
//    alert( from ); // Ann




//    function showMessage(from, text = "sin texto") {
//     alert( from + ": " + text );
//    }
//    showMessage("Ann"); // Ann: sin texto



//    function showMessage(from, text = anotherFunction()) {
//     // anotherFunction() solo se ejecuta si text no fue asignado
//     // su resultado se convierte en el valor de texto
//    }


//    function showMessage(from, text) {
//     if (text === undefined) {
//     text = 'sin texto dado';
//     }
//     alert( from + ": " + text );
//    }

//    function showMessage(from, text) {
//     // Si el valor de "text" es falso, asignar el valor
//    predeterminado
//     // esto asume que text == "" es lo mismo que sin texto en
//    absoluto
//     text = text || 'sin texto dado';
//    }




// function sum(a, b) {
//     return a + b;
//    }
//    let result = sum(5, 5);
//    alert( result ); // 10





// function checkAge(age) {
//     if (age > 18) {
//     return true;
//     } else {
//     return confirm('¿Tienes permiso de tus padres?');
//     }
//    }
//    let age = prompt('¿Qué edad tienes?', 18);
//    if ( checkAge(age) ) {
//     alert( 'Acceso otorgado' );
//    } else {
//     alert( 'Acceso denegado' );
//    } 


// function showMovie(age) {
//     if ( !checkAge(age) ) {
//     return;
//     }
//     alert( "Mostrándote la película" ); // (*)
//     // ...
//    } 
   



//    function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
//     for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextPrime;
//     }
//     alert( i ); // un número primo
//     }
//    }
   

//    function showPrimes(n) {
//     for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;
//     alert(i); // a prime
//     }
//    }
//    function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//     if ( n % i == 0) return false;
//     }
//     return true;
//    } 



//    por declaracion
//    function add(a, b){ return a+b;};add(5,6); //11 


// valor = document.getElementById("campo").value;
// if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
//  return false;
// } 

   

   