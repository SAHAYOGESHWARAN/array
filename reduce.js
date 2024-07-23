const store = [
    {
        product: 'laptop',
        value: 1000,
        count: 3
    },
    {
        product: 'desktop',
        value: 7000,
        count: 3
    },
    {
        product: 'mobile',
        value: 17000,
        count: 8
    },
    {
        product: 'air buds',
        value: 700,
        count: 10
    },
];

const totalValueStore = store.reduce((acc, item) => acc + (item.value * item.count), 0);

console.log(totalValueStore);  // Corrected calculation
