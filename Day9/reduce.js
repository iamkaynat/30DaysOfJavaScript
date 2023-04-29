const arr=[1,2,3,4,5];
// find max
function max(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
console.log(max(arr));

const m= arr.reduce(function(acc,cur){
    
    if(cur>acc){
        acc=cur;
        
    }
    return acc;
},0);

console.log(m);


