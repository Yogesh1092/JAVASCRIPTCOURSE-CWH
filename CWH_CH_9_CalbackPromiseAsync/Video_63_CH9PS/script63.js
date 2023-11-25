//Q1

const loadscript=async(src)=>{
    return new Promise((resolve,reject)=>{
    let script=document.createElement("script")
    script.src=src
    script.onload=()=>{
        resolve(src)
    }
    document.head.append(script)
    
})
}
const main2=async()=>{
let a= await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
console.log(a)
}
main2()