


var num=5;
var nombre="Pedro";
let bandera=true;
console.log(num);
console.log(nombre);
console.log(bandera);
var edad=21;

if(5>3){

    // let variables en su scope=ambito
    // var variables globales
    let edad=50;

    console.log(edad);

}
// console.log(edad);
// tipos
// string
// number
// boolean
// arrays
// objetos
// COERCION

if(5!=="5"){
    console.log("ENTROOO...");
}

const persona={
    cedula:604710635,
    nombre:"Christopher",
    apellido1:"Carmona",
    edad:50
}
console.log(persona);
var tieneApellido=persona.hasOwnProperty("apellido1");
console.log(tieneApellido);
console.log(persona.apellido1);

//VALOR INDEFINIDO VA FALSO
if (persona.apellido2){
    console.log(persona.apellido2);
} else{

console.log("No tiene apellido 2");
}

//CONCATENAR  +, STRING TEMPLATE

const mensaje=`El mensaje es, el nombre de la persona es: ${nombre}, y la edad: ${edad}`;

console.log(mensaje);

const lista=["rojo","azul","verde","amarillo"];

//spread(quita los valores de la lista)
console.log(lista[2]);

lista.forEach((valor,value)=>{
    const mensaje=`El color es: ${valor}, en la posicion: ${value}`
    console.log(mensaje);
}
);

lista.map((valor, indice)=>{

    if(valor=="rojo"){
        console.log("SI ES ROJO...")

    }else {
        console.log("ES OTRO COLOR,"+valor)
    }
}
);

const listaPersonas=[
    {
        cedula:1,
        nombre:"Christopher",
        apellido1:"Carmona",
        edad:50
    },
    {
        cedula:2,
        nombre:"Maria",
        apellido1:"Rodriguez",
        edad:45
    },
    {
        cedula:3,
        nombre:"John",
        apellido1:"Wick",
        edad:40
    },
    {
        cedula:4,
        nombre:"Aurora",
        apellido1:"Blackwood",
        edad:25
    },
    {
        cedula:5,
        nombre:"Vlad",
        apellido1:"Tepes",
        edad:70
    }

]

const results=listaPersonas.map((persona, index)=>{

    const nombre= `${persona.nombre} ${persona.apellido1}`;
    return {
        cedula:persona.cedula,
        nombreCompleto:nombre,
        edad:persona.edad
    }
    //se aplican filtros
}).filter(x=>x.edad>30);
console.log(...results);

// while(edad>49){

//     edad=15
// }

function calcular(num1,num2){
    return num1+num2;

}

console.log(calcular(5, 10));