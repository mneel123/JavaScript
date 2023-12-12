function sayMyName(){
console.log("Y");
console.log("A");
console.log("S");
console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1,number2){

//     console.log(number1 + number2);
// }


function addTwoNumbers(number1,number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3,5)
// console.log("Result : ",result);

function loginusermsg(name = "yash"){
    if(!name){
        console.log("please enter a username");
        return
    }
    return `${name} just loged in `
}

// console.log(loginusermsg());

function calprice (val1,val2,...num1){
return num1
}

//console.log(calprice(244,400,500));

const user = {
    name : "yash",
    price : 200
}

function handleObject(anyObject){
    console.log(`name is ${anyObject.name} nad price ${anyObject.price}`);
}

handleObject({
    name : "sam",
    price: 399
})

const myNewArray = [200,300,500,600]

function returnSecondvalue(getArray){
    return getArray[3]
}

console.log(returnSecondvalue(myNewArray));