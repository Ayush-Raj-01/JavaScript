//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Ayush",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// *********************************************************

//             MEMORY

// Stack (primitive) :- When the stack memory is accessed, it gets a copy of the variable that was declared. ,

let myName = "Ayush"

let anotherName = myName
anotherName = "Raj"

console.log(myName);
console.log(anotherName);


// Heap (Non-primitive) :- When any memory is defined under heap, then it gives reference of the original value, which if changed, the original value will change.

let userOne = {
    email: "ayshraj@goolgle.com",
    upi: "user@oksbi"
}

let userTwo = userOne

userTwo.email = "raj@amazon.com"

console.log(userOne.email);
console.log(userTwo.email);
