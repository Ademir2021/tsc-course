
// Interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumber(nums: MathFunctionParams){
    return nums.n1 + nums.n2
}
console.log(sumNumber({ n1: 1, n2: 2}));

function multiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2
}
const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10,
};
console.log(multiplyNumbers(someNumbers));


// narrowing
// checagem tipos
function doSomething(info: number | boolean){
    if (typeof info === "number"){
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
