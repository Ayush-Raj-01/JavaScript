const user = {
    username: "ayush",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);



// function chai(){
//     let username = "ayush"
//     console.log(this.username);
// }

// chai()


// const chai = function () {
//     let username = "ayush"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "ayush"
    // console.log(this);
}


// chai()


//      arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2       // explicit return
// }

//      implicit return
// const addTwo = (num1, num2) =>  num1 + num2
     
// const addTwo = (num1, num2) => ( num1 + num2 )


const addTwo = (num1, num2) => ({username: "ayush"})       // to return object we need to wrap in parenthesis


console.log(addTwo(3, 4))


