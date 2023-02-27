class Person{
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

const target = new Person('null', 'null', 19);

const handler = {
    set(object, property, value){
        const IT_IS_A_NAME = /^[A-zÁÉÍÓÚáéíóúÑñ\s]+$/g;
        if((property === 'name' || property === 'surname') && !(IT_IS_A_NAME[Symbol.match](value))){
            return console.error('Enter a valid name');
        }

        object[property] = value;

    }
}

const proxy = new Proxy(target, handler);

proxy.name = 'Hais san'; proxy.surname = 'Khufash';

console.log(proxy, target);