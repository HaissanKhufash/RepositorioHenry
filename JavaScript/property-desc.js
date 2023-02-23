let object, ownP;

object = {
    get foo() {return 47;}
};

ownP = Object.getOwnPropertyDescriptor(object, 'foo');

console.log(ownP);

object = {
    value : 19
};

ownP = Object.getOwnPropertyDescriptor(object, 'value');

console.log(ownP);

