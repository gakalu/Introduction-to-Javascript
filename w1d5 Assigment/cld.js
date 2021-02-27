//w1d5
function circle(r){ //a
let area=Math.PI*Math.pow(r,2);
return area;
}
function volume(r,h){ //b
let v=circle(r)*h;
return v;
}
console.log(circle(2).toFixed(2)); //c
console.log(volume(2,5).toFixed(2));