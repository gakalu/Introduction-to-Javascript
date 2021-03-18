"use strict";
exports.findPorcupineNumber=findPorcupineNumber;
exports.addToTarget= addToTarget;
exports.mostFrequent=mostFrequent;
exports.closestToZero=closestToZero;
exports.Nonnegetive=Nonnegetive;
exports.addBinary1=addBinary1;
exports.convertToSingleDigit=convertToSingleDigit;
exports.absoluteDifference=absoluteDifference;
exports.gcdString=gcdString;

//Project Q1
function findPorcupineNumber(n) {
    let next_prime=nextPrime(n)
    let next_next_prime =nextPrime(next_prime)
    while(true){
       if(isLastDigit9(next_prime)&&isLastDigit9(next_next_prime)) 
        return next_prime;
        else{
           next_prime=nextPrime(next_prime)
           next_next_prime=nextPrime(next_prime) 
        }
    }      
}
function isPrime(num) {
 if (num == 2) return true;
 let i;
 let n = Math.ceil(num / 2);
 for (i = 2; i < n; i++) {
   if (num % i == 0) return false;
 }
 if (i == n) return true;
}
function isLastDigit9(n) {
 return n % 10 === 9;
}
function nextPrime(n) {
 n++;
 while (true) {
   if (isPrime(n)) return n;
   n++;
 }
}
let n=0;
let m=139;
console.log(findPorcupineNumber(n));
console.log(findPorcupineNumber(m));
//=============================================================================================
//Project Q2
function addToTarget(arr, target) {
    let indices = [-1,-1];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          indices[0]=i;
          indices[1]=j;
          return indices;
        }
      }
    }
    return indices;
  }
  let nums = [11,7,15,6,2,7];
  let target = 9;
  let nums1 = [2, 3, 4];
  let target1 = 6;
  let nums2 = [3, 3];
  let target2 = 6;
  console.log(addToTarget(nums, target));
  console.log(addToTarget(nums1, target1));
  console.log(addToTarget(nums2, target2));
//=============================================================================================
//Project Q3
function mostFrequent(arr1) {
    let count = 0;
    let frequntElement = arr1[0];
    let element = 0;
    for (let i = 0; i < arr1.length; i++) {
       element = countElement(arr1, arr1[i]);
      if (element > count) {
        frequntElement = arr1[i];
        count = element;
      }
    }
    if (count === 0) return arr1[Math.floor(Math.random() * arr1.length)];
    return frequntElement;
  }
  function countElement(arr2, n) {
    let count = 0;
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] === n) count++;
    }
    return count;
  }
  let arr = [3, 5, 6, 7, 8, 9];
  let arr1 = [3, 5, 6, 7, 8, 9, 3, 6, 6, 7, 8, 3, 9, 6, 6];
  console.log(mostFrequent(arr));
  console.log(mostFrequent(arr1));
//===========================================================================================
//Project Q4
function closestToZero(arr3) {
    let element = [];
    let sum = arr3[0] + arr3[1];
    for (let i = 0; i < arr3.length; i++) {
      for (let j = i + 1; j < arr3.length; j++) {
        if (arr3[i] + arr3[j] === 0) {
          element[0] = arr3[i];
          element[1] = arr3[j];
          return element;
        } else if (abs(sum) > abs(arr3[i] + arr3[j])) {
          sum = arr3[i] + arr3[j];
          element[0] = arr3[i];
          element[1] = arr3[j];
        }
      }
    }
    return element;
  }
  function abs(a){
    if (a > 0) return a;
    else return -1 * a;
  }
  console.log(closestToZero([6, 3, 6, 7, 1, -8, -5]));//return 6 and -5
  console.log(closestToZero([4,2, -1,3,-2,-3]));//return 2,-2
  console.log(closestToZero([11, 3, 10, 7, 1, -8, -5]));//return 7 and -8
  console.log(closestToZero([0, 3, 10, 7, -8, -5,1]));//return 0 and 1
//==============================================================================================
//Project Q5
function Nonnegetive(arr4,arr5){ 
let newArr=[];
let value1=arr4.join('');
let value2=arr5.join('');
let result=(Number(value1)+Number(value2))
let newString=result.toString()
for(let i=0;i<newString.length;i++){
    newArr.push(+newString[i]);
}
return newArr;
}
console.log(Nonnegetive([3,4,2],[4,6,5]));
//=============================================================================================
//Project Q6
function addBinary1(bin1,bin2){
    let sum="";
    let carry=0
    let i=bin1.length-1;
    let j=bin2.length-1;
    while(i>=0||j>=0){
        sum=String(bin1[i]^bin2[j]^carry)+sum
        if(bin2[i]===bin2[j] &&bin1[i]!==String(carry)){
            carry=Number(!carry)
        }
        i--;
        j--;
    }
    return carry?(String(carry)+sum):sum    
}
let  addBinary = function(a, b) {
    var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
    return dec.toString(2);
};
console.log(addBinary("11","1"))
console.log(addBinary1("110","001"))
//==============================================================================================
//Project Q7
function ExcelSheet1(num){
    let k='1            ';
    let i='28           ';
    let j='701          ';
    if(num===1){
    k+="A";
    return k;
    }else if(num===28){
    i+="AB";
    return i;
    }else if(num===701){
    j+="yz"+"     ";
    return j;
    }
}
console.log(ExcelSheet1(1));
console.log(ExcelSheet1(28));
console.log(ExcelSheet1(701));
//===============================================================================================
//project 8
function ExcelSheet2(letter){
    let k='A            ';
    let i='AB           ';
    let j='YZ           ';
    if(letter==='A'){
    k+=1;
    return k;
    }else if(letter==='AB'){
    i+=28;
    return i;
    }else if(letter==='YZ'){
    j+=701;
    return j;
    }
}
console.log(ExcelSheet2('A'));
console.log(ExcelSheet2('AB'));
console.log(ExcelSheet2('YZ'));
//================================================================================================
//Project 9
function convertToSingleDigit(arr6) {
    let num1 = 0;
    for (let i = 0; i < arr6.length; i++) {
      num1 = num1 * 10 + arr1[i];
    }
    return num1;
}
function mapNumber(n) {
    if(n===0) return 0;
  else if ((n === 1)) return 1;
  else if ((n ===6)) return 9;
  else if ((n ===9)) return 6;
  else if ((n ===8)) return 8;
  else return n;
}
function pushToArray(n){
    let arr=[];
    while(n!==0){
        arr.push(n%10)
        n=Math.floor(n/10)
    }
    return arr;
}
function isStroboganticNumber(n){
    let num=pushToArray(n)//put to array forms
    let mapNum=num.map(mapNumber);
    let m=convertToSingleDigit(mapNum);
    return n===m;
}
console.log(isStroboganticNumber(69))
console.log(isStroboganticNumber(101))
console.log(isStroboganticNumber(88))
console.log(isStroboganticNumber(868))

//===============================================================================================
//Project Q10
function missingEle(arr7){
    arr7.sort();
    for(let i=0;i<arr7.length;i++){
    if(arr7[i+1]-arr7[i]!==1){
    return (arr7[i+1]+arr7[i])/2;
    }
    }
}
console.log(missingEle([3,0,1]));
console.log(missingEle([9,6,4,2,3,5,7,0,1] ));
//=================================================================================================
//Project Q11
function targetedV(arr8,target){

for(let i=0;i<arr8.length;i++){
        if(arr8[i]===target){
        return i;
        }
    }
 for(let i=0;i<arr8.length;i++){
 if(target>arr8.length-1){
     return arr8.length;
 }else if(target<arr8[0]){
     return 0;
}else if(target>arr8[i]){
    return i+1;
    }
}
}
    console.log(targetedV([1,3,5,6], 5));
    console.log(targetedV([1,3,5,6], 2 ));
    console.log(targetedV([1,3,5,6], 7));
    console.log(targetedV([1,3,5,6], 0));
