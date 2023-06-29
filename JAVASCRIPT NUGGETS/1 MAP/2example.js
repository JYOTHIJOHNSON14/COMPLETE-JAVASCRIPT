const people = [
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


const ages=people.map(()=>{})
console.log(ages);

//ans:
// [ undefined, undefined, undefined ]
// bcoz not return anything, nothing return in callback function