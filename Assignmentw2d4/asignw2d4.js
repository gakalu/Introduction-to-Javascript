// w2d4 Q1
function addend(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=arr[0]+arr[arr.length-1];
    }
    return sum;
}
console.log(addend([2,4,6,7,4,8]))
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
function array(arr){
let prompt=require('prompt-sync')();
arr=[];
while(true){
let num=prompt('Enter the number:');
if(num!=='stop'){
arr.push(Number(num));
}else{
    break;
}
}
}
console.log(array(arr));
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
    let value;
    let k;
    newArr=[];
for(let i=arr.length-1;i>=0;i--){
    newArr[k]=arr[i];
    k++;
}
   value=Compare(arr,newArr);
   if(value==true)
   return newArr;
}
console.log(palindrome('Getachew'));
//w2d4 Q9
function materix(arr1,arr2){
let sum=[[],[]];
 arr1=[[0,1,2],[9,8,7]];
 arr2=[[6,5,4],[3,4,5]];
for(let i=0;i<2;i++){
    for(let j=0;j<3;j++){
        sum[i][j]=(arr1[i][j]+arr2[i][j]);
}
}
 return sum;
}
console.log(sum);
