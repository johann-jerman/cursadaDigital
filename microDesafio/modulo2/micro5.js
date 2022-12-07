// micro desafio 1

function pagoAlquilerAuto ( tipoDeVehiculo, dias, sillaParaBebe){
    let vehiculo = (tipoDeVehiculo).toLowerCase();
    let precio;
    let precioSilla = 1200
    let resultado;
    let mensage = `Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los ${dias} días utilizados, el monto total a pagar es de` 
    
    if (vehiculo === 'compacto' && dias >= 1 ){
            precio = 14000;
                if(sillaParaBebe === true ){
                    resultado = (precio * dias) + (precioSilla * dias);
                    return mensage +  ' '  + resultado;
                } else {
                    resultado = precio * dias;
                    return mensage +  ' '  + resultado;
                };
    } else if (vehiculo === 'mediano' && dias >= 1 ){
            precio = 17000
                if(sillaParaBebe === true ){
                    resultado = (precio * dias) + (precioSilla * dias);
                    return mensage +  ' '  + resultado;
                } else {
                    resultado = precio * dias;
                    return mensage +  ' '  + resultado;
                }; 
    } else if (vehiculo === 'camioneta' && dias >= 1 ){
            precio = 28000
                if(sillaParaBebe === true ){
                    resultado = (precio * dias) + (precioSilla * dias);
                    return mensage +  ' '  + resultado;
                } else {
                    resultado = precio * dias;
                    return mensage +  ' '  + resultado;
                }; 
        };
};


console.log(pagoAlquilerAuto('compacto', 2, false));

console.log(pagoAlquilerAuto('mediano', 2, false));

console.log(pagoAlquilerAuto('camioneta', 2, false));

// microdesafio 2

function totalPagarCliente (tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla){
    let hamburguesaMinuscula = tipoHamburguesa.toLowerCase()
    let precioCarne = 0;
    let precioJamon = 30;
    let precioQueso = 25;
    let precioSalsaTomate = 25;
    let precioMayonesa = 5;
    let precioMostaza = 5;
    let precioTomate = 5;
    let precioLechuga = 10;
    let precioCebolla = 10;
    let valorHamburguesa = 0;

    switch (hamburguesaMinuscula){
        case 'carne':
            precioCarne = 1800;
            valorHamburguesa = valorHamburguesa + precioCarne;
            break
        case 'pollo':
            precioCarne = 1500;
            valorHamburguesa += precioCarne;
            break;
        case 'vegetariana':
            precioCarne = 1200;
            valorHamburguesa += precioCarne;
            break;       
    }

    jamon ? valorHamburguesa+= precioJamon : valorHamburguesa += 0;

    queso ? valorHamburguesa += precioQueso : valorHamburguesa += 0;

    salsaTomate? valorHamburguesa += precioSalsaTomate : valorHamburguesa +=0;
    
    mayonesa ? valorHamburguesa += precioMayonesa : valorHamburguesa += 0;
    
    mostaza ? valorHamburguesa += precioMostaza : valorHamburguesa += 0;
    
    tomate ? valorHamburguesa += precioTomate : valorHamburguesa += 0;
    
    lechuga ? valorHamburguesa += precioLechuga : valorHamburguesa += 0;
    
    cebolla ? valorHamburguesa += precioCebolla : valorHamburguesa += 0;
    
    return valorHamburguesa;
};




console.log(totalPagarCliente( 'carne', false, false, false, false, false, false, false, false));










// micro desafio extra

function mayuscula (palabra){
    let palabraMayuscula = palabra.toUppercase();
    return palabraMayuscula;
}

function tipoDeDato (dato){
    let tipoDato = typeOf(dato);
    return tipoDato;
}

function edadPerro (añosVividos){
    return añosVividos * 7
}


function horaTrabajada ( salarioMensual2, diasTrabajado2, cantidadHoras2 ){
    resultado = (salarioMensual2 / diasTrabajado2 / cantidadHoras2);
    return resultado;
};
console.log(horaTrabajada (10000, 20, 8 ));


