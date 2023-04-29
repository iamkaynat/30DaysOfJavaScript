//Explain the difference between forEach, map, filter, and reduce.
//Define a callback function before you use it in forEach, map, filter or reduce.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

/* Use forEach to console.log each country in the countries array.
Use forEach to console.log each name in the names array.
Use forEach to console.log each number in the numbers array.*/

function print(arr){
    arr.forEach(x=> console.log(x));
}
print(countries);
print(names);
print(numbers);

//Use map to create a new array by changing each country to uppercase in the countries array.

function upper(arr){
    let output=[];
    for(let i=0;i<arr.length;i++){
        output.push(arr[i].toUpperCase());
    }
    return output;
}
console.log(upper(countries));



const up= countries.map(function(x){
    return x.toUpperCase();
});
console.log(up);

//Use map to create an array of countries length from countries array.

function len(x){
    return x.length;
}
const l= countries.map(len);
console.log(l);
//Use map to create a new array by changing each number to square in the numbers array

const square = numbers.map(x=>{
    return x*x;
});
console.log(square);

//Use map to change to each name to uppercase in the names array
console.log(names.map(x=>{
    return x.toUpperCase();
}));

//Use map to map the products array to its corresponding prices.(Learn about objects.//5 April, 2023)
let prices = products.map(product => {
    return `${product.product}:${product.price}`
});
//console.log("Prives");
console.log(prices);

/*Use filter to filter out countries containing land.
Use filter to filter out countries having six character.
Use filter to filter out countries containing six letters and more in the country array.
Use filter to filter out country start with 'E';

 */

function contain(x){
     return x.toUpperCase().includes('LAND');
    
}
console.log(countries.filter(contain));

const c= countries.filter(function(x){
    if(x.length==6){
        return x;
    }
});
console.log(c);
const d= countries.filter(function(x){
    if(x.length>6){
        return x;
    }
});
console.log(d);

//Use filter to filter out only prices with values.(Learn object and solve this.)
let price = products.filter(product=>{
    return product.price>0;
});
console.log(price);

/*Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items. */
let a= [1 , 2 ,3 , 'PQR'];
function getStringLists(array){
    let output=[];
    for(const i in array){
        
        if( typeof(array[i]) === 'string'){
            output.push(array[i]);
        }
    }
    return output;
}
console.log(getStringLists(a));

const get = (arr)=>{
    let nn= arr.filter(item=>{
        return typeof item ==='string';
    });
    return nn;
}
console.log(get(a));

//Use reduce to sum all the numbers in the numbers array.

const sum = (arr)=>{
    let nn= arr.reduce(function(acc,curr){
        acc+=curr;
        return acc;
    },0);
    return nn;
}
let cd= [1,2,3,4];
console.log(sum(cd));

//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let joinCountries = countries.reduce((accumulator, currentValue) => {
    
    return accumulator +"," +" "+ currentValue;
})
console.log(joinCountries);

//