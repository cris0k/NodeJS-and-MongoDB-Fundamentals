'use strict';

const EventEmitter = require('events');

//creamos un emisor de eventos
const emisor = new EventEmitter();

emisor.on('llamada de telefono', function(quienLlama) {
  if (quienLlama === 'madre') {
    return;
  }
  console.log('ring ring');
});

// nos suscribimos solo al primer evento que ocurra de este tipo
emisor.once('llamada de telefono', function(quienLlama) {
  console.log('brr brr');
});

emisor.emit('llamada de telefono', 'madre'); // el segundo parametro es informacion sobre el evento. podria ser un objeto, string....
emisor.emit('llamada de telefono', 'madre');
emisor.emit('llamada de telefono', 'madre');

// Podemos hacer que nuestros objetos hereden de EventEmitter() y asi poder usar todos sus métodos. No hace falta crear necesariamente un emisor