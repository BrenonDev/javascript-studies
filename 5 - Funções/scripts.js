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