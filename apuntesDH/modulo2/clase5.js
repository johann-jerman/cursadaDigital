// funciones normales function nombreFuncion(paramtro){ codigo }

function tengoClases(dia) {
	switch (dia) {
    	case 'lunes' : 
			console.log ('tenes clases');
			break;
		case 'miercoles' :
	  		console.log ('tenes clases');
			break;
		case 'viernes' :
			console.log ('tenes clases');
			break;
		default :
			console.log ('no tenes clases' );
	}
};

tengoClases(''); // no hace falta hacer un cosole.log() caundo la funcion lo hace al llamarla 

// arrow functio son como variables
// let nombreFuncion= (parametro(parentesis <=> sin o >2 parametros)) => {codigo};

let suma= (a,b) => a + b; 

let diaCursada= dia => {
    if(dia == 'martes' || dia == 'jueves'){
        return 'cursas';
    }
    else{
        return 'no cursas';
    }
};


let frutas = () => ["manzana", "pera", "anana", "naranja", "banana"];

//callback

let sumar = (numero1, numero2) => numero1 + numero2;

let resta = (numero1, numero2) => numero1 - numero2;

let multiplicacion = (numero1, numero2) => numero1 * numero2;

let division = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1, numero2, callBack) => callBack(numero1, numero2);

console.log(calculadora(3,6,sumar));