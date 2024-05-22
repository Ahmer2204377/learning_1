const avgTemp ={
    today :{ min:40, max:42},
    tommorrow :{min : 42,max:44}

}
// old way to assign variable from nested object :
const tommorrowTempMax =avgTemp.tommorrow.max;
console.log(tommorrowTempMax);
// use distructuring assigment to assign variables from nested object
function getTemOfTomMax (avgerageTemp){
    
    const {tommorrow : {max : tempOfTomMax}}= avgerageTemp;
    return tempOfTomMax;
}

console.log(getTemOfTomMax(avgTemp));
// another object using this function
const tempraturesExam ={
    today: { max:41,min : 40},
    tommorrow:{max:43,min :42},
    yesterday:{max:40, min:39}
    }
    
console.log(getTemOfTomMax(tempraturesExam))  ;  
    

