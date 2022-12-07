//variables let, consola tira primero hola mundo y despues hola mundo!! por ser let a diferencia de var que daria hola mundo y hola mundo como vemos despues
let saludo = "hola mundo!!";
if(true){
    let saludo = "hola mundo";
    console.log(saludo);
}
console.log(saludo);
//variable var
var mundo = "hola mundo!!"
if(true){
    var mundo = "hola mundo";
    console.log(mundo);
}
console.log(mundo);

// tipo de variable objetos litarales 
let miComputadora = {
    procesador: "ryzen 3",
    ram: "8 gb",
    otrosValores: null
};

// tipo de variable array
let frutas = ["manzana", "frutillas", "peras", "kiwis", "bananas"];

// operadores
let suma = 5+2; //suma
let resta = 5-2; //resta
let divicion = 5/2; // divicion
let multiplicacion = 5*2; //multiplicacion
let restoDeDivicion = 5%2; //modulo o resto 
let incremento = 5; //aumenta en 1 si tiene ++
let decremento = 5; //disminuye en 1 si tiene -- 

// && and si hay un false es false 
// || or si hay un true es true (|| se hace con altGr + 1 ||)
 
console.log(incremento+'' +decremento);
