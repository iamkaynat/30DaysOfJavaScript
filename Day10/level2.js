const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
const c =[...a,...b]
const A = new Set(a);
const B = new Set(b);
const C= new Set(c);
console.log(c);

const int = a.filter(ele=> B.has(ele));
console.log(int);

console.log(a.filter(ele=>!B.has(ele)));