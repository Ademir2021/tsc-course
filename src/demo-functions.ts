
// Funções

function sum(a: number, b: number){
    return a + b;
}
console.log(sum(12, 12));
// console.log(sum("12", true));

function sayHelloTo(name: string): string{
    return `Hello ${name}`;
}

console.log(sayHelloTo("Matheus"));

function logger(msg: string): void{
    console.log(msg);
}
logger("testei");

function greeting(nome: string, greet?: string):void {
    if(greet){
        console.log(`Olá ${greet} ${nome}`);
    }else{
        console.log(`Ola ${nome}`);
    }
}
greeting("José");
greeting("Pedro", "Sair");
