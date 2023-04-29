let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

console.log(text.split(" "));
const arr = text.split(" ");
console.log(arr.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
let index = shoppingCart.indexOf('Meat');
if(index==-1){
    shoppingCart.unshift("Meat");
    console.log(shoppingCart);
}
else{
    console.log('Meat is already in the list.')
}
let ind = shoppingCart.indexOf('Sugar');
if(ind==-1){
    shoppingCart.push("Sugar");
    console.log(shoppingCart);
}
else{
    console.log('Sugar is already in the list.')
}
console.log(shoppingCart.pop());
console.log(shoppingCart.pop());
console.log(shoppingCart.splice(1,1,'GreenTea'));