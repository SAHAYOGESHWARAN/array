const arrys =[
   [1,2,3],
   [4,5,6],
   [7,8,9],
   '123'
];

const res = arrys.every(arr => Array.isArray(arr));
console.log(res);


//output
//false