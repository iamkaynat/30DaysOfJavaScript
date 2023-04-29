/* Create an empty object called dog
Print the the dog object on the console
Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
Get name, legs, color, age and bark value from the dog object
Set new properties the dog object: breed, getDogInfo*/

const dog={
    name:'Snow',
    legs:4,
    color:'White',
    age:1,
    bark: function() {
         return `woof-woof`;
         }


};
//console.log(dog);

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(dog.bark());