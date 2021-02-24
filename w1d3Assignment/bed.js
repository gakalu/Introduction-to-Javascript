//W1D3 Q5
let prompt=require('prompt-sync')();
let age=prompt('enter the age: ');
let season=prompt('enter the season: ');
if((age<=5)&&(season==summer||season==fall)){
    console.log('The bed time is=8:30');
}
if(age>=6&&age<=12){
    if(season=='summer'){
    console.log('The bed time is=9:30')
    }else if(season=='winter'||season=='spring'||season=='fall'){
    console.log('The bed time is=8:30');    
    }
}
if(age>=13){
    if(season=='summer'){
    console.log('The bed time is=10:30');
}else if(season=='winter'||season=='spring'||season=='fall'){
    console.log('The bed time is=9:30');   
}
}