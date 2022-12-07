const importarDatos = require('./colectibles');

const figuras1 = importarDatos('figuras1.json');
const figuras2 = importarDatos('figuras2.json');
const figuras3 = importarDatos('figuras3.json');

const unifiedCollectibles = [...figuras1, ...figuras2, ...figuras3]

let collectibles = {
    unifiedCollectibles,
    listFigures : function(){
            this.unifiedCollectibles.forEach(unifiedCollectibles => {
                console.log(unifiedCollectibles);                  
            });
    },
    figuresByBrand : function (marca){
        let marcaRetornar = 
            this.unifiedCollectibles.filter(function(unifiedCollectibles){
                return unifiedCollectibles.marca === marca
        });
        return marcaRetornar;
    }
}



// console.log(collectibles.retornaFiguras);
// collectibles.listFigures();
// console.log(collectibles.figuresByBrand('Star Wars'), 'este es star wars');
// console.log(collectibles.figuresByBrand('Hot Toys'),  'este es hot toys');
// console.log(collectibles.figuresByBrand('Bandai'),'este es bandai');
// console.log(collectibles.unifiedCollectibles);