let fs = require('fs');

function datos(dato){
    let datos = require(`./${dato}`);
    return datos
}

let datoBici = datos('bicicletas.json')

datoBici = fs.readFileSync(__dirname + '/bicicletas.json', 'utf-8')

datoBici = JSON.stringify(datoBici)
datoBici = JSON.parse(datoBici)
datoBici = JSON.parse(datoBici)

console.log(datoBici);


module.exports = datoBici 