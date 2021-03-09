
//w3d1 Q1
let car={};//a
let car={
    namemake:"Toyota",//b
    namemodel:"Camry"//c
}; 
console.log(car.namemake);
console.log(car.namemodel);//d
car.namemake="RAV4";
console.log(car.namemake);//f
delete car.namemake;//g
console.log(car);//h
//w3d1 Q2
function isPersonEqual(sam1,sam2){
    if(sam1.age===sam2.age&&sam1.hight===sam2.hight){
        return true;
    }else{
        return false;
    }
    }
    let obj1={
        name:'sam',
        age: 28,
    };
    let obj2={
        name:'Bob',
        age: 28,
    };
    console.log(comparingObj(obj1,obj2));
//w3d1 Q3
function countProperties(Person){
    let count=0;
    for(properties in Person){
        count++;
      }
    return count;
} 
p1={
    name:"Akalu",
    age:28,
    hight:6
   };
console.log(countProperties(p1));
//w3d1 Q4
function checkSpam(str){
   let arr=str.split(" ");
    for(let i=0;i<arr.lenght;i++){
        if(arr[i]==='I'|| arr[i]==='win')
        return true;
}
        return false;
    }
console.log(checkSpam("I win prize"));
//w3d1 Q5
function suffix(str1,str2){
    let k=0;
    for(let i=0;i<str1.length+str2.length;i++){
       let newstr1=str1.substring(i,i+2)
       let newstr2=str2.substring(i,i+2);
       k++;
       if(newstr1===newstr2)
       return str2.substring(k,k+2);
    }
}
console.log(suffix("swimming","walking" ));