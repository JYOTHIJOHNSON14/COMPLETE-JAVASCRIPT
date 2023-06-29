//floor function:- it is used to discard point values. 123%10=12.3 . for discarding point we use Math.floor
//var Math={
//     floor(){
//         //floor
//     }
// } 
// it called as Math.floor

// 123%2==3
// Math.floor((123/10))
// 12
// 12%10
// 2
// Math.floor((12/10))


//qn. reverse the number i/p=123 o/p=321

var num=123;
while(num!=0){
    let lastDigit=num%10;
    console.log(lastDigit);
    num=Math.floor((num/10));
}

//ans:
// 3
// 2
// 1