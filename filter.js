const people=[
    {
        name:'saha',
        age:21
    },
    {
        name:'gokul',
        age:18
    },
    {
        name:'stepan',
        age:10

    }
];
const adults = people.filter(person => person.age >=18);
console.log(adults);