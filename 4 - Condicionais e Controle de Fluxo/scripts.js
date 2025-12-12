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


// ======================================================================


console.log("=== IF, ELSE IF, ELSE ===")

// As estruturas condicionais if, else if e else permitem executar diferentes blocos de código com base em múltiplas condições.

// if é usado para testar uma condição inicial.
// else if é usado para testar condições adicionais se a condição anterior for falsa.
// else é usado para executar um bloco de código se todas as condições anteriores forem falsas.

let nota = 85

if (nota >= 90) {
    console.log("Aprovado com nota excelente!")
} else if (nota >= 80) {
    console.log("Aprovado com nota boa!")
} else if (nota >= 70) {
    console.log("Aprovado com nota regular!")
} else {
    console.log("Reprovado!")
}


// ======================================================================


console.log("=== SWITCH CASE ===")

// A estrutura switch case é usada para executar diferentes blocos de código com base no valor de uma expressão.

let diaSemana = 3
let nomeDia = ""

switch (diaSemana) {
    case 1:
        nomeDia = "Domingo"
        break
    case 2:
        nomeDia = "Segunda-feira"
        break
    case 3:
        nomeDia = "Terça-feira"
        break
    case 4:
        nomeDia = "Quarta-feira"
        break
    case 5:
        nomeDia = "Quinta-feira"
        break
    case 6:
        nomeDia = "Sexta-feira"
        break
    case 7:
        nomeDia = "Sábado"
        break
    default:
        nomeDia = "Dia inválido"
}
console.log("O dia da semana é:", nomeDia)


// ======================================================================


console.log("=== TRATAMENTO DE EXCEÇÕES ===")

// O tratamento de exceções em JavaScript é feito usando as palavras-chave try, catch e finally.

// try: Bloco de código onde uma exceção pode ocorrer.
// catch: Bloco de código que lida com a exceção se ela ocorrer.
// finally: Bloco de código que é executado após o try e catch, independentemente de uma exceção ter ocorrido ou não.

// throw new Error(): Usado para lançar uma exceção personalizada.

try {
    let resultado = 0
    if (resultado === 0) {
        throw new Error("O resultado é igual a 0") // Lança uma exceção personalizada
    } 
} catch (error) {
    console.log("Erro capturado:", error.message) // Lida com o erro
} finally {
    console.log("Bloco finally executado.")
}