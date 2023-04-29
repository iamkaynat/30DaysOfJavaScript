const arr=[1,2,3,4,5];
function isodd(arr){
    const a=[];
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]%2!=0){
            a.push(arr[i]);
        }
    }
    return a;
    
}
console.log(isodd(arr));


const output = arr.filter(function odd(x){
    return x%2;
});
console.log(output);
const o= arr.filter(x =>{
    return x%2;
}
    );
    console.log(o);


const op= arr.filter(x=> x%2);
console.log(op);
 