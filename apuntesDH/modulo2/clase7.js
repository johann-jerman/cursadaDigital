// loops 

//for

for ( let i = 0; i < 5; i++){
    console.log(i += 1);
};


for (let i = 0; i < 5; i++ ){
    let res = 'Azul';
    console.log(res);
};


for(var i=1; i<=5; i++) {
    console.log(1 + i);
};

// while

function tablaDeMultiplicar(numero) {
    let x = 1;

    while ( x  <= 10 ){
        resultado = numero * x;
        console.log( numero + ' * ' + x + ' = ' + resultado);
        x++
    };
};

tablaDeMultiplicar(5)