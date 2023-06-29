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

//print ages*2 of peoples

const ages=peoples.map((person)=>person.age*2)
console.log(ages);

//ans:
//[ 40, 50, 60 ]

//whatever retuning from the callback function will be a value in new array