/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) { 
        console.log("Hello World");
        
    }
};
const x = createHelloWorld();
x();

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */