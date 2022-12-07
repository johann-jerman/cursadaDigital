//micro 1

let peliculas = require('./peliculas')

                                         

for (let i = 0; i < peliculas.length; i++) {
    console.log(
        peliculas[i].id,
        peliculas[i].rating, 
        peliculas[i].duracion, 
        peliculas[i].precio, 
        peliculas[i].genero
        );
}

let mensage = fs.readFileSync(__dirname + '/mensage.txt', 'utf-8')

console.log(mensage);

