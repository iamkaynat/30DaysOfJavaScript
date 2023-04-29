function outer() {
    let count = 0;
    function inner() {
        count++;
        return count;
    }
    return inner;
}
const inn = outer();
console.log(inn());