    // promise creation 
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()   // connects resolve with then
    }, 1000)
})

    // promise consuption
    // then have direct connection with resolve 
promiseOne.then(function(){
    console.log("Promise consumed");
})

    // another way of creating promise without storing in variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Ayush", email: "ayussshhraj@gmail.com"})     // we can pass parameter/data in this 
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Ayush", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

    // this is chaining .. upper wale .then mai se jo value retun hoke aayega . whi 2nd .then mai aayega
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);     // and by this console.log the real value of username will be printed
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))    // this is almost kind of default (ye toh hoga hi hoga )



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

    // using another approach by async and await
    // async await cannot handle errors directly so we use try catch 
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()



async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        // response.json() takes time in conversion so we wrap it in await
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()


        // another way of doing this above part using fetch()
        // as this is executed on the top because fetch() is given the priority (it is like a vip)
fetch('https://api.github.com/users/Ayush-Raj-01')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
