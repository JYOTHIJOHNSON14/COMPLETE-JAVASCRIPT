//Largest among 3 numbers

var n1=10, n2=20, n3=30 ;
if(n1>n2 && n1>n3){
    console.log(`${n1} is largest`);
}
else if(n2>n1 && n2>n3){
    console.log(`${n2} is largest`);
}
else if(n3>n1 && n3>n2){
    console.log(`${n3} is largest`);
}
else if(n1==n2 && n1==n3){
    console.log('all numbers are equal');
}

//ans:
// 30 is largest