//prime number from 1 to 50
for(let i=2; i<=10;i++){
    let flag =0;
    for(let j=2;j< i;j++){
        
        if(i==2){
            flag=0;
            break;
        }
        if(i%j==0){
            flag=1;
            break;

        }
    }
    if(flag==0){
        console.log(i);
    }
}