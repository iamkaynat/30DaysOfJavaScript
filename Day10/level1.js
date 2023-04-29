//create an empty set
const sett= new Set();
console.log(sett);

for(let i=1; i<11;i++){
    sett.add(i);
}
console.log(sett);

console.log(sett.delete(1));
console.log(sett.clear());

const arr=['A','B','C','D','E'];
for(const s in arr){
    sett.add(arr[s]);
}
console.log(sett);

const m = new Map();

m.set('Finland',7);
console.log(m);