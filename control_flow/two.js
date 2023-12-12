const email = "abc@mail.com"
if (email) {
    console.log("got user email");
}
else {
    console.log("Don't have email");
}

//flasy value :
// flase, 0 ,-0 , BigInt 0n, "" ,null ,undefined, NaN
 
//truthy value 
// "0", 'false', "", [] , {} , function(){}

// if (email.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("object is empty");
// }

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);