const persons =[
    {
        name: 'saha'
    },
    {
        name:'gokul'
    },
    {
        name:'abi'
    },
    {
        name:'stepan'
    },
];

const res = persons.every(person => person.name !== undefined);
console.log(res);


//output
//true