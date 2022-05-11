console.log("operador Módulo: ");
//operador matemaico del modulo x
let numUno= 100//Number(prompt("introduce un numero para saber si es par o impar: "));

if (numUno % 2 == 0){
    console.log(numUno);
    console.log("el numero ingresado es PAR");
}else{
    console.log("el numero ingresado NO es PAR");
} 

let resultado= numUno/2;
console.log("el resutado de la division es :", resultado); 
//operadores logicos

console.log("==============================");


//funciones
function miFuncion(){
    console.log("Me llamaste para que haga algo");

}
miFuncion();

let numDos=100;
let numTres=200;

function sumar(a, b) {
    let respuesta= a+b
    //return respuesta
    console.log("el resultado de la suma es :", respuesta);
}

sumar(numDos, numTres);

console.log("==============================");

//Bucles

let frutas=[
    "Manzana",
    "Pera",
    "Frutilla",
    "Pera",
    "Mora",
    "Limón",
    "Kiwi"
];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[5]);
console.log(frutas[6]);
console.log("==============================");

for (let index = 0; index < frutas.length; index++) {
    console.log("las frutas son :", index, frutas[index]);    
}

