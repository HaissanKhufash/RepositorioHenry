function poweredMath(base, exp){
    return({base, result : base ** exp});
}

function* generator(){
    yield poweredMath(4, 4);

    yield poweredMath(3, 7);

    yield poweredMath(10, 2);
}

let iterator = generator();
let count = 1;
for(const y of iterator){
    document.getElementById(`gen${count}`).innerHTML = `base = ${y.base}    result = ${y.result}`;
    count ++;
}


