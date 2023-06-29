//print sum of even numbers between 10 to 50

var start=10, end=50;
var sum=0;
while (start<=end) {   // 10<=50, 
    if(start%2==0){   //10%2==0
      sum=sum+start;
    }
    start++;
}
console.log(sum);

//ans:
//630