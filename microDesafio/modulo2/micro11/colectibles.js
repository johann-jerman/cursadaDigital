const fs = require("fs");


function importarDatos(params) {
    return require(`./datos/${params}`)
};
// console.log(importarDatos('figuras1.json'));



module.exports = importarDatos