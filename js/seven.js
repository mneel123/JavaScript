const mynumers = [1,2,3,4,5,6,7,8,9]

//const newnums= mynumers.map((num) => { return num + 10 })
const newnums = mynumers.map((num) => num * 10)
.map((num) => num + 1 )
.filter((num) => num >= 40)
console.log(newnums);