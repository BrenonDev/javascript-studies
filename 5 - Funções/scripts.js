console.log("=== FUNÇÕES ===")

// Funções são blocos de código reutilizáveis que realizam uma tarefa específica. Elas podem receber parâmetros de entrada, executar operações e retornar um valor.

// Declaração de uma função
function ola() {
    console.log("Hello, World!")
}
// Chamada da função
ola()


// ======================================================================


console.log("=== PARÂMETROS E ARGUMENTOS ===")

// Funções podem receber parâmetros para trabalhar com dados fornecidos durante a chamada da função.
function saudacao(nome) {
    console.log("Olá, " + nome + "!")
}

// Chamada da função com argumento
saudacao("Maria")


// ======================================================================


console.log("=== RETORNO DE VALORES ===")

// Funções podem retornar valores usando a palavra-chave return.
function soma(a, b) {
    return a + b
}

let resultado = soma(5, 3)
console.log("Resultado da soma:", resultado)


// ======================================================================


