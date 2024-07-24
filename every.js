const numbers = [1,2,3,4,5,];

const res =numbers.every(isPositive);


function isPositive(item,index,arr){
    return item > 0;

}

console.log(res);


//output
// true