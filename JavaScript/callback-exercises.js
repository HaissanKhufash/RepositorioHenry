import {me} from './InherenceProto.js';

function beAbleToDrive(name, age, callback){

    setTimeout(()=>{

        callback(name, age);

    }, 3000);

    console.log('-----We got waiting for the process-----')

}

beAbleToDrive('María', 16, (name, age)=>{

    console.log('The callback has began!\n');

    if(age >= 18) console.log(`${name}, you're able to drive. First you should learn \nto conduce a car...`);
    else console.log(`${name}, you're not ready to drive, wait to grown up, when you \nbecome old aged, you do...`);

    beAbleToDrive(me.name, me.age, (name, age)=>{

        console.log('\n\tThe callback got a second call!\n');

        if(age >= 18) console.log(`\t${name}, you got age necessary to conduce.`);
        else console.log(`\t${name}, wait a long time.`);

    });

});