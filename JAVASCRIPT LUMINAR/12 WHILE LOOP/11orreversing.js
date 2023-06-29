//qn. reverse the number i/p=123 o/p=321 ,combine together o/p

var num=123;
var res="";
while(num!=0){
    let lastDigit=num%10;
    res=res+lastDigit;
    num=Math.floor((num/10));
}
console.log(res);

//ans:
//321