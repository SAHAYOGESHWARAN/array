 const numbers =[1,2,3,4,5,6,7,8,9,11,345,65432,];
 const max = numbers.reduce(callback,-Infinity);
 function callback(accumulator,value,) {
    if(accumulator > value){
        return accumulator;
    } else {
        return value;
    }
    }
 console.log(max);