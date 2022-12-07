let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

let [cero, ,dos, , cuatro] = numeros;

let  [,uno, ,tres,,cinco,seis,siete,ocho,nueve] = numeros;

let arrayNumeros = [uno, tres, cinco, seis, siete, ocho, nueve];

let mascota = {
    nombre : 'leroy',
    tipoDeMascota : 'perro', 
    color : 'marron',
    raza : 'de la calle '
};
let {nombre, tipoDeMascota, color, raza} = mascota

// console.log(cero,dos,cuatro);
// console.log(arrayNumeros);
console.log(
    `Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipoDeMascota}, de color: ${color} y su raza es:  ${raza}.`
);
