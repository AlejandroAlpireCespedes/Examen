
let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let edad = parseInt(prompt("Ingrese su edad:"), 10);


if (edad >= 18) {
  alert("Es mayor de edad.");
} else {
  alert("No es mayor de edad.");
}


function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.nombreCompleto = function() {
    return this.nombre + " " + this.apellido + "  ," +this.edad +"años";
  };
}


let persona = new Persona(nombre, apellido, edad);
alert("Nombre completo: " + persona.nombreCompleto());
