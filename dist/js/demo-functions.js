"use strict";
// Funções
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
// console.log(sum("12", true));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Matheus"));
function logger(msg) {
    console.log(msg);
}
logger("testei");
function greeting(nome, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${nome}`);
    }
    else {
        console.log(`Ola ${nome}`);
    }
}
greeting("José");
greeting("Pedro", "Sair");
