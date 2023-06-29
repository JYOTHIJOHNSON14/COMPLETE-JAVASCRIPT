const peoples = [
    {
      name: 'bob',
      age: 20,
      position: 'developer',
    },
    {
      name: 'anna',
      age: 25,
      position: 'designer',
    },
    {
      name: 'susy',
      age: 30,
      position: 'the boss',
    }
  ];

//print ages of peoples

const ages=peoples.map((person)=>{
return person.age
})
console.log(ages);

//ans:
//[ 20, 25, 30 ]