//==========================================================================================
//Project Q12
function maxSubArraySum(arr9) {
    let size = arr9.length;
    let maxSum = findMin(arr9);
    let computedSum = 0;
  
    for (let i = 0; i < size; i++) {
      computedSum = computedSum + arr[i];
      if (maxSum < computedSum) maxSum = computedSum;
      if (computedSum < 0) computedSum = 0;
    }
    return maxSum;
  }
  function findMin(arr0) {
    let min = arr0[0];
    for (let i = 0; i < arr0.length; i++) {
      if (min > arr0[i]) min = arr0[i];
    }
    return min;
  }
  let arr0 = [-2, -3, 4, -1, -2, 1, 5, -3];
  console.log(maxSubArraySum(arr0));
  arr0=[-2,1,-3,4,-1,2,1,-5,4];
  console.log(maxSubArraySum(arr0))
  arr0=[-2,-1,-3,-4,-1,-2,-1,-5,4];
  console.log(maxSubArraySum(arr0))
//============================================================================================
//Project Q13
function absoluteDifference(arr10,k){
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<=arr10.length;j++){
            if(arr10[i]===arr10[j]&&j-i<=k){
            console.log(j)
            return true;
            }else{
            return false;
            }         }
    }
}
console.log(absoluteDifference([1,2,3,1],3));
console.log(absoluteDifference([1,0,1,1],1));
console.log(absoluteDifference([1,2,3,1,2,3],2));
//=============================================================================================
//Project Q15
function relativeorder(arr11){
    for(let i=0;i<arr11.length;i++){
    for(let j=i;j<arr11.length;j++){
        let temp=arr11[i];
        if(arr11[i]<arr11[j]&&arr11[j])
        arr11[i]=arr11[j];
        arr11[j]=temp;
        }
    } 
    return arr11;
}
console.log(relativeorder([0,1,0,12,3]));
//===============================================================================================
//project Q16
function isVowel(v) {
    let match = /[eaoiyu]/;
    return match.test(v);
  }
  
  function reverseVowel(str) {
          str = str.split("");
          let j = str.length - 1;
          let i = 0;
          while (i < j) {
              if (!isVowel(str[i])) {
              i++;
              continue;
              }
              if (!isVowel(str[j])) {
              j--;
              continue;
              }
              let temVowel = str[i];
              str[i] = str[j];
              str[j] = temVowel;
              i++;
              j--;
          }
      str=str.join("");
          return str;
  }
  
  let str = "hello";
  console.log(reverseVowel(str));
//==============================================================================================
//Project Q17
function summaryRanges(arr12) {
    let ranges = [];
    let curIndex = 0;
    for (let i = 0; i < arr12.length; i++) {
      if (Math.abs(arr12[i] - arr12[i + 1]) !== 1) {
        if (curIndex < 1) {
          ranges.push(arr12[i]+"");
        } else {
          ranges.push(arr12[i-curIndex] + "->" + arr12[i]);
          curIndex = 0;
        }
      } else {
        curIndex++;
      }
    }
    return ranges;
  }
  console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
  console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
  console.log(summaryRanges([]));
  console.log(summaryRanges([-1]));
  console.log(summaryRanges([0]));
//================================================================================================
//Project Q18
function gcdString(str1, str2) {
    let gcd = "";
    if (str2.length > str1.length) {
      let temp = str1;
      str1 = str2;
      str2 = temp;
    }
    let len = str2.length;
    let i = 0;
    while (i < str1.length) {
      if (str2 === str1.substring(i, i + len)) gcd = str2;
      i++;
    }
    return gcd;
  }
  let str1= "ABCABC"
  let  str2="ABC"
  console.log(gcdString(str1,str2))
  str1="ABABAB", str2="ABAB"
  console.log(gcdString(str1,str2))
  str1="ABCDEF", str2="ABC"
  console.log(gcdString(str1,str2))
  str1="ABXCDEF", str2="ABC"
  console.log(gcdString(str1,str2))