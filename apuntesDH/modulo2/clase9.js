// objetos 

let persona = {
    nombre : 'johann',
    apellido : 'jerman',
    edad : 21,
    nacionalidad : 'argentino',
    estado : function(){
        return this.nombre, this.apellido, ' esta soltero';
    }
};

persona.nombre //pide el nombre de la persona 

//funcion que general objetos

function Curso(nombreIntegrante, nombreProfesor, horarios, dias){
    this.nombreIntegrante = nombreIntegrante
    this.nombreProfesor = nombreProfesor
    this.horarios = horarios
    this.dias = dias
};


let cursoDeProgramacion = new Curso('johann jerman', 'tincho', 'de 19 a 21', 'lunes y martes') 

// modulos 

let fs = require('fs')

let leer = fs.readFileSync(__dirname + '/prueba.txt', 'utf-8')

// console.log(leer);

let paises = require('../pruevaDeModulos') //consultar esto

console.log(paises);