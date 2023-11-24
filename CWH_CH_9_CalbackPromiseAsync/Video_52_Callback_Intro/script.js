// sychronus function
// let a= prompt("enter 1");
// let b= prompt("enter 2");
// let c= prompt("enter 3");

// console.log(`first ${a} then ${b} and at the last ${c}`);


// async
// console.log("Start");
// setTimeout(() => {
//     console.log("I am inside settime out ")
// }, 2000);

// console.log("end");

//callback

function loadscript(src,callback) {
    var script=document.createElement("script");
    script.src=src;
    
    script.onload=function () {
        console.log("loaded script is :" + src)
        callback(null,src);   
    }
    script.onerror=function () {
        console.log("Error in script :" + src);
        callback(new Error("src got some error"))
    }
    document.body.appendChild(script);
}

function hello(error,src) {
    if (error) {
        console.log(error);
        return
    }
    console.log("Hello from function " +  src);
}
function goodmorning(src) {
    console.log("GM from function" + src);
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",hello);