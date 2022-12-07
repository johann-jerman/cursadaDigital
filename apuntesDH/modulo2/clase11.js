//destructuring

// con array

let cursos = ['programacion', 'ux', 'data', 'python']

let [programacion, ux] = cursos

// con objeto

let persona = {
    nombre : 'johann',
    edad : 21,
    domicilio : 'calle falsa 123'
}

let {nombre, edad} = persona;

//spreed operator

// con array

let shonen = ['one piece', 'dragon ball', 'naruto'];

let comedia = ['kobayashi', 'konosuba', 'nichijou'];

let animes = [...comedia, ...shonen];

// con objetos

let generoComedias = {
    nombreGenero : 'comedia',
    popularidad : 3
}

let miPobreAngelito = {
    nombre : 'mi pobre angelito',
    duracion : 120,
    ...generoComedias
}

// con funciones

function peliculasVistas( ...nombreDePelicula ){
    return nombreDePelicula
}














