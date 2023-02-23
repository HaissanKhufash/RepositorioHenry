const person = {
    isHuman : false,
    desc : function(name, surname){
            let message = `Hi, my name is ${name} ${surname}`;
            if(this.isHuman){
                message = `${message} and I'm a human`;
            }else{
                message = `${message} and I'm not a human`;
            }
        return message;
    }
};

//Object.freeze(person);
const haissan = Object.create(person);
haissan.isHuman = true;
console.log(person.desc('Haissan', 'Khufash'));