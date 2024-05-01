const products = [{
    name: "TEST1",
    price: 10
},
{
    name: "TEST2",
    price: 13
}
];

// find product with name TEST1
// for (let i = 0; i < products.length;i++){
//     if(products[i].name==="TEST1"){
//         console.log("Yess! Found test 1")
//     }else if(products[i].name==="TEST2"){
//         console.log("This is TesT 2")
//     }else{
//         console.log("not found")
//     }
// }
function findproduct(prd){
    
    for (let i = 0; i < products.length;i++){
           if(products[i].name==="TEST1"){
            return products[i].name;
            }

        }
           
}
findproduct(products);