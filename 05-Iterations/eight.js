 // node 05-Iterations/eight.js

 const myNums = [ 1, 2  , 3]

//  const myTotal = myNums.reduce( function(acc , curval){
//     console.log(`acc: ${acc} and currval: ${curval}`);
//     return acc + curval
//  } , 0)

 const myTotal = myNums.reduce( (acc , curr) => acc+curr , 0)
  
//  console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'js Course' , 
        price: 2999
    },
    {
        itemName: 'py Course' , 
        price: 999
    },
    {
        itemName: 'Mobile dev Course' , 
        price: 5999
    },
    {
        itemName: 'Data Science Course' , 
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc+ item.price, 0)

console.log(priceToPay);