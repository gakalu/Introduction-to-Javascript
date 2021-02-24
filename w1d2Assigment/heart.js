//w1d2 Q5
let prompt=require('prompt-sync')();
let n =prompt('enter your age:' );
let age=parseInt(n);
let maximum=220-age;
console.log('=============================================================');
console.log('Fastest rate of the heart beat when exercising is: '+((maximum*0.85).toFixed(2)));
console.log('Slowest rate of the heart beat when exercising is: '+((maximum*0.65).toFixed(2)));