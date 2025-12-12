console.log("=== CONDICIONAIS ===")

// Condicionais permitem executar diferentes blocos de código com base em condições específicas, sendo fundamentais para o controle de fluxo em programas.


// ======================================================================


console.log("=== OPERADOR CONDICIONAL TERNÁRIO ===")

// O Operador Condicional Ternário é uma forma concisa de expressar uma condição if-else em uma única linha.

let idade = 20
let podeBeber = (idade >= 18) ? "Pode beber" : "Não pode beber"
console.log("Idade: ", idade)
console.log("Resultado do operador ternário: ", podeBeber)


// ======================================================================


console.log("=== FALSY E TRUTHY ===")

// Em JavaScript, valores podem ser avaliados como "falsy" (falsos) ou "truthy" (verdadeiros) em contextos booleanos.

console.log("Exemplos de Falsy");

console.log(false ? "Verdadeiro" : "Falso") // Falso
console.log(0 ? "Verdadeiro" : "Falso") // Falso
console.log(-0 ? "Verdadeiro" : "Falso") // Falso
console.log("" ? "Verdadeiro" : "Falso") // Falso
console.log(null ? "Verdadeiro" : "Falso") // Falso
console.log(undefined ? "Verdadeiro" : "Falso") // Falso
console.log(NaN ? "Verdadeiro" : "Falso") // Falso

console.log("Exemplos de Truthy");

console.log(true ? "Verdadeiro" : "Falso") // Verdadeiro
console.log(1 ? "Verdadeiro" : "Falso") // Verdadeiro
console.log(-1 ? "Verdadeiro" : "Falso") // Verdadeiro
console.log(" " ? "Verdadeiro" : "Falso") // Verdadeiro
console.log("String" ? "Verdadeiro" : "Falso") // Verdadeiro
console.log([] ? "Verdadeiro" : "Falso") // Verdadeiro
console.log({} ? "Verdadeiro" : "Falso") // Verdadeiro
console.log(function(){} ? "Verdadeiro" : "Falso") // Verdadeiro


