function fillInNumbers(n){
    return Array(n)
    .fill(0)
    .map((_, idx) => idx + 1);
}

console.log(fillInNumbers(10));


//output
//[1, 2, 3, 4,  5, 6, 7, 8, 9, 10]