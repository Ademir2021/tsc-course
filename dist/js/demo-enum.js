"use strict";
// enum
/* Tamanho de roupas(
    size: Médio,
    size: Pequeno
)*/
var Size;
(function (Size) {
    Size["P"] = "pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.M,
};
console.log(camisa);
// lieral types
let teste;
// teste = "outrovalor"
teste = "autenticado";
teste = null;
