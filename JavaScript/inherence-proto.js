/*
    CREACIÓN DE UNA FUNCIÓN CONSTRUCTORA
*/

function Person(name, lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.theyWalk = function(boolWalk){
    return (boolWalk) ? `${this.name} ${this.lastName} are able to walk` : `${this.name} ${this.lastName} aren't able to walk`
}
 /*
    HERENCIA PROTOTÍPICA.
 */

function Religeous(name, lastName, age, religion){
    this.super = Person;
    this.super(name, lastName, age);
    this.religion = religion;
}

Religeous.prototype = new Person();
Religeous.prototype.constructor = Religeous;

export let me = new Religeous('Kaiser', 'Khufash', 16, 'Catholic');

// Mostrar resultado en mi página.
document.getElementById("Walk").innerText = me.theyWalk(true);