// console.log("code start")
// let p1= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Resolved after 2 second")
//         resolve("yes solved")
//     }, 2000);
// })

// p1.then((value)=>
// {
//     console.log("Console from .then p1")
//     console.log(value)
//     //return new Promise((resolve,reject))=>--we can aslo write it like this 
//     let p2=new Promise((resolve,reject)=>
//     {
//         setTimeout(() => {
//             console.log("resolved from p2 in .then after 2 second")
//             resolve("From p2")
//         }, 2000);
//     })
//     return p2
// }).then((value)=>
// {
//         console.log("we are done froom both side")
//         console.log(value)
//         return 2;
// }).then((value)=>
// {
//     console.log("we are Pkka done ")
//     console.log(value)
//})

//loading a script using promise & .then()

const loadscript=((src)=> {
    return new Promise((resolve,reject)=>{
        console.log("Code start");
        setTimeout(() => {
            let script=document.createElement("script");
    script.src=src;
    document.body.appendChild(script);
    
    script.onload=function () {
        resolve("1111")
    }

    script.onerror=function () {
        console.log("you got some error");
        reject("0000")
    }
            
        }, 2000);
    
})
})

let p1=loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")

p1.then((value)=>{
    console.log("script loaded succefully")
    console.log(value)
}).catch((error)=>{
   console.log(error)
})