const numbers = [1, 2, 4, 3, 5];

 const res = numbers.findIndex(findThree);

function findThree(value){
    return value === 3;

}

console.log(res);

//output
// 3 