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
/*Cost of House                                                        Down Payment
$0 to less than 50K                                                  5% of the cost
$50K to less than 100K                                          $1000 + 10% of (cost - $50K)
$100K to less than 200K                                         $2000 + 15% of (cost - $100K)
$200K and above                                                 $5000 + 10% of (cost - $200K)*/
