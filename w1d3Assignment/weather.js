//w1d3 Q1
let prompt=require('prompt-sync')();
let weather=prompt('enter the weather condition: ');
switch(weather) {
  case "hot":
    console.log('The footwear is sandals');
    break;
  case "rain":
    console.log('The footwear is galoshes');
    break;
  case "snow":
    console.log('The footwear is boots');
    break;
  default:
    console.log('The footwear is sneakers');
    break;
}