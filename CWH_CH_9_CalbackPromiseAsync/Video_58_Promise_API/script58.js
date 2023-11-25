console.log("Start")
let p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 1")
    }, 11000);
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 2")
        //reject( new Error("this is p2 error")) //--we reject for M2
    }, 2000);
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 3")
    }, 3000);
})

// p1.then((value)=>{
//     console.log("inside p1 : " + value)
// })
// p2.then((value)=>{
//     console.log("inside p2 : " + value)
// })
// p3.then((value)=>{
//     console.log("inside p3 : " + value)
// })


// p3.then((value)=>{
//     console.log("inside p3 : " + value)
//     return p1.then((value)=>{
//         console.log("inside p1 : " + value)
//         return p2.then((value)=>{
//             console.log("inside p2 : " + value)
//         })
//     })
// })


//------Methode 1 Promise.all---------
// let promise_all=Promise.all([p1,p2,p3]);
// promise_all.then((value)=>{
//       console.log("All at one time")
//       console.log(value)
// }).catch((error)=>{
//     console.log("Inside catch we find a error :" + error);
// })

//------Methode 2 Promise.allSettled---------
// let promise_all=Promise.allSettled([p1,p2,p3]);
// promise_all.then((value)=>{
//       console.log("All at one time")
//       console.log(value)
// })

//------Methode 3 Promise.race---------jo phle hoga usko de degi aggar error hua toh vhi  ayga
// let promise_all=Promise.race([p1,p2,p3]);
// promise_all.then((value)=>{
//       console.log("All at one time")
//       console.log(value)
// })

//------Methode 4 Promise.any---jo phle resolve hogi vo dega na ki error vali
// let promise_all=Promise.any([p1,p2,p3]);
// promise_all.then((value)=>{
//       console.log("All at one time")
//       console.log(value)
// })

//------Methode 5 Promise.resolve---
// let promise_all=Promise.resolve(9876);
// promise_all.then((value)=>{
//       console.log("All at one time")
//       console.log(value)
// })
//------Methode 6 Promise.reject---
let promise_all=Promise.reject(new Error("My custome error"));
promise_all.then((value)=>{
      console.log("All at one time")
      console.log(value)
})

