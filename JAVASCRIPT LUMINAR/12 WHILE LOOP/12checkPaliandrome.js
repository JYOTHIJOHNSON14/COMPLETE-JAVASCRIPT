//check the number is paliandrome or not

var num=123;
var inp=num;
var res="";

while(num!=0){
    let lastDigit=num%10;
    res=res+lastDigit;
    num=Math.floor((num/10));
}
if(inp==res){
    console.log("paliandrome");
}
else{
    console.log("not paliandrome");
}

//ans:
//not paliandrome