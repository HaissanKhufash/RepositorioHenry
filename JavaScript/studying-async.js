function promiseReturned(num){

    try{

        if(isNaN(num)) throw new TypeError('Insert a number, no other characters');

        return new Promise(resolve => {
            setTimeout(()=>{
                resolve(`${num} ^ 2 is ${num*num}`);
            }, 3000);
        });
    }catch(error){
        return document.getElementById('id').innerHTML = error;
    }

}
async function shownOnScreen(){
    
    let obj = promiseReturned(2);

    obj = promiseReturned(10);

    document.getElementById('id').innerHTML = await obj;
}

shownOnScreen();