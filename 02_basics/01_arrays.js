// array

const myArr = [8, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);

// Array methods
// push add the value at the end and pop removes from the end
myArr.push(6)
myArr.push(7)
console.log(myArr);
myArr.pop()

// unshift adds the value from front and shift deletes from the starting 
myArr.unshift(9)
console.log(myArr);
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

// join bindes two array and converts that array to string
const newArr = myArr.join()

console.log(myArr);
console.log( newArr);
console.log(typeof newArr);



// slice, splice
//slice = “copy”
//splice = “cut & paste”


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr);