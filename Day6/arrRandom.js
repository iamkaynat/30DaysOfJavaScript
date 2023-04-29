const arr =[];
for(let i=0; i<5;i++){
    arr.push(Math.floor(Math.random()* (100 -1)+1));
}
console.log(arr);

let text="";
let possible= 'ABCDEFUGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for(let i=0; i<6;i++){
    text+=possible.charAt(Math.floor(Math.random()*possible.length));
}
console.log(text);