//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
const quadratic = (a , b , c) =>{
    b=-b;
    let z =[];
    let x = (b +Math.sqrt((b*b)-4*a*c))/2;
    let y = (b -Math.sqrt((b*b)-4*a*c))/2;
    if(x==y){
        z.push(x);
        
    }
    else{
        z.push(x);
        z.push(y);
    }
    return z;
}
console.log(quadratic(1 , -1 , -2));

//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr){
    for(let i=0; i<arr.length;i++){
        console.log(arr[i]);
    }
}
let a= [1 , 2, 3, 4, 5]
printArray(a);
//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArr(arr){
    let newArr=[];
    for(let i=arr.length-1; i>=0 ; i--){
        newArr.push(arr[i]);
        
    }
    return newArr;
}

console.log(reverseArr(a));

//Write a function which takes any number of arguments and return the sum of the arguments
function sum(){
    let s=0;
    for(let i=0; i<arguments.length;i++){
        s+=arguments[i];
    }
    return s;
}
console.log(sum(1,2,3,4,5,6));


function ran(min , max){
    
    console.log(Math.floor(Math.random()*(max-min) +min));
}
ran(1 , 100);