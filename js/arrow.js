const user = {
    name : "yash ",
    price : 999,
    welcomemsg: function(){
        console.log(`${this.name} welcome to website`);
        console.log(this);
    }

}
// user.welcomemsg()
//  user.name = "sam"
// user.welcomemsg()

//console.log(this);

// function one (){
//     let name = "yash"
//     console.log(this.name);
// }

// one()


// const one =  () => {
//     let name = "yash"
//     console.log(this);
// }

// one()

const addtwo = (num1,num2) => ({name : "yash"})


console.log(addtwo(3,4));

const myArray = [2,5,5,6,8]

// myArray.forEach()