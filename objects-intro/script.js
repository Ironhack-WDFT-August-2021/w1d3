// objects - unordered collection of any various values

const emptyObj = {};

// property: value / key: value

const dog = {
	name: 'Rufus',
	age: 5,
	hobbies: ['eating', 'running'],
	address: {
		street: 'Friedrichstr.',
		city: 'Berlin'
	}
};

console.log(dog.address.street)
// access a value - dot notation
// console.log(dog.name)
// dog.name = 'Hans';
// // adding a property
// dog.height = '40 cm'
// console.log(dog)

// console.log(dog.hobbies[0])


// accessing a property via a variable
const someKey = 'name';
// use the bracket notation
console.log(dog[someKey])

// deleting a property in an object
delete dog.age
console.log(dog)

// checking if a key is present in the object
// <keyAsAString> in <nameOfTheObject>
if ('name' in dog) {
	console.log('this key is there')
}
if (dog.age === undefined) {
	console.log('this key is not there')
}

console.clear();

// iterating over an object

const person = {
	name: 'Alice',
	age: 36,
}

// for in loop
for (let x in person) {
	console.log(person[x])
}

const keys = Object.keys(person);

for (let key of keys) {
	console.log(key)
}

console.log(keys)

const values = Object.values(person);

for (let value of values) {
	console.log(value)
}

console.log(values)

// using forEach
Object.values(person).forEach(function (el) {
	console.log(el)
})
console.clear();
console.log(Object.entries(person)); // -> [['name', 'Alice'], ['age', 36]]

const persons = [
	{
		name: 'mary',
		age: 23
	},
	{
		name: 'bob',
		age: 35
	},
	{
		name: 'alice',
		age: 37,
		'last address': 'Berlin'
	}
];


// iterate over persons and log every name
for (let person of persons) {
	const x = 'name';
	console.log(person['last address'])
}