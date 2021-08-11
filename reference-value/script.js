// objects are passed by reference primitives are passed by value
const beatles = ['John', 'Paul', 'George', 'Ringo'];

function prefix(input) {
	// this is not enough to copy an array
	const copy = input;
	for (let i = 0; i < copy.length; i++) {
		// console.log(copy[i])
		copy[i] = 'Mr ' + copy[i]
	}
	return copy
}

const prefixedBeatles = prefix(beatles);
console.log(prefixedBeatles)
console.log(beatles)

console.clear()

const user = 'bob';
let userCopy = user;

userCopy = 'alice';
console.log(userCopy)
console.log(user)

console.clear()
const arr = [2, 4];
// this is not good enough for a copy
// const arrCopy = arr;
// these 2 options create shallow copies
// using slice
// const arrCopy = arr.slice(0)
// spread operator
const arrCopy = [...arr]


// for more complex arrays
// JSON.stringify() -> this turns an object into a string
// JSON.parse() -> this turns a string into an object
const complexArray = [{ a: 1 }, { a: 2 }];
const complexCopy = JSON.parse(JSON.stringify(complexArray));
console.log(complexCopy)

console.log(arrCopy)
arrCopy.push(6);
console.log(arrCopy)
console.log(arr)

// use this to compare objects for equality 
// we turn the arrays into a string
// JSON.stringify([]) === JSON.stringify([])
