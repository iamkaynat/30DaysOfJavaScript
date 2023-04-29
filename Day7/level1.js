//Declare a function fullName and it print out your full name.
function fullName(){
    console.log("Unzala");
}
fullName();
//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function name( fname, lname){
    return `${fname} ${lname}`;
}
console.log(name('Unzala' , 'Husain'));
//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers( a , b){
    return a+b;
}
console.log(addNumbers(1,2));

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function area(l ,b){
    //let a =0;
    let a = l*b;
    return a;
}
console.log(area(3,4));

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function parameter(l ,b){
    let p = 2 * (l+b);
    return p;
}

console.log(parameter(3,4));
//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const findMax = ( a , b ,c) =>{
    let max =0;
    if(a>b && a>c){
        max=a;
    }
    else if(b>a && b>c){
        max=b;
    }
    else{
        max =c;
    }
    return max;
    
}
console.log(findMax(5, 7 , 3));