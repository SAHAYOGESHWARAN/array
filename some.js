const persons =[{
    name:'saha',
    age: 8
},{
    name:'gokul',
    age:2
},{
    name:'vetha',
    age:8
},
{
    name:'abi',
    age:6
},
{
    name:'stepan',
    age:10
}];

const res = persons.some(isAdult);

function isAdult(person){
    return person.age>= 18;
}

console.log(res);


//output
//false  // the age is less all the persons