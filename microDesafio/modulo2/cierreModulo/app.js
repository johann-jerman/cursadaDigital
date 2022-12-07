let autosImportados = require("./autos");

let concesionaria = {
   autos: autosImportados,
   buscarAuto: function(patenteAuto){
      let autoEncontrado = this.autos.find(function(auto){
        return auto.patente == patenteAuto
      })
      return autoEncontrado ? autoEncontrado : null
   },

   venderAuto: function(patente){
      let autoEncontrado = this.buscarAuto(patente);
      autoEncontrado ? autoEncontrado.vendido = true : ""; 
   },

   autosParaLaVenta: function(){
      let autosEncontrados = this.autos.filter(function(auto){
         return !auto.vendido 
      })
      return autosEncontrados
   },

   autosNuevos: function(){
      let autosVenta = this.autosParaLaVenta();
      let autoNuevo = autosVenta.filter(function(auto){
        return auto.km <= 100
      }) 
      return autoNuevo
   },
   
   listaDeVentas: function(){
      let autoVendido = this.autos.filter(function(auto){
        return auto.vendido
      })
      let listaVenta = autoVendido.map(function(auto){
        return  auto.precio
      })
      return listaVenta
   },
   
   totalDeVentas: function(){
      let listaVentas = this.listaDeVentas();
      let saldoVenta = listaVentas.reduce(function(acc, auto){
        return acc + auto
      }, 0)
      return saldoVenta
   },

   puedeComprar: function(){
    
   }
};




// console.log(concesionaria.totalDeVentas());