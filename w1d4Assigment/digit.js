//w1d4 Q5
let prompt=require('prompt-sync')();
let n=prompt('enter the number: ');
let sum=0;
for(let i=0;i<n.length;i++){
let value=n.substring(i,i+1);
let num=parseInt(value);
sum+=num;
}
console.log('The sum of the digit is='+sum);