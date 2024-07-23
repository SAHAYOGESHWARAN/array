const products = [
    {
        product: 'laptop',
        value: 1000,
      
    },
    {
        product: 'desktop',
        value: 7000,
      
    },
    {
        product: 'mobile',
        value: 17000,
       
    },
    {
        product: 'air buds',
        value: 700,
       
    },
];

products.sort((a,b) => {
    return b.price-a .price;
});
console.log(products);