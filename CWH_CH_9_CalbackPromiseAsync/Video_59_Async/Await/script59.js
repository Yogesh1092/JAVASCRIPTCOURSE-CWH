//   let delhi=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Delhi temp is 27 deg")
//     }, 2000);
//   }) 
//   let mumbai=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Mumbai temp is 21 deg")
//     }, 5000);
//   }) 
//one way to solve this is given below 
//   let allPromise=Promise.all([delhi,mumbai])
//   allPromise.then((value)=>{
//     console.log("All temp at one time is: " + value)
//   })

//   delhi.then((value)=>{
//     console.log(value)
//   })
//    async function harry(){
//     return (9873)
// }
// harry().then((value)=>{
//        console.log(value)
// })
//console.log("end")


//Another way is defined below

  // const yogesh= async ()=>{
    async function yogesh(){

    let delhi=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Delhi temp is 27 deg")
        }, 2000);
      }) 

      let mumbai=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Mumbai temp is 21 deg")
        }, 5000);
      }) 

    //   delhi.then(alert);
    //   mumbai.then(alert)

    let delhiW=await delhi
    console.log("Fetched Delhi Weather: " + delhiW)
    let mumbaiW= await mumbai
    console.log("Fetched Delhi Weather: " + mumbaiW)
    return[delhiW,mumbaiW]
}

console.log("Welcome to online weather--")
// let a=yogesh()
// a.then((value)=>{
//     console.log(value)
// })

// yogesh().then((value)=>{
//     console.log(value)
// })

const charry= async()=>{
    console.log("This is from charry")
}
const main1=async()=>{
    console.log("This is from inside main")
    let a = await yogesh()
    let b= await charry()
    
}

main1()





// async function harry() {
//     let delhiWeather = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     resolve("27 Deg")
//             }, 2000)
//     })

//     let bangaloreWeather = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     resolve("21 Deg")
//             }, 5000)
//     })

//     // delhiWeather.then(alert)
//     // bangaloreWeather.then(alert)
//     console.log("Fetching Delhi Weather Please wait ...")
//     let delhiW = await delhiWeather
//     console.log("Fetched Delhi Weather: " + delhiW)
//     console.log("Fetching Bangalore Weather Please wait ...")
//     let bangaloreW = await bangaloreWeather
//     console.log("Fetched Bangalore Weather: " + bangaloreW)
//     return [delhiW, bangaloreW]
// }

// const cherry = async () => {
//     console.log("Hey I am cherry and I am waiting ")
// }

// const main1 = async () => {
//     console.log("Welcome to weather control room")
//     let a = await harry()
//     let b = await cherry()

// }
// main1()