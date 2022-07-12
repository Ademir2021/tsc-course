"use strict";
// // tuplas -> tuple
// let myTuple: [number, string, string[]];
// // myTuple = [true, false, true]
// //object literals -> (prop: value)
// const user: {name: string; age: number } = {
//     name: "Pedro",
//     age:18,
// };
// console.log(user);
// // console.log(user.name);
// //any
// let a:any = 0;
// a = "teste";
// a = true;
// a = [];
// // union type
// let id: string | number | boolean = "10"
// id = 200
// //id = true
// //id = []
// //type alias
// type myIdType = number | string
// const userId: myIdType = 10
// const productId: myIdType = "00001"
// const shirId: myIdType = 123
// // enum
// // tamanho de roupas (size: Médio, size: Pequeno)
// enum Size{
//     P = "pequeno",
//     M = "Médio",
//     G = "Grande",
// }
// const camisa = {
//     name: "Camisa gola V",
//     size: Size.M,
// }
// console.log(camisa);
// // lieral types
// let teste: "autenticado" | null;
// //teste = "outrovalor"
// teste = "autenticado";
// teste = null;
// // funcoes
// function sum(a: number, b: number){
//     return a + b;
// }
// console.log(sum(12, 12));
// // console.log(sum("12", true));
// function sayHelloTo(name: string): string{
//     return `Hello ${name}`;
// }
// console.log(sayHelloTo("Matheus"));
// function logger(msg: string): void{
//     console.log(msg);
// }
// logger("testei");
// function greeting(nome: string, greet?: string):void {
//     if(greet){
//         console.log(`Olá ${greet} ${nome}`);
//     }else{
//         console.log(`Ola ${nome}`);
//     }
// }
// greeting("José");
// greeting("Pedro", "Sir");
// // Interfaces
// interface MathFunctionParams {
//     n1: number,
//     n2: number
// }
// function sumNumber(nums: MathFunctionParams){
//     return nums.n1 + nums.n2
// }
// console.log(sumNumber({ n1: 1, n2: 2}));
// function multiplyNumbers(nums: MathFunctionParams){
//     return nums.n1 * nums.n2
// }
// const someNumbers: MathFunctionParams = {
//     n1: 5,
//     n2: 10,
// };
// console.log(multiplyNumbers(someNumbers));
// narrowing
// checagem tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
//generics
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArrayItems(a1);
showArrayItems(a2);
// classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`idade do usuario é: ${this.role}`);
            return;
        }
        console.log("Informação retrita");
    }
}
const zeca = new User("Zeca", 'Admin', true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(true);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("W", 4);
fusca.showBrand();
