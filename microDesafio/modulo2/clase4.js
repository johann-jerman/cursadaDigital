//mircro desafio clase 4

//micro desafio 1

let perfil = "administrador";
let perfilOptimo = perfil.toLowerCase 

switch (perfil){
    case "administrador" || "ADMINISTRADOR" || "Administrador" : 
        console.log("usted tiene todos los pribileguios de uso de sistema");
        break
    case "asistente" || "ASISTENTE" || "Asistente" :
        console.log("usted solo tiene permiso de consultar y registrar datos");
        break;
    case "invitado" || "INVITADO" || "Invitado" :
        console.log("usted solo tiene permiso de consultar datos");
        break;
    case "" :
        console.log("debe especificar el perfil del usuario");
        break;
    default :
        console.log("debe especificar un perfil valido");
};



//micro desafio 2

let pagoMes = 12000;
let consumoKWH = 100;
let tasaDeAumento = pagoMes*1.2;

pagoMes = consumoKWH > 300 ?  console.log("debido a que usted tubo un consumo de " + consumoKWH + ", en base al ajuste tarifario (hogares con consumo mayores a 300 KWH por mes tendran un aumento del 20%), cumplimos con informarle que se a ajustado el total a pagar, que sera de $"+tasaDeAumento) : console.log("usted debe pagar $" + pagoMes);



// micro desafio 3
let palabraTraducir = "gato";

switch(palabraTraducir){
    case "perro" :
        console.log(dog);
        break;
    case "gato" :
        console.log("cat");
        break;
    case "puerta" : 
        console.log("door");
        break;
    case "ventana" :
        console.log("window");
        break;
    case "mesa" :
        console.log("table");
        break;
    default :
        console.log("la palabra ingresada es incorrecta");
};



//micro desafio 4
let operador = "-";
let numero1 = 2;
let numero2 = 6;

switch(operador){
    case "+" :
        console.log("resultado es "+ numero1 + numero2);
        break;
    case "-":
        console.log("resultado es", numero1 - numero2);
        break;
    case  "/":
        console.log("resultado es", numero1 / numero2);
        break;
    case  "*":
        console.log("resultado es ", numero1 *numero2);
        break;
    default:
        console.log("asignar operador");
};  

// micro desafio extra

let velocidad = 268;
let altura = 250;

switch((velocidad >= 268 && velocidad <= 278) && (altura >= 150 && altura <= 300) ){
    case true :
        console.log("puede aterrizar");
        break;
    case false :
        console.log("no puede aterrizar");
        break;
};

let permisoAterrizaje = (velocidad >= 268 && velocidad <= 278) && (altura >= 150 && altura <= 300) ? "permitido" : "denegado";

console.log(permisoAterrizaje);