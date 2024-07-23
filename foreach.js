// .for each 
const letters =['a','b','c','d',];
let count ={};


letters.forEach(item=> {
   if(count[item]) {
    count[item] ++;
   } else {
    count[item] = 1;
   }
   
});
console.log(count);