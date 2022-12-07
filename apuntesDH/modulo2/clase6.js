// arrays 

let stock = ['manzanas', 3, true];

let inventario = ['frutillas', 5, false, stock];

console.log(inventario[3][2]); // entra a stock[pocision 3] y despues entra a la pocicion 2 de stock

console.log('esta es la cantidad de inventario: ' + inventario.length);




//metodos de arrays

let colores = ['blanco', 'negro', 'azul'];

let elUltimoColor = colores.push('violeta', 'naranja'); // .push agraga elementos al final del array 

colores.pop() // .pop elimina el ultimo elemento del array

let elPrimerColor = colores.shift() //.shitf quita el primer elemento del array

colores.unshift('amarillo', 'ocre'); // .unshift agrega elementos al principio del array

// si el valor no esta en el string devuelve -1

colores.splice() //googlear XD

let pocicionPrimero = colores.indexOf('violeta'); // .indexOf busca y devuelve la pocicion en la que esta

let pocicionUltimo = colores.lastIndexOf('negro'); // .lastIndexOf buesca desde el final y devuelve la pocicion en la que esta 

let pocicionExiste = colores.includes('violeta'); // .includes da un valor booleano si encuentra o no el elemento

let coloresJuntos = colores.join(' - '); // .join une el array en 1 string <=> no declaramos la forma de separarlo lo separa con ,  







// metodos de strings

let basico = 'hola mundo !!!'

basico.length; // .length dice la cantidad de caracteres que tiene una cadena de texto

basico.indexOf('mundo'); // .indexOf devulve la pocicion en la que empiesa esa palabra en caso de no ser encontrada da -1

basico.slice(0, 4); // .slice devuelve la frace que se encuentra entre esas pociciones / no modifica el string

basico.trim; // .trim elimina los espacion en blanco antes del primer caracter y despues del ultimo

basico.split(' '); // .split separa en un array el string 

basico.replace('mundo', 'galaxya'); // .replace remprasa la primera palabra por la segunda

