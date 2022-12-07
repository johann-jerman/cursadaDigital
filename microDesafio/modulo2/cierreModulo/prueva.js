let autosImportados = require('./autos');

let concesionaria = {
autos: autosImportados,

   buscarAuto: function(patente){
      let autoEncontrado = this.autos.find(function(auto){
         return auto.patente == patente;
      })
      return autoEncontrado? autoEncontrado : null;
   },

   venderAuto: function(patente){
      let autoEncontrado = this.buscarAuto(patente);
      autoEncontrado ? autoEncontrado.vendido = true : ""; 
   },

   autosParaLaVenta: function(){
      let autosParaVenta = this.autos.filter(function(auto){
         return !auto.vendido;
      })
      return autosParaVenta;
   },

   autosNuevos: function(){
      let autosParaVenta = this.autosParaLaVenta();
      let autosNuevos = autosParaVenta.filter(function(auto){
         return auto.km < 100;
      })
      return autosNuevos;
   },

   listaDeVentas: function(){
      let autosVendidos = this.autos.filter(function(auto){
         return auto.vendido;
      })
      let preciosAutosVendidos = autosVendidos.map(function(auto){
         return auto.precio;
      });
      return preciosAutosVendidos
   },

   totalDeVentas: function(){
      let preciosAutosVendidos = this.listaDeVentas()
      let totalVentas = preciosAutosVendidos.reduce(function(suma, precio){
         return suma + precio;
      }, 0)
      return totalVentas;
   },
puedeComprar : function(auto, persona){

      let capPagoCuotas = persona.capacidadDePagoEnCuotas;
      let capPagoTotal = persona.capacidadDePagoTotal;

      let precioTotal = auto.precio;
      let numeroDeCuotas = auto.cuotas;
      let valorCuota = precioTotal/numeroDeCuotas;

      return ((capPagoCuotas > valorCuota) && (capPagoTotal > precioTotal));
   },
   autosQuePuedeComprar: function(persona){
      let paraLaVenta = this.autosParaLaVenta();
      let autosComprar = paraLaVenta.filter(function(auto){
         let valorCuota = auto.precio/auto.cuotas;
         return ((persona.capacidadDePagoEnCuotas > valorCuota) && (persona.capacidadDePagoTotal > auto.precio));
         //return this.puedeComprar(auto, persona);
      })
      return autosComprar;
   }
}