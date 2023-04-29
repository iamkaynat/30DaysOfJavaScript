let arr =[];
const arr1=[1,2,3,4,5,6];
console.log(arr1.length);
let f= arr1[0];
let l =arr1[arr1.length-1];
let mid = arr1.length /2;
let m = arr1[mid];
console.log(f , l , m);
const mixedArrayType= [ 5 , 'apple ' , false , {country:'India' , city: 'Banglore' },{skills : ['Html' , 'css' , 'js']} ];
console.log(mixedArrayType.length);


let itCompanies = ['Facebook' , 'Apple ' , 'Amazon' , 'Google' , 'Oracle' , 'IBM' , 'Microsoft'];
console.log(itCompanies);
let length= itCompanies.length;
let middle= Math.floor(length/2);
console.log(middle);
console.log(itCompanies[0]);
console.log(itCompanies[length-1]);
console.log(itCompanies[middle]);
for(let i=0 ; i<length;i++){
    console.log(itCompanies[i]);
}
for(let i=0 ; i<length;i++){
    let v= itCompanies[i];
    console.log(v.toUpperCase());

}
console.log(itCompanies.toString());

let e = itCompanies.indexOf('Apple');
if(e==-1){
    console.log('Exists');
}
else{
    console.log('Does not exist');
}
