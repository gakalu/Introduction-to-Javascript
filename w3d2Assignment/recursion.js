"use strict";

exports.power = power;
// exports.countDigits= countDigits;
// exports.reverse=reverse;
//w3d2 Q1
function power(a,b){
    if(b===0){
        return 1;
    }else{
        if(b>0){
        return a*power(a,b-1);
        } 
        return 1/a*power(a,b+1);
    }
}
console.log(power(4,-2));//expected .0.0625
console.log(power(4,2))//expected 16
//w3d2 Q2
// function countDigits(number){
//     if(number===0){
//         return 0;
//     }else {
//         return 1+countDigits(Math.floor(number/10));  
//     }
// }
// console.log(countDigits(456));//expected 3
// //w3d2 Q3
// function reverse(str){
//     if(str===""){
//     return '';
//     }else{
//     return reverse(str.substring(1))+str.substring(0,1);
//     }
// }
// console.log(reverse(" Getachew"));//wehcateG