//W1D3 Q4
let prompt=require('prompt-sync')();
let person=prompt('enter the status of the person: ');
let number=prompt('enter Number of books Overdue ');
switch(person){
    case 'student':
        
        if(number==0){
        console.log('Loan duration in weeks is= 6');
        }
        if(number>0&&number<3){
        console.log('Loan duration in weeks is= 4');
        }
        if(number>=3)
        console.log('Loan duration in weeks is= 2');
        break;
    case 'faculty':
        if(number==0)
        console.log('Loan duration in weeks is= 12');
        if(number>0&&number<3)
        console.log('Loan duration in weeks is= 10');
        if(number>=3)
        console.log('Loan duration in weeks is= 8');
        break;
    
    case 'other':
        if(number==0)
        console.log('Loan duration in weeks is= 4');
        if(number>0&&number<3)
        console.log('Loan duration in weeks is= 3');
        if(number>=3)
        console.log('Loan duration in weeks is= 2');
        break;
}
