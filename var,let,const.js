// var - function scope, global scope
// let - block scope
// const - block scope, can’t reassign 


 // function abc() {
//     if (true) {
//         var a = 10;
//     }
// }

// console.log(a)

function exampleVar() {
    var x = 10;
    if (true) {
        var x = 20; 
        console.log(x); 
    }
    console.log(x); // Output: 20
}
exampleVar();

function exampleLet() {
    let x = 10;
    if (true) {
        let x = 20; 
        console.log(x); // Output: 20
    }

    function exampleConst() {
        const x = 10;
        // x = 20; // This would cause an error
        console.log(x); // Output: 10
    }
    exampleConst(); 

    // // In general, it's recommended to use const by default for variable declarations and only 
    // use let when you need to reassign the variable. var is considered outdated and its use is discouraged
    //  in modern JavaScript development due to its hoisting behavior and potential issues with variable scope.

// data types:

// integer 1
// float 1.1

// string "abc"

// array []
// object {}


// ****************data types*****************

// const floatVariable=1.1;

// console.log(typeof floatVariable);

// const stringVariable="1.1";

// console.log(typeof stringVariable);

// const objectVariable=[];

// console.log(typeof objectVariable);