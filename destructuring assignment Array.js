// destructuring assignment operator for assign variables from Arrays

const [x,y, , ,z]= [1,2,3,4,5,6,7,8];
console.log(x,y,z);

// destructuring assignment using for switch the value of variable from an array

let a=20,
    b=30;
    
    (()=>{
       [a,b] = [b,a]
    })();
    
    console.log(a);
    console.log(b);
