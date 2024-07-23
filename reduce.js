 const numbers =[1,2,3,4,5];
 const total = numbers.reduce(sum,0);
 function sum(accumulator,value,){
    return accumulator + value;
    }
 console.log(total);