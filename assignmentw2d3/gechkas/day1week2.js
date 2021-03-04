/* disable-eslint*/
/**
 * 
 * @param {number} r 
 * @return {number}area
 */
function circle(r){ //a
    let area=Math.PI*Math.pow(r,2);
    return area;
    }
    /**
     * 
     * @param {number} r 
     * @param {number} h
     * @return {number} v
     */
    function volume(r,h){ //b
    let v=circle(r)*h;
    return v;
    }
    console.log(circle(2).toFixed(2)); //c
    console.log(volume(2,5).toFixed(2));
    //////////////////////////////////////////////////////////////////////
    /**
     * 
     * @param {number} n 
     * @return {boolean} 
     */
    function p(n){ // a
        for(let i=2;i<n;i++){
        if(n%i==0){
            return false;
        }
        }
            return true;
        }
    let prompt=require('prompt-sync')(); // b
    let n=prompt('enter the number: ');
    let number=parseInt(n);
    console.log(p(number));
    //////////////////////////////////////////////////////////////////////
    let h=10;
    /**
     * 
     * @param {number} h 
     * @param {number} w 
     * @param {number} d 
     * @param {number} sw
     * @return {number}hvolum 
     */
    function house(h,w,d,sw){
        let s=(2*sw+w)/2;
        let triArea=Math.sqrt((s*(s-sw)*(s-sw)*(s-w)));
        let lvolum=w*h*d;
        let rvolum=triArea*d;
        let hvolum=lvolum+rvolum;
        return hvolum;
    }
    console.log(house(h,2,6,2).toFixed(3));
    console.log('===================================================');
    /**
     * 
     * @param {*} w 
     * @param {*} sw 
     * @return {number}s
     */
    function sum(w,sw){
        let s=(w+2*sw)/2;
        return s;
    }
    /**
     * 
     * @param {number*} w 
     * @param {number} sw 
     * @return {number} area
     */
    function triArea(w,sw){
        let x=sum(w,sw);
        area=Math.sqrt(x*(x-w)*(x-sw)*(x-sw));
        return area;
    }
    /**
     * 
     * @param {number} w 
     * @param {number} sw 
     * @param {number} d 
     * @return {number} v1
     */
    function roof(w,sw,d){
       let v1= triArea(w,sw)*d;
       return v1;
    }
    /**
     * 
     * @param {number} w 
     * @param {number} h 
     * @param {number} d 
     * return {number} v2
     */
    function living(w,h,d){
       let v2=w*h*d;
       return v2; 
    }
    /**
     * 
     * @param {number} h 
     * @param {number} w 
     * @param {number} d 
     * @param {number} sw 
     * @return {number} totalvolum
     */
    function total(h,w,d,sw){
      totalvolum=roof(w,sw,d)+living(w,h,d);
      return totalvolum; 
    }
    console.log(total(h,2,6,2).toFixed(3));
