// enum

/* Tamanho de roupas(
    size: Médio,
    size: Pequeno
)*/

enum Size{
    P = "pequeno",
    M = "Médio",
    G = "Grande",
}

const camisa = {
    name: "Camisa gola V",
    size: Size.M,
}

console.log(camisa);

// lieral types
let teste: "autenticado" | null;

// teste = "outrovalor"
teste = "autenticado";
teste = null;