"use strict";

// crear una funcion para usarla como constructor de objetos
function Fruta(nombre) {
    this.nombre = nombre;

    this.saluda = function() {
        console.log('Hola soy un', this.nombre);
    }
}


// crear un objeto con la funcion constructora de objetos
const limon = new Fruta('limon');

console.log(limon);

limon.saluda();