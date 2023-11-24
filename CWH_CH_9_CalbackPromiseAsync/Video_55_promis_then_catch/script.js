console.log("Code start");

let p1= new Promise((resolve,reject)=>
{
    console.log("Promise pending in p1")
    setTimeout(() => {
        console.log("Promise sucessfully completed")
        resolve(6785)
    }, 3000);  
})
let p2= new Promise((resolve,reject)=>
{
    console.log("Promise pending in p2")
    setTimeout(() => {
        console.log("Promise sucessfully rejected")
        reject(new Error("new error in p2"))
    }, 5000);  
})
console.log(p1,p2);

p1.then((value)=>{
    console.log("under then")
    console.log(value)
})

// p2.catch((error)=>{
//     console.log("some error occured in p2 and catched")
//     console.log("Enjoy now")
// })

p2.then((value)=>
{
    console.log("promise under p2 solved")
},(error)=>{
    console.log("this is from p2 .then error:  " + error)
})
 
 console.log("end")