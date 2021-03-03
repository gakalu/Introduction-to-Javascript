//w2d2 Q4
let greatestCommonDivisor=function(num1,num2){
  let temp=0;
  if(num2>num1){
      let temp=num2;
      num2=num1;
      num1=temp;

  }
  for(let i=2;i<num1;i++){
      if(num1%i==0&&num2%i==0){
        temp=i;
      }
      if(temp>i){
          temp=i;
      }
  } 
     return temp; 
}
let a=8;
let b=48;
console.log('Greatest Common Divisor of '+ a+' and '+b+' is='+greatestCommonDivisor(a,b));
console.log('===========================================================================');
//w2d2 Q5
let leastCommonMultiple=function (n, m) {
    if (n === m) return n;
    if (m > n) {
     let temp = m; 
     m = n; 
     n = temp;
    }
    for (let i = n ; i < n * m; i += m) {
     if (i % n == 0 && i % m == 0) 
     return i;
    }
    return n * m;
    }
  let n=5;
  let m=3;
  console.log(leastCommonMultiple(n,m));
  console.log('========================================================================');
  //w2d2 Q6
  let leastCommonMultiple2=function(num1,num2){
    let GCD=greatestCommonDivisor(num1,num2);
    return (num1*num2)/GCD;
  }
  a=6;
  b=9;

console.log(leastCommonMultiple2(a,b));
//w2d2 Q7
let compute=function(ad,num1,num2){

    return ad(num1,num2);
}
let add=function(num1,num2){
    return num1+num2;
}
console.log(compute(add,2,3));
