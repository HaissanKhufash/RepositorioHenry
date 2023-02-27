console.warn('-----WEAKSET-----\n');

const weakSet = new WeakSet();

const valueA = {'value' : 100}, valueB = {'value': 10};

weakSet.add(valueA);
weakSet.add(valueB);
weakSet.add({'value' : 1000});

console.log(weakSet.has(valueA));

console.log(weakSet);

console.warn('-----WEAKMAP-----\n');

const weakMap = new WeakMap();

weakMap.set(valueA, valueB);

console.log(weakMap.get(valueA));