var arr=[10,1,12,2,3,90,7,80,700]

arr.sort(compare);
function compare(n1,n2){
    if (n1<n2) {
        return -1
    } else {
       return 1 
    }
}
console.log(arr);

          //or


//arrow function

arr.sort((n1,n2)=>n1<n2?-1:1)
console.log(arr);


         //or


arr.sort((n1,n2)=>n1-n2)
console.log(arr);


// ans:
// [
//     1,  2,  3,   7, 10,
//    12, 80, 90, 700
//  ]