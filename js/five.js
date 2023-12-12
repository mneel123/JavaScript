const coding = ["js","cpp","java","py"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// }  )

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

const mycoding = [
    {
name : "javascript",
fname : "js"
},
{
    name : "cpp",
    fname : "opps"
    },
    {
        name : "python",
        fname : "py"
        },
       

]

mycoding.forEach ((item) => {
    console.log(item.name);
})