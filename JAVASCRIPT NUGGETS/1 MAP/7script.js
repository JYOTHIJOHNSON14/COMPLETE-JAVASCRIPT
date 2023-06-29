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

const names=peoples.map((person)=>`<h2>${person.name}</h2>`)
const result=document.querySelector("#result")
//result.innerHTML=names;   
// ans: bob 
// , 
// anna 
// , 
// susy

result.innerHTML=names.join('')

//ans:
//MAP METHODS
// bob
// anna
// susy