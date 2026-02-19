var c = 300     // global scope 
let a = 200
if (true) {
    let a = 10      // block(local) scope cann not be accessed directly outside block
    const b = 20
    console.log("INNER: ", a);
    
}



console.log(a);
// console.log(b);
console.log(c);


//   nested scope 

function one(){
    const username = "ayush"

            // two can access variable from one but one can not
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);        // this will give error as one cannot access from two
 
     two()

}

one()



if (true) {
    const username = "ayush"
    if (username === "ayush") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);    // this will show error
}

// console.log(username);   // this will show error


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5)      // this will throw error as in this function is declared and hold in a variabe 
const addTwo = function(num){
    return num + 2
}