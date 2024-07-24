const str ='1234567';

//[1,2,3,4,5,6,7]

const res = Array.from(str,mapFn);
function mapFn(x){
    return Number(x);

}
console.log(res);


//output
//[ 1, 2, 3, 4, 5, 6, 7 ]