const coding = ["js","cpp","java","py"]

const values = coding.forEach((item) => {
    //console.log(item);
    return item
})

//console.log(values);

const mynums = [1,2,3,4,5,6,7,8]

const newnums = mynums.filter ((num) => num > 4)
console.log(newnums);