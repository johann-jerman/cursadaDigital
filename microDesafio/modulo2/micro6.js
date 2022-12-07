// micro 1 

let electrodomesticos = [ 'microondas', 'heladera', 'cafetera', 'pc', 'television', 'licuadora'];


// acceder de manera aleatoria
console.log(electrodomesticos[0]);

//
let quita = electrodomesticos.shift();
let pone = electrodomesticos.push(quita); 

//
let ponerAlFinal = electrodomesticos.push('ventilador', 'router');

//
let cantidad = electrodomesticos.length;

//
function busqueda (a){
    let busca = electrodomesticos.indexOf(a);
    let buscar = busca > -1 ? 'producto encontrado' : 'el producto buscado no existe';
    return buscar;
};
console.log(busqueda('pc'));

//
let unido = electrodomesticos.join(' ');

//
function tamaño (a){
    let busca = electrodomesticos.indexOf(a);
    let cantidad = busca > -1 ? a.length : 'no existe';
    return cantidad; 
};


//remplasar 
// let remplaso = unido.replace('heladera', 'camara')
console.log(unido);
function a ( a,b){
    return unido.replace(a,b);
}
let unidoCambiada = a('heladera', 'camara');
unidoCambiada = unidoCambiada.replace('pc', 'cd');
unidoCambiada = unidoCambiada.replace('television', 'teleNueva')
console.log(unidoCambiada);
// separacion con ,
let unidifica = unidoCambiada.split(' ')




console.log(unidifica);
console.log(cantidad);
console.log(busqueda('pc'));
console.log(unido);
console.log(tamaño('pc'));
// console.log(remplaso);





//micro 2

let peliculas = ['turno de dia', '30 noches con mi ex', 'betia', 'el monte', 'top gun moverik', 'elvis', 'thor:amor y trueno'];

// sacar y poner primero en mayusculas thor
let peliculaMasVendida = peliculas.indexOf('thor:amor y trueno');
let sacar = peliculas.splice(6,1);
sacar = sacar[0].toUpperCase();
peliculaMasVendida = peliculas.unshift(sacar);

let peliculasNuevas = ['counter-Strike', 'NOP', 'vertigo', 'nick', 'avatar'];

let indiceJuegos = peliculasNuevas.indexOf('counter-Strike');
let sacarJuegos = peliculasNuevas.splice(indiceJuegos,1);

function agrupar(agrega1,agraga2){
    return agrega1.concat(agraga2);
}
peliculas = agrupar(peliculas, peliculasNuevas);

console.log(peliculas);
