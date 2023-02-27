// When we've got a data structure iterable, we can get an iterator from that one
const iterableOne = new Set([1, 2, 3, 3, 4, 5, 6, 6, 18, 20, 20]);

const iterableTwo = new Map([[1, 'Greeting No. One: Hi'], [2, 'Greeting No. Two: How are you?']]);

// Integrate the next method to our iterator
const iteratorFromOne = iterableOne[Symbol.iterator]();
let nextFromOne = iteratorFromOne.next();

const iteratorFromTwo = iterableTwo[Symbol.iterator]();
let nextFromTwo = iteratorFromTwo.next();

while(!nextFromOne.done){
    console.log(`Getting value from nextFromOne : ${nextFromOne.value}`);
    nextFromOne = iteratorFromOne.next();
}

console.log(`\nObject belonging to the first next from iteratorFromTwo : ${iteratorFromTwo}`);