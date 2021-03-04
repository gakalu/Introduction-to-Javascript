//w1d5 Q1
function p(n){ // a
    for(let i=2;i<n;i++){
    if(n%i==0){
        return false;
    }
    }
        return true;
    }
let prompt=require('prompt-sync')(); // b
let n=prompt('enter the number: ');
let number=parseInt(n);
console.log(p(number));
