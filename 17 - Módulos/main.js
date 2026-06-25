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

import { sum, multiply } from "./calc.js";

console.log("5 + 2 = " + sum(5, 2));
console.log("5 x 2 = " + multiply(5, 2));


// ======================================================================


console.log("=== IMPORTANDO TUDO ===");

import * as calc from "./calc.js";

console.log("5 + 2 = " + calc.sum(5, 2));
console.log("5 x 2 = " + calc.multiply(5, 2));


// ======================================================================