console.log("estamos en el archivo de la calculadora");

var numuno, numdos, suma, resta, multiplicar, dividir;

let resultado= document.getElementById("resultado");

function calcular(){
    numuno = document.getElementById("numuno").value;
    numdos = document.getElementById("numdos").value;

    numuno = Number(numuno);
    numdos = Number(numdos);

    if (numuno == 0 && numdos == 0) {
        alert("Por favor ingresa los numeros para las operaciones");        
    }else{
        suma = numuno + numdos;

    }


    console.log(`La suma de los dos valores es: ${suma}`);

    resultado.innerHTML = `La suma de los dos valores es: ${suma}`;

}

function restar() {

    numuno = document.getElementById("numuno").value;
    numdos = document.getElementById("numdos").value;

    numuno = Number(numuno);
    numdos = Number(numdos);

    resta = numuno - numdos;
    console.log(`La resta de los dos valores es: ${resta}`);

    resultado.innerHTML = `La resta de los dos valores es: ${resta}`;
}

function dividir() {
    numuno = document.getElementById("numuno").value;
    numdos = document.getElementById("numdos").value;

    numuno = Number(numuno);
    numdos = Number(numdos);

    div = numuno / numdos;
    console.log(`La resta de los dos valores es: ${div}`);

    resultado.innerHTML = `La resta de los dos valores es: ${div}`;
    
}

function multiplicar() {
    numuno = document.getElementById("numuno").value;
    numdos = document.getElementById("numdos").value;

    numuno = Number(numuno);
    numdos = Number(numdos);

    multi = numuno * numdos;
    console.log(`La resta de los dos valores es: ${multi}`);

    resultado.innerHTML = `La resta de los dos valores es: ${multi}`;
    
}