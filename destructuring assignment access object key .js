const stats={
    min : 40,
    max : 70,
    mid :30,
    
}

const half = (()=>{
    return ({min , max})=>{
        return (min + max)/2.0
    };
    
})();
console.log(half(stats));