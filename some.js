const numbers =[1,2,3,4,5];

const res = numbers.some(greaterThanFour);

function greaterThanFour(item){
    return item > 4;
}
console.log(res);

//output
// true