"use strict";

exports.isArrayEqual = isArrayEqual;
exports.isPalindrome= isPalindrome;
exports.reverse2String= reverse2String;
exports.enhancedIncludes=enhancedIncludes;
exports.ssReverse = ssReverse;
exports.merge = merge;

//W2D5 Q1
function isArrayEqual(arr1,arr2){
    
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return false;
        }  
    }
           return true;
    }
console.log('Q1 =============check equality of an array=========');
console.log(isArrayEqual([2,3,4],[2,3,8]));

//w2d5 Q2
function isPalindrome(arr3){
    let revarr=[];
    for(let i=0;i<arr3.length;i++){
    revarr.push(arr3[(arr3.length-1)-i]);
    if(arr3[i]!==revarr[i]){
    return false;
    }
    }
    return true;
}
let arr3=[5,3,5,3]
console.log('Q2 =============check for palandrom=========');
console.log(isPalindrome(arr3));

//w2d5 Q3
function reverse2String(arr2){

    let text=arr2.reverse();
    let final=text.join("_")
    return final;
}
console.log('Q3 =============teansform to given format======');
console.log(reverse2String(['Hi','Myname','is','Akalu']));

//w2d5 Q4
function enhancedIncludes(arr1,value){
    let newArr=[false];
    for(let i=0;i<arr1.length;i++){
    if(arr1[i]===value){
    newArr.push(true)
    newArr.shift();
    }  
}  
        if(arr1[0]===value){
        newArr.push(value);
        newArr.push(-1);
        }
         else if(arr1[arr1.length-1]===value){
            newArr.push(-1);
           newArr.push(value);
        }else{
        newArr.push(-1);
        newArr.push(-1);   
        }
    return newArr;
}
let v1=[3,4,5,6,8,5];
let v2=3;
console.log('Q4 =============check for inclusive=========');
console.log(enhancedIncludes(v1, v2));

//w2d5 Q5
function ssReverse(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
    let element=+arr.slice(arr.length-(i+1),arr.length-i);
    newArr.push(element);
    }
    return newArr;
}
let arr=[1,2,3,4];
console.log('Q5 =============The reversed array================');
console.log(ssReverse(arr));
console.log('Q5=============The orginal array=================');
console.log(arr);

//w2d5 Q6
function merge(arr1, arr2) {
    let n=arr1.length+arr2.length;
    for (let i=arr1.length; i<n;i++) {
    arr1.push(arr2.shift());
    sortArray(arr1);
    }
    return arr1;
   }
   function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    }
    }
    }
    return arr;
   }
   let arr4= [1,3,8];
   let arr2 = [0,5,9];
   console.log('Q6 =============marging of an array=========');
   console.log(merge(arr4, arr2));