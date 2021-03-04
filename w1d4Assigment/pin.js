//w1d4 Q3 
let prompt=require('prompt-sync')();
let count=1;
while(true){
    let pin=prompt('enter the pin: ');//assume my pin is 1234
    if(pin==1234){
    console.log('Correct, welcome back')
    console.log('===============================================================');
    break;
    }else{
  let temp;
while(true){
    temp=prompt('Incorrect, try again:');
    console.log('==============================================================');
    if(count==3||temp==1234)
    break;
    count++;
  }
    if(temp!=1234){
    console.log('Sorry but you have been locked out');
    break;
    }else{
    console.log('Correct, welcome back')
    break; 
  }
}
}













  
  


