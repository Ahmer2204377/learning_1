//find largest num
myArray =[8,4,10,2,7];

function largestNum (arr){
  let largest = arr[0];
  for(let i=0; i<arr.length; i++){
    if(arr[i]>largest){
        largest = arr[i];
    }
    
  }return largest;
}
largestNum(myArray);

// find minimum num

function miniNum (array){
    let minimum = array[0];
    for(let i=0; i<array.length; i++){
        if(array[i]<minimum){
            minimum=array[i];
        }

    }return minimum;
}
 miniNum(myArray)

 //