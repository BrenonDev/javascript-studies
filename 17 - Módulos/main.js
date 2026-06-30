console.log("=== CONHECENDO O ES MODULES ===");

// ES Modules
// ESM é o sistema de módulo Javascript (ESM é uma abreviação para Módulos Javascript, em que “EcmaScript" é o nome oficial da especificação da linguagem Javascript).
// Define um formato para organizar e estruturar o código em módulos, permitindo a modularização e reutilização de código.


// ======================================================================


console.log("=== CRIANDO MÓDULOS ===");

// 1. Definindo tipo do arquivo JavaScript para modular
// <script type="module" src="main.js"></script>

// 2. Criando um novo arquivo JavaScript e exportando as funções individualmente ou exportando tudo no final

// export function sum(a, b) {
//     return a + b
// };

// export function multiply(a, b) {
//     return a * b
// };

// Alternativa para exportar tudo no final
// export { sum, multiply }

// 3. Importando as funções individualmente para o novo arquivo JavaScript e chamando as funções

// import { sum, multiply } from "./calc.js";

// console.log("5 + 2 = " + sum(5, 2)); // 7
// console.log("5 x 2 = " + multiply(5, 2)); // 10


// ======================================================================


console.log("=== IMPORTANDO TUDO ===");

// import * as calc from "./calc.js";

// console.log("5 + 2 = " + calc.sum(5, 2)); // 7
// console.log("5 x 2 = " + calc.multiply(5, 2)); // 10


// ======================================================================


console.log("=== EXPORTAÇÃO PADRÃO OU NOMEADA ===");

// Exportação padrão, transforma a função na chamada principal do módulo
// export default function sum(a, b) {
//     return a + b
// };

// Importando através da exportação padrão
// import defaultFunction from "./calc.js";
// console.log(defaultFunction(10, 10)); // 20

// Exportação nomeada, permite chamar as funções individualmente
// export function multiply(a, b) {
//     return a * b
// };

// Importando através da exportação nomeada
// import { multiply } from "./calc.js";
// console.log("5 + 2 = " + sum(5, 2)); // 7


// ======================================================================


console.log("=== RENOMEANDO AS EXPORTAÇÕES ===");

// Renomeando as exportações
// export { sum as sumTwoNumbers, multiply as multiplyTwoNumbers }

// Importando as exportações renomeadas
// import { sumTwoNumbers, multiplyTwoNumbers } from "./calc.js";
// console.log("5 + 2 = " + sumTwoNumbers(5, 2)); // 7
// console.log("5 x 2 = " + multiplyTwoNumbers(5, 2)); // 10


// ======================================================================


console.log("=== RENOMEANDO AS IMPORTAÇÕES ===");

// Renomeando as importações
import { multiply as mult } from "./calc.js";
console.log("5 x 2 = " + mult(5, 2)); // 10

// Útil para renomear as importações de funções que tem nomes que já estão sendo utilizados


// ======================================================================

