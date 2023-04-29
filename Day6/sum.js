let s1=0;
let s2=0;
for(let i=0 ; i<=100;i++){
    if(i%2==0){
        s1+=i;
    }
    else{
        s2+=i;
    }
}
const arr= [s1,s2];
console.log(arr);