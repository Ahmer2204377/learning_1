const products = [{
    name: "TEST1",
    price: 10
},
{
    name: "TEST1",
    price: 12
},
{
    name: "TEST2",
    price: 13
}
];

// Output array
// [{
//     name: "TEST1-123",
// },
// {
//     name: "TEST1-123",
// },
// {
//     name: "TEST2-123",
// }
// ];
// use filter
// use map
// const filteredProducts = products.filter(product => product.name === "TEST1");
// console.log(filteredProducts)
// ye nf function nai hai// ye ananomus function hai // matlab function ka koi naam nahi
// kun? kun ke tumhen is function ko call ni karna, filter khud hi call karta hai, 


const filterdata = products.filter(function (product) {
    // yahan se ya tou true return hoga ya false, ab tum kia return kar rahe
    if(product.name === "TEST1"){
        return true;
    }
    
})
// console.log(filterdata);

const updatedata=filterdata.map(function(update){
    return ({name:"Test1-123"})
})
console.log(updatedata);



// tum ne print nai karaya sab se pehle



/// function multiple tarha se likha jata hai

// function add() {

// }

// is ko kehte hain arrow functionF
// const add = () => {

// }

