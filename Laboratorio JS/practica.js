    var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    gunterfavoriteFood: "Peces",
    numberOfFeet: 1,
    canFly: true,
    sayHello: function () {
    console.log("QUACK!!!");
    }
   };
   var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    ramonfavoriteFood: "crustáceos",
    numberOfFeet: 2,
    canFly: true,
    sayHello: function () {
    console.log("Estoy encantado de conocerle.");
    }
   };
   var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    fredfavoriteFood: "calamares",
    numberOfFeet: 3,
    canFly: false,
    sayHello: function () {
    console.log("Hi there!");
    }
   }; 
   


   //Arreglo de los pinguinos
   const pinguinos = [gunter, ramon, fred];

   //Nombre en consola de los pinguinos
   for (var x = 0; x < pinguinos.length; x++) {
    console.log("Pinguino: "+ pinguinos[x].name);
   }
   //Aqui se imprime la logitud en consola
   console.log(pinguinos.length);

   //Iterar a cada pinguino
   var min = 1;
   var max = 5;
   for (var x = 0; x < pinguinos.length; x++) {
   var mix =  pinguinos[x].numberOfFeet =  Math.floor(Math.random()*(max-min-1)+min);
   }
   console.log("Valor aleatorio de " + pinguinos[0].name + " es: "+ mix++); 
   console.log("Valor aleatorio de " + pinguinos[1].name + " es: "+ mix++); 
   console.log("Valor aleatorio de " + pinguinos[2].name + " es: "+ mix++); 
   
   
   //Pinguinos que pueden volar | Nota de archivo: El documento dice que no se haga nada por los que no puedan volar.
   for (var x = 0; x < pinguinos.length; x++) {
    if (pinguinos[x].canFly) {
      console.log("¡"+ pinguinos[x].name + " puede volar!");
    }
   }
//Pinguinos con mas de 2 pies
var pies = [];
for (var x = 0; x < pinguinos.length; x++) {
 if (pinguinos[x].numberOfFeet > 2) {
 }
console.log("El pinguino "+ pinguinos[x].name +" tiene mas de 2 pies");
}
//Comidas favoritas de los pinguinos
for (var x = 0; x < pinguinos.length; x++) {
    pinguinos[x].favoriteFoods = ["calamares,", "peces y", "crustáceos"];
   }

   //Segunda comida favorita de los pinguinos | Nota: La 2da comida es peces
console.log("La segunda comida favorita de " + pinguinos[0].name + " es: "+ gunter.gunterfavoriteFood); 
console.log("La segunda comida favorita de " + pinguinos[1].name + " es: "+ ramon.ramonfavoriteFood);
console.log("La segunda comida favorita de " + pinguinos[2].name + " es: "+ fred.fredfavoriteFood);

//Cambio de valor del ultimo elementos a "Piñas"
pinguinos[0].favoriteFoods[2] = "piñas";
pinguinos[1].favoriteFoods[2] = "piñas";
pinguinos[2].favoriteFoods[2] = "piñas";

//Impresión en consolo de comida favorita de pinguinos
for (var x = 0; x < pinguinos.length; x++) {
    console.log("Las comidas favoritas de " + pinguinos[x].name + " son: ");
    for (var f = 0; f < pinguinos[x].favoriteFoods.length; f++) {
      console.log(...pinguinos[x].favoriteFoods);
    }
   }
   



   
   
   






