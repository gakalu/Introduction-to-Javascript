//w1d4 Q1
let prompt=require('prompt-sync')();
let n=prompt('enter the number: ')
let num=parseInt(n);
let count=0;
for(let i=2;i<num;i++){
 if(num%(i)==0){ //Q a
     console.log(num/i);
     count++;   
 }
}
if(count==0){
 console.log('since num is zero count of factor '+num+' is prime number');  
}else{
 console.log('since '+num+' has '+count+' number of factor it is not a prime number');
}
console.log('=================================================================');
let x=parseInt(n);//Q b
for(let k=2;k<x;k++){
    if(x%k==0){
    console.log(x+' is not prime');
        break;
    }else if(x!=k&&x>k){
    console.log(x+' is not prime');
    }     
    }   
     

