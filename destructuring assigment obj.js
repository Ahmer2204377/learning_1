const avgTemp ={
    today : 40,
    tommorrow : 42

}
// old way to assign variable from object :
const tommorrowTemp =avgTemp.tommorrow;
console.log(tommorrowTemp);
//use distructuring assigment to assign variables from object
function getTemOfTom (avgerageTemp){
    
    const {tommorrow : tempOfTom}= avgerageTemp;
    return tempOfTom;
}

console.log(getTemOfTom(avgTemp));
// another object using this function
const tempraturesExam ={
    today: 41,
    tommorrow:43,
    yesterday:40
    }
    
console.log(getTemOfTom(tempraturesExam))  ;  
    

/* output 42
   output 42
   output 43 */