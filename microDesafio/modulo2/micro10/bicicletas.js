let bicicletas = [
    {
        marca: 'Fierce',
        modelo: 'FM18SI29AM211',
        rodado: 26,
        añoDeFabricacion: 2022,
        color: 'negro',
        pesoEnKilogramos: 16,
        tipo: 'paseo',
        precio: 70000,
        vendida: true 
    },
    {
        marca: 'Shifter',
        modelo: 'FM18SI29AM211',
        rodado: 26,
        añoDeFabricacion: 2021,
        color: 'rojo',
        pesoEnKilogramos: 13,
        tipo: 'paseo',
        precio: 55000,
        vendida: true 
    },
    {
        marca: 'Olmo',
        modelo: 'FM18SI29AM211',
        rodado: '26',
        añoDeFabricacion: 2022,
        color: 'azul',
        pesoEnKilogramos: 28,
        tipo: 'montaña',
        precio: 120000,
        vendida: false 
    }
]

bicicletas = JSON.stringify(bicicletas);

console.log(bicicletas);