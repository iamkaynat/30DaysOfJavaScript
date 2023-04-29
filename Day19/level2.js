function outer() {
    let count = 0;
    function plus() {
        count++;
        return count;
    }
    function minus() {
        count--;
        return count;
    }
    function mult() {
        count * count;
        return count;
    }
    return {
        plus: plus(),
        minus: minus(),
        mult: mult()

    }


}
const innerFunc = outer();
console.log(innerFunc.plus);