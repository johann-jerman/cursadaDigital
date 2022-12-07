// micro 1

let cuentaBancaria = [ 1000, -500, 200, -100, 300, -150];

function calculoSaldo(cuenta){
    let saldoPositivo = 0;
    let saldoNegativo = 0;
    let saldoActual = 0;
    
    for ( i = 0; i < cuenta.length; i++){
            if(cuenta[i] >= 0){
                saldoPositivo += cuenta[i];
            }; 
            if(cuenta[i] < 0){
                saldoNegativo += cuenta[i];
            };
    };
    saldoActual = saldoPositivo + saldoNegativo
    return [saldoPositivo , saldoNegativo, saldoActual ]
};

//calculoSaldo(cuentaBancaria);


function mensage(nombre, apellido, array, call){
    saldo = call(array)

    return `${nombre} ${apellido} su saldo es ${saldo[2]} los retiros son ${saldo[1]} y los depositos son ${saldo[0]}`
}

console.log(mensage('johann', 'jerman', cuentaBancaria, calculoSaldo));


//micro 2
function tablaDeMultiplicar(){
    for( i = 0; i <= 10; i++ ){
        tabla = 1 * i;
        console.log('1'+' * '+i+' = '+ tabla);
    };
};

//tablaDeMultiplicar();

//micro opcional

function los10Siguientes(numero){
    for( i = 0; i < 10; i++){
        console.log(++numero);
    }
}
//los10Siguientes(1)

function salta3(numero, numeroFinal){
    for( i = numero; i<=numeroFinal; i+=3){
        console.log(i);
    };
};
// salta3(1,57);

function sumatoria(numero, numero1){
    sumatoria1 = 0
    for( i = numero; i <= numero1; i++){
        sumatoria1 += i 
    }
    console.log(sumatoria1);
}

//sumatoria(1,5)

function letraMayuscula(string){
    let nesesitamos = string.toUpperCase();
    nesesitamos.split(' ')
    return nesesitamos   
}
console.log(letraMayuscula('hola como estas'));

//
let positivo = [1,2,3,4,5,6];

function par(array){
    let resultado = []
    for( i=0; i<=array.length; i++){
        if(i%2 === 0){
            resultado.push(i);
        }
    }
    console.log(resultado);
}

//par(positivo)
