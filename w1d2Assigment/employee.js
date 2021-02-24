//w1d2 Q3
let prompt=require('prompt-sync')();
let m =prompt('enter the total number of box:'   );
let totalbox=parseInt(m);
let n=prompt('enter the number of boxes in each stack:')
let boxperstack=parseInt(n);
let result=totalbox%boxperstack;
if(result==0){
    console.log('The output is= '+totalbox/boxperstack)
}
else{
    console.log('The output is= '+(parseInt(totalbox/boxperstack)+1));
}