const myMap = new Map([[1, 'London'], [2, 'Middlesbrough'], [3, 'Manchester']]);

myMap.set(4, 'Liverpool');

console.info('-----ITERATE MAP-----\n')

myMap.forEach((value, key) =>{

    console.log(`${value} belong to the key ${key}`);

});

console.info('\n-----JOIN KEYS-----\n')

myMap.set(5, 'Oxford');

const arrKeys = [...myMap.keys()]; // converting iteretor of keys received into a array.

arrKeys.forEach(val => {

    console.log(`The newest keys after parsing my Map ${val}`);

})
