"use strict";

exports.isPersonEqual=isPersonEqual;
exports.countProperties= countProperties;
exports.checkSpam= checkSpam;
exports.suffix=suffix;
exports.titleCase = titleCase;
exports.getAverageAge = getAverageAge;
exports.sumFirst=sumFirst;
//w3d1 Q1
// let car={};//a
// let car1={
//     namemake:"Toyota",//b
//     namemodel:"Camry"//c
// }; 
//console.log(car.namemake);
// console.log(car.namemodel);//d
// car.namemake="RAV4";
// console.log(car.namemake);//f
// delete car.namemake;//g
//console.log(car);//h
//w3d1 Q2
function isPersonEqual(sam1,sam2){
    if(sam1.name===sam2.name){
        return true;
    }else{
        return false;
    }
    }
    let obj1={name:'sam',age: 28};
    let obj2={name:'Bob',age: 28};
console.log(isPersonEqual(obj1,obj2));
//w3d1 Q3
function countProperties(Person){
    let count=0;
    for(let Property in Person){
        count++;
      }
    return count;
} 
let p1={name:"Akalu",age:28,hight:6};
console.log(countProperties(p1));
//w3d1 Q4
function checkSpam(str){
    let arr=str.split(" ");
     for(let i=0;i<arr.length;i++){
         if(arr[i]==="prize"||arr[i]==="lottery")
         return true;
     }
         return false;
     }
 console.log(checkSpam("I win prize of lottery"));

//w3d1 Q5
function suffix(str1,str2){
       let newstr1=str1.substring(str1.length-3,str1.length)
       let newstr2=str2.substring(str2.length-3,str2.length);
       if(newstr1===newstr2){
       return newstr1;
       }else{
       return "";
       } 
}
console.log(suffix("jackson","wholesome" ));
//w3d1 Q6

function titleCase(name){
    let first=name.charAt(0).toUpperCase();
    return first+name.substring(1,name.length);
    }
console.log(titleCase("getachew"));
//w3d1 Q7
function getAverageAge(users){
    let sum=0;
    for(let agesum of users){
        sum+=agesum.age;
    }
       return sum/users.length
}
let user=[{name:"abc", age:20},
         {name:"xyz", age:10}]
console.log(getAverageAge(user));

//w3d1 Q8
function sumFirst(arr){
    let sum=0;
    for(let array of arr){
        sum+=array[0];
    }
return sum
}
let arr = [[1, 2], [3, 4], [5, 6]] 
console.log(sumFirst(arr))