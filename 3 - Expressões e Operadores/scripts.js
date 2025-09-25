console.log("=== EXPRESSÕES E OPERADORES ===")

// Expressões e Operadores são fundamentais em JavaScript para realizar cálculos, manipular dados e controlar o fluxo do programa.

// Operadores são símbolos que realizam operações em um ou mais operandos (valores, variáveis, etc.). As expressões são combinações de valores, variáveis e operadores que produzem um valor.

// Expressão é a combinação de valores, variáveis e operadores que resulta em um valor. Por exemplo, 5 + 3 é uma expressão que resulta em 8.


// ======================================================================

console.log("=== OPERADORES ARITMÉTICOS ===")

// Operadores Aritméticos são usados para realizar operações matemáticas básicas.

console.log("Adição: ", 5 + 3)          // Adição
console.log("Subtração: ", 5 - 3)       // Subtração
console.log("Multiplicação: ", 5 * 3)   // Multiplicação
console.log("Divisão: ", 5 / 3)         // Divisão
console.log("Módulo: ", 5 % 3)          // Resto da divisão
console.log("Exponenciação: ", 5 ** 3)  // Potência


// ======================================================================


console.log("=== INCREMENTO E DECREMENTO ===")

// Operadores de Incremento (++) e Decremento (--) são usados para aumentar ou diminuir o valor de uma variável em 1.
let num = 5
console.log("Valor inicial: ", num)
num++ // Incrementa num em 1
console.log("Após incremento: ", num)
num-- // Decrementa num em 1
console.log("Após decremento: ", num)

// Operadores de incremento e decremento podem ser usados como prefixo ou sufixo. A diferença é quando o valor é atualizado em relação à expressão em que são usados.

let a = 5
console.log("Valor de a: ", a)
console.log("Prefixo ++a: ", ++a) // Incrementa antes de usar o valor
console.log("Valor de a após ++a: ", a)
console.log("Sufixo a++: ", a++) // Usa o valor antes de incrementar
console.log("Valor de a após a++: ", a)

// Para incrementar ou decrementar mais de 1, use operadores aritméticos:
let b = 5
console.log("Valor de b: ", b)
b += 3 // Equivalente a b = b + 3
console.log("Após b += 3: ", b)
b -= 2 // Equivalente a b = b - 2
console.log("Após b -= 2: ", b)
b *= 2 // Equivalente a b = b * 2
console.log("Após b *= 2: ", b)
b /= 3 // Equivalente a b = b / 3
console.log("Após b /= 3: ", b)
b %= 2 // Equivalente a b = b % 2
console.log("Após b %= 2: ", b)
b **= 3 // Equivalente a b = b ** 3
console.log("Após b **= 3: ", b)


// ======================================================================


