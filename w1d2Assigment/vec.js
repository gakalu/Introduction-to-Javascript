//w1d2 Q4
let prompt=require('prompt-sync')();
let e=prompt('enter the end odometer:')
let Eodometer=parseInt(e);
let b =prompt('enter the begning odometer:'   );
let Bodometer=parseInt(b);
 
let g=prompt('enter the gallons of gas used:')
let gas=parseInt(g);
let result=(Eodometer-Bodometer)/gas;
 if(result>=0){
     console.log('The output is='+result.toFixed(2)+' miles/gallon');
 }else{
     console.log('Error');
 }