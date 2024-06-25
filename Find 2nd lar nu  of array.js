myArray =[5,2,10,1,3];


function secondLarNum(arr){
   let largest= arr[0];
    let secondLargest = 0;
    for(let i=0; i<arr.length; i++ ){
        if (arr[i]> largest){
            secondLargest = largest;
            largest = arr[i];
              }
         else if(arr[i]<largest&& arr[i]> secondLargest){
              secondLargest =arr[i]   ;                  
        }
       
        }
    return secondLargest;
    // const sortedArray= arr.sort((a,b)=>b-a);
    // return sortedArray[1]
}
 const x= secondLarNum(myArray);
console.log(x);
// find 3rd largest number of array.

myArray =[5,2,10,1,3];


// function thirdLarNum(arr){
//    let largest= arr[0];
//     let secondLargest = 0;
//     let thirdLargest =0;
//     for(let i=0; i<arr.length; i++ ){
//         if (arr[i]> largest){
//             secondLargest = largest;
//             largest = arr[i];
//               }
//          else if(arr[i]<largest&& arr[i]> secondLargest){
//               thirdLargest = secondLargest
//               secondLargest =arr[i]  ;                  
//         }
//         else if(arr[i] < secondLargest && arr[i]> thirdLargest){
//             thirdLargest =arr[i];
//         }
       
//         }
//     return thirdLargest;
//     // const sortedArray= arr.sort((a,b)=>b-a);
//     // return sortedArray[1]
// }
//  const x= thirdLarNum(myArray);
// console.log(x);