function powSquare(value){
    // Preveer un error, devolver un aviso
    if(typeof value !== 'number') return Promise.reject(`${value} isn't a valid digit.`); // AVISO
    /* Crear un objeto promesa, establecerle un tiempo de ejecución a su opción de resolución
        que internamente tiene un objeto recibido (anónimo en este caso).*/
    return new Promise((resolve, reject) => { // OBJETO
        setTimeout(()=>
        resolve({
            value,
            result : Math.pow(value, 2)
        }), 0 | 3000);
    });
}
// Llamar a la función donde almacenamos la promesa y especificarle que entonces haga algo en especifico
powSquare(2)
.then(obj =>{ // OBJETO Promise
    console.log(`${obj.value} powered to 2 is ${obj.result}`);
    console.log(obj);
    return powSquare(3); // ====> Valor a tomar el próximo then (3)
})
.then(obj =>{ // OBJETO Promise
    console.log(`${obj.value} powered to 2 is ${obj.result}`);
    return powSquare(4); // ====> Valor a tomar el próximo then (4)
})
.then(obj =>{ // OBJETO Promise
    console.log(`${obj.value} powered to 2 is ${obj.result}`);
    return powSquare('5'); // ====> Valor a tomar el próximo then (5)
})
.then(obj =>{ // OBJETO Promise
    console.log(`${obj.value} powered to 2 is ${obj.result}`);
})
.catch(err=>console.error(err)); // AVISO obtenido debido a un error previsto.