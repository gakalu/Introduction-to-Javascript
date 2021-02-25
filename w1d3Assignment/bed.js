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
/*Age                               Season Bed                                  Time
5 or younger                      summer, fall                                 8:30 PM
                                 winter, spring                                8:00 PM
6 to 12                           summer                                       9:30 PM
                                 winter, spring, fall                          8:30 PM
13 and older                      summer                                       10:30 PM
                                 winter, spring, fall                          9:30 PM*/