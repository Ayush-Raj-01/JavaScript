// Immediately Invoked Function Expressions (IIFE)

// it helps function to immediately execute BUT ( global scope ke pollution se problem hoti hai kai bar toh uss gobal scope ke variable oa jo v declaration hai uske pollution ko hatane ke lia iife ka use kia )

// named iife
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// unnamed iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
