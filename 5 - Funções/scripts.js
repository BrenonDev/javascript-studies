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


console.log("=== ESCOPO DE FUNÇÃO ===")

// Variáveis declaradas dentro de uma função têm escopo local e não podem ser acessadas fora da função.

function minhaFuncao() {
    let mensagem = "Olá do escopo da função!"
    console.log(mensagem)
}

minhaFuncao()
// console.log(mensagem) // ERRO: mensagem is not defined


// ======================================================================


console.log("=== COMENTÁRIO DE DOCUMENTAÇÃO ===")

// É uma boa prática documentar suas funções para explicar o que elas fazem, seus parâmetros e valores de retorno.

/**
 * Autentica um usuário com email e senha.
 * 
 * @param {*} email user email.
 * @param {*} password user password with at least 6 characters.
 * @returns {boolean} true if authentication is successful, false otherwise.
 */
function signIn(email, password) {
    // Lógica de autenticação aqui
    return true // Simulação de login bem-sucedido
}

signIn("usuario@example.com", "senha123")


// ======================================================================


console.log("=== FUNÇÃO ANÔNIMA ===")

// Funções anônimas são funções sem nome, frequentemente usadas como argumentos para outras funções ou atribuídas a variáveis.

let multiplicar = function(x, y) {
    return x * y
}
let produto = multiplicar(4, 6)
console.log("Produto:", produto)


// ======================================================================


console.log("=== ARROW FUNCTION ===")

// Arrow functions são uma sintaxe mais concisa para criar funções, especialmente úteis em callbacks e funções de uma única linha.

let somar = (a, b) => {
    return a + b
}
console.log("Soma:", somar(5, 3))

// Arrow function de uma única linha com retorno implícito

let dividir = (a, b) => a / b
console.log("Divisão:", dividir(10, 2))


// ======================================================================


console.log("=== CALLBACK FUNCTION ===")

// Funções de callback são passadas como argumentos para outras funções e são executadas após a conclusão de uma operação.

// Exemplo de função que recebe um callback inline
function executarOperacao(a, b, operacao) {
    return operacao(a, b)
}
let resultadoSoma = executarOperacao(7, 3, (x, y) => x + y)
console.log("Resultado da operação (soma):", resultadoSoma)

// Exemplo de função que recebe um callback definido previamente
function subtrair(x, y) {
    return x - y
}
let resultadoSubtracao = executarOperacao(10, 4, subtrair)
console.log("Resultado da operação (subtração):", resultadoSubtracao)