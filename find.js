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
const age = persons.find(findFlorin).age;
function findFlorin(person){
    return person.name === 'saha';
    
}

console.log(age);

//output
//{  age: 26 }
