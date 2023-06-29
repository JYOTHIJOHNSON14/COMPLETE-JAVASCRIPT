//print sum of numbers b/w 20 to 50

var start=20 , end=50 ;
var sum=0;
while (start<=end) {  //20<=50 , 21<=50,........50<=50
    sum=sum+start;    // 0+20=20, 20+21=41, 41+22=63......
    start++;         // start=21.........start=50
}
console.log(sum);

//ans:
//1085