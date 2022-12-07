let bicicletas = require('./datosBici');

const dhBici = {
    bicicletas,
    buscarBici: function (idBicicleta) {
        let bicicletaDevolver = this.bicicletas.filter(function (bicicleta) {
            return bicicleta.id == idBicicleta
                        
        })
        
        if (bicicletaDevolver.length > 0) {
            return bicicletaDevolver[0]
        }
        
        return null;
    },
}

console.log(dhBici.buscarBici(2));
// console.log(dhBici.buscarBici(3), 'funcion');