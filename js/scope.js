let a = 300
if (true) {
    let a = 10
    const b = 20 
    //console.log("inner: ",a);
    
}

//console.log(a);
//console.log(b);
//console.log(c);

function one () {
    const name = "yash"
    function two() {
        const website = "youtube"
        console.log(name);
    }
    //console.log(website);
    two()
}
// one()

if (true) {
    const name = "yash"
    if (name === "yash"){
        const website = "youtube"
        //console.log(name + website);
    }
    //console.log(website);
}
//console.log(name);

function addone (value){
    return value + 1
}
console.log(addone(5));

const addtwo = function(value){
    return value + 2
}

addtwo(5)