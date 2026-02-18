const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// there is another way to write using "Spread" operator 
// it has no limits to add

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

// flat is used to remove nesting inside arrays and make it into one array.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Ayush"))

// from makes string to array
console.log(Array.from("Ayush"))
console.log(Array.from({name: "ayush"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

// Of:- It creates an array from the arguments you give, no matter how many items.
console.log(Array.of(score1, score2, score3));