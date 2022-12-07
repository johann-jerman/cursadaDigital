// json y metodo de array

let notas = [1,2,3,4,5,6,7,8,9,10];

let notasHasta100 = notas.map(function(numero){
    return numero * 10
});

// console.log(notasHasta100);

let notasAprobadas = notas.filter(function(numero){
    return numero >= 7
});

// console.log(notasAprobadas);

let sumasNotas = notas.reduce(function(estado, numero){
    return estado + numero
});

// console.log(sumasNotas);

notas.forEach(function(valor, indice){
    console.log(`en la pocicion ${indice} tengo el valor ${valor}`);
});


// json

let comida = ['milanesa', 'pure', 'tomate', 'salchicha']

let comidaJSON = JSON.stringify(comida);

let comidaOriginal = JSON.parse(comidaJSON);