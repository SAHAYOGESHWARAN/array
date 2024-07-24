const arr =[1,[2[3,[4,[5]]]]];

// const [1,2,3,4];

const res =arr.flat(Infinity);

console.log(res);



// output
// [1, undefined]  

//output 2
//[1,2,3,4,5]
