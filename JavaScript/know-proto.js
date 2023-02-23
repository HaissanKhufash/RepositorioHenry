const proto1 = {
    firstValue : 20,
    secondValue : 10
};

const proto2 = {
    firstValue : 30,
    secondValue : 50
};

let myProto = Object.create(proto1);

if(Object.getPrototypeOf(myProto) === proto2){

    console.log(`The object myProto is proto1 ${Object.getPrototypeOf(myProto)}`);

}else{

    console.log("The object isn't type proto1");

}