const products = [
{
    name:'laptop',
    price:10000,
    color:'black',
    count:5
},{
    name:'desktop',
    price:20000,
    count:2
},{
    name:'phone',
    price:5000,
    count:10
}
];

const totalProductValue =products.map(item => item.price *item.count );


console.log(totalProductValue);