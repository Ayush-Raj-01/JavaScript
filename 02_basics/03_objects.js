// singleton - if object is made from constructor , singleton is made 

// Object.create (cnstructor method)


// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Ayush",
    "full name": "Ayush Raj",
    [mySym]: "mykey1",      // to use symbol as a symbol we use this type else it will give string
    age: 18,
    location: "Jaipur",
    email: "Ayush@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "Ayush@chatgpt.com"

// Object.freeze(JsUser)   //  it freezes any upcoming changes

JsUser.email = "Ayush@microsoft.com"
console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());