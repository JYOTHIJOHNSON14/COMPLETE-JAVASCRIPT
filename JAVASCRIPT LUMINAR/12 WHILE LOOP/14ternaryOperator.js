//syntax
//condition?true statement:false statement


//check the number is paliandrome or not

var num=121;
var inp=num;
var res="";

while(num!=0){
    let lastDigit=num%10;
    res=res+lastDigit;
    num=Math.floor((num/10));
}
console.log(inp==res?"paliandrome":"not paliandrome");

//ans:
//paliandrome