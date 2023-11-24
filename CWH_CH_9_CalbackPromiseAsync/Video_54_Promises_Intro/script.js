console.log("Hello")

setTimeout(function(){
    console.log("hello from settime out in 2 sec")
}, 2000);
console.log("My name is john cena");
let promise =new Promise(function(resolve,reject){
    console.log("hello froom promise")
    resolve(67)  // this is a value
    //reject(true,98)--we have to handle the error when rejected
})
console.log(promise)