//w1d4 Q2
let prompt=require('prompt-sync')();
let n=prompt('enter the number: ');
let number=parseInt(n);
for(i=number;i>1;i--){  
console.log(i);
number=number*(i-1);
}
console.log('The factorial of '+n+' ='+number);
