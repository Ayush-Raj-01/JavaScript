// const tinderUser = new Object()  // singleton object
const tinderUser = {}   //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ayush",
            lastname: "raj"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


// combining objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  // it makes nested insted of one single 

// const obj3 = Object.assign({}, obj1, obj2, obj4)    // it make one single

// another way of above (spread operator)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "ayush"
}

// course.courseInstructor

const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);



//              API formates

//      JSON Example
// {
//     "name": "ayush",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]
