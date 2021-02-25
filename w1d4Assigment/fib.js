//w1d4 Q4
let prompt=require('prompt-sync')();
let n=prompt('enter the number of term: ')
let value=parseInt(n);
let sum=0;
let x=0;
let y=1;
console.log(x);
console.log(y);
for(let i=2;i<=value;i++){
sum=x+y;
console.log(sum);
x=y;
y=sum;
    }



