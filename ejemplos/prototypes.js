'use strict';

// definimos una función constructora de objetos
function Persona(nombre) {
  this.nombre = nombre;
}

// construir un objeto
const luis = new Persona('Luis');
const pepe = new Persona('Pepe');

// añadir propiedades al prototipo de las personas
Persona.prototype.saluda = function () {
  console.log('Hola soy', this.nombre);
}

luis.saluda();
pepe.saluda();

// Herencia de persona ---------------------------

function Agente(nombre) {
  // heredar el constructor de las personas
  // llamar al constructor de personas con mi this
  Persona.call(this, nombre);
}

// heredamos propiedades de las personas
Agente.prototype = Object.create(Persona.prototype); // aqui le decimos a Agente que herede del prototipo de Personas. Podra, por ejemplo, saludar, que eso lo hacian las personas
Agente.prototype.constructor = Agente; // aqui le decimos que su constructor sigue siendo Agente, no Persona

const brown = new Agente('Brown');

brown.saluda();

// Herencia múltiple -----------------------------

function Superheroe() {
  this.vuela = function() {
    console.log(this.nombre, 'vuela');
  }
  this.esquivaBalas = function() {
    console.log(this.nombre, 'esquiva balas');
  }
}

// copiamos todas las propiedades de Superheroe al prototipo de Agente
Object.assign(Agente.prototype, new Superheroe()); // Object.asign() asigna todas las propiedades de un objeto sobre otro. 2 parametros, Fuente y el Destino

brown.vuela();
brown.esquivaBalas();