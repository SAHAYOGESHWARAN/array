const persons =[
    {
    name:'saha',
    age:26
},{
    name:'gokul',
    age:20
},{
    name:'abi',
    age:18
}
];
const res = persons.find(findFlorin)
function findFlorin(person){
    return person.name === 'saha';
    
}

console.log(res);

//output
//{ name: 'saha', age: 26 }
