//w1d3 Q2
let prompt=require('prompt-sync')();
let name=prompt('enter the name of student: ' );
let n=prompt('enter  number of completed credits: ')
let credit=parseInt(n);
if(credit>0&&credit<30){
    console.log(name+' is freshman.')
}else if(credit>=30&&credit<60){
    console.log(name+' is sophomore.')
}else if(credit>=60&&credit<90){
    console.log(name+' is junior.')
}else{
    console.log(name+' is senior.')
}