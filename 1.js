let price=[250,645,300,900,50];
console.log("price after 10% deduction");
for(let i=0;i<price.length;i++)
{
    price[i]= price[i] - price[i]*0.1;
}
console.log(price);
price.push(12);
console.log(price);
console.log(price.splice(2,2,103,102,123))
console.log(price)

