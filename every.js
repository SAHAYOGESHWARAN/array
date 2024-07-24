const arrys =[
   [1,2,3],
   [4,5,6],
   [7,8,9]
];

const res = arrys.every(arr => Array.isArray(arr));
console.log(res);


//output
//true