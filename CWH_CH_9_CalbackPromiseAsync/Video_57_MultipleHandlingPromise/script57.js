console.log("start")
let p1= new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Hey i am not resolved")
        resolve(5678)
        //reject(new Error("error froom error"))
    }, 3000);
})


p1.then((value)=>{
    console.log("hurrey")
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("inside new promise")
            resolve(43432111);
        }, 3000);
    })
}).then((value)=>{
    console.log(value)
    console.log("fgh fgh")
})

p1.then((value)=>{
    console.log("congratulation this is from p1.then")
    console.log(value)
}).catch((error)=>{
    console.log("This is from error")
    console.log(error)
})
