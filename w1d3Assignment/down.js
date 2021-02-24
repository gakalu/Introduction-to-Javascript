//w1d3 Q3
let prompt=require('prompt-sync')();
let n=prompt('enter the cost of the house: ')
let cost=parseInt(n);
let down;
if(cost>0&&cost<50){
    down=cost*0.05;
    console.log('The amount of down payment is='+down);
}else if(cost>=50&&cost<100){
    down=1000 + 0.1*(cost - 50);
    console.log('The amount of down payment is='+down);
}else if(cost>=100&&cost<200){
    down=2000 + 0.15* (cost - 100);
    console.log('The amount of down payment is='+down);
}else{
    down=5000 + 0.1*(cost - 200);
    console.log('The amount of down payment is='+down)
}
