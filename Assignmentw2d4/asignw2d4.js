exports.addends = addends;
exports.getMiddle = getMiddle;
exports.rotateleft= rotateleft;
exports.rotateright=rotateright;
exports.filterRange = filterRange;
exports.palindrome = palindrome;
exports.materix = materix;

// w2d4 Q1
function addends(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=arr[0]+arr[arr.length-1];
    }
    return sum;
}
console.log(addends([2,4,6,7,4,8]))
//w2d4 Q2
function getMiddle(arr){
        let x=Math.floor(arr.length/2)
        if(arr.length%2==0){
        return (arr[x-1])+arr[x]/2;
        }else{
        return arr[x];   
        }
    }
console.log(getMiddle([2,4,6,2,4,50,80]));
//w2d4 Q3
function rotateleft(arr){
let temp=arr[0];
arr.shift();
arr.push(temp);
return arr;
}
console.log(rotateleft([4,6,8,5,3,9]));
//w2d4 Q4
function rotateright(arr){
    let temp=arr[arr.length-1];
    arr.pop();
    arr.unshift(temp)
    return arr;
    }
    console.log(rotateright([4,6,8,5,3,9]));
//w2d4 Q6
// let prompt=require('prompt-sync')();
// let input=prompt('Enter the value: ')
// let myArr= input.split(',');
// let negativeArr=[];
// let postivearr=[];
// for(let i=0;i<myArr.length;i++){
// let value=myArr[i];
// if(value<0){
//     negativeArr.push(+value);
// }else{
//     postivearr.push(+value);
// }
// }
// console.log(negativeArr);

//w2d4 Q7
function filterRange(arr, a, b){
    let newArr=[arr.length];
    let temp;
    let k=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>=a&&arr[i]<=b){
    newArr[k]=arr[i];
    k++;
    }
}
return newArr
}
console.log(filterRange([2,6,3,8,4,5,9,2,7,8],3,9));
//w2d4 Q8
function  palindrome(arr){
    let plarr=arr.split('');
    let revarr=[];
    for(let i=arr.length-1;i>=0;i--){
    revarr.push(plarr[i])
    }
    for(let i=0;i<arr.length;i++){
       if(plarr[i]!==revarr[i]){
       return '';
    }
       else{
       return arr;
       }
    }
    }
    console.log(palindrome('apapa'));
//w2d4 Q9
function materix(arr1,arr2){
let sum=[[],[]];
 //arr1=[[0,1,2],[9,8,7]];
 //arr2=[[6,5,4],[3,4,5]];
for(let i=0;i<2;i++){
    for(let j=0;j<3;j++){
    sum[i][j]=(arr1[i][j]+arr2[i][j]);
}
}
return sum;
}
console.log(materix([[0,1,2],[9,8,7]],[[6,5,4],[3,4,5]]));
//ClassExercise On array method
let name=[2,5,7,8,9,7,56,54,4];
console.log(name.splice(3,7));
console.log(result);
function mult(matrix){
    let sum=0;
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            sum+=matrix[i][j];
        }
    }
    return sum;
}
console.log(mult([[1,2,3],[4,5,6],[7,8,9]]));
