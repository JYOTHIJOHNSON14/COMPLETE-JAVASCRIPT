//print factorial of 4

var i=1;
var num=4;
var fact=1;
while (i<=num) {  // 1<=4 , 2<=4 , 3<=4 , 4<=4 ,5not<=4
    fact=fact*i;  // 1*1=1 , 1*2=2 , 2*3=6 , 6*4=24
    i++;          // i=2 , i=3 , i=4 , i=5
}
console.log(`factorial of ${num}!=${fact}`);

//ans:
//factorial of 4!=24