//Largest among 3 numbers

var n1=10, n2=20, n3=30 ;
var largest=0;

if(n1>n2 && n1>n3){   
    largest=n1;
}
else if(n2>n1 && n2>n3){
    largest=n2;
}
else if(n3>n1 && n3>n2){
    largest=n3;
}
else if(n1==n2 && n1==n3){
    console.log('all numbers are equal');
}
console.log(largest);

//ans:
// 30 