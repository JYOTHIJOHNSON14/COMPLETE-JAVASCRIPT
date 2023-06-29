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


const newPeople=peoples.map((item)=>{
    return{
        firstName:item.name.toUpperCase(),
        newAge:item.age+20,
    }
})
console.log(newPeople);

//ans:
// [
//     { firstName: 'BOB', newAge: 40 },
//     { firstName: 'ANNA', newAge: 45 },
//     { firstName: 'SUSY', newAge: 50 }
// ]