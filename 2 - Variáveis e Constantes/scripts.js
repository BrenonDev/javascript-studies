console.log("=== VAR ===")

// Declarar uma variável sem valor

var user

console.log(user)

// Declarar uma variável com valor

var email = "brenon.rondello@gmail.com"

console.log(email)

// Substituir o valor da variável

email = "brenon.oliverri.rondello@gmail.com"

console.log(email)


// ======================================================================


console.log("=== CASE-SENSITIVE ===")


// Quando uma linguagem de programação é case-sensitive significa que ela é sensível a letras maiúsculas e minúsculas

var product = "Teclado Mecânico"
var Product = "Mouse Gamer"

console.log(product)
console.log(Product)


// ======================================================================


console.log("=== LET ===")

// Declarar uma variável sem valor

let userName

console.log(userName)

// let userName = "Brenon" // ERRO: variável já declarada

userName = "Brenon" // permite apenas a substituição do valor


// ======================================================================


console.log("=== CONST ===")

const pi = 3.14

console.log(pi)

// pi = 3.1415 // ERRO: não é possível substituir o valor de uma constante

// const password // ERRO: constante deve ser inicializada com um valor


// ======================================================================


console.log("=== ESCOPO ===")

// Definição: escopo é a área do código onde uma variável pode ser acessada.

// Global: variável declarada no escopo global pode ser acessada em qualquer lugar do código
// Local: variável declarada dentro de uma função só pode ser acessada dentro dessa função
// Bloco: variável declarada dentro de um bloco (delimitado por {}) só pode ser acessada dentro desse bloco


// ======================================================================


console.log("=== HOISTING ===")

// Definição: hoisting é o comportamento do JavaScript de "elevar" declarações ao topo do escopo atual (global ou local). 
// Isso significa que uma variável pode ser referenciada antes de ser declarada. 
// Atenção: apenas a declaração é movida; a inicialização permanece na linha original, o que pode gerar resultados inesperados.

// VAR
// - Escopo: global ou de função (não de bloco)
// - Pode ser redeclarada e atualizada
// - Sofre hoisting: pode ser usada antes da declaração, mas o valor será 'undefined' até ser inicializada

// LET
// - Escopo: bloco
// - Pode ser atualizada, mas não redeclarada no mesmo escopo
// - Não sofre hoisting no sentido de uso antes da declaração; acessá-la antes resulta em ReferenceError

// CONST
// - Escopo: bloco
// - Não pode ser atualizada nem redeclarada
// - Deve ser inicializada no momento da declaração
// - Não sofre hoisting no sentido de uso antes da declaração; acessá-la antes resulta em ReferenceError


// ======================================================================


console.log("=== EXEMPLO DE ESCOPO E HOISTING ===")

console.log(number) // undefined (devido ao hoisting)
var number = 10
console.log(number) // 10

// Escopo de bloco
{
    var blockVar = "Estou dentro de um bloco"
    let blockLet = "Estou dentro de um bloco"
}

console.log(blockVar) // "Estou dentro de um bloco" (var não respeita escopo de bloco)
// console.log(blockLet) // ReferenceError: blockLet is not defined (let respeita escopo de bloco)

var blockVar2 = "Valor inicial"
let blockLet2 = "Valor inicial"

{
    console.log(blockVar2) // Acessa variável do escopo pai (var não respeita escopo de bloco)
    console.log(blockLet2) // Acessa variável do escopo pai (let respeita escopo de bloco)
}


// ======================================================================


console.log("=== NOMES PARA VARIÁVEIS E CONSTANTES ===")

// Regras para nomes de variáveis e constantes:
// - Devem começar com uma letra, underscore (_) ou cifrão ($)
// - Podem conter letras, números, underscores e cifrões
// - Não podem começar com um número
// - Não podem ser palavras reservadas da linguagem (como var, let, const, if, else, function, return, etc.)
// - Não podem conter espaços e caracteres especiais e de acentuação

// Recomendações:
// - Use nomes significativos que descrevam o propósito da variável ou constante
// - Use camelCase para variáveis e funções (ex: userName, calculateTotal)
// - Use UPPER_SNAKE_CASE para constantes (ex: MAX_USERS, API_KEY)
// - Evite abreviações excessivas que possam dificultar a compreensão do código
// - Seja consistente com a nomenclatura ao longo do código

// Exemplo de nomes válidos:
let userAge = 25
const MAX_HEIGHT = 180
var $price = 99.99
let _tempValue = 42


// ======================================================================


console.log("=== TIPOS DE DADOS PRIMITIVOS ===")


// JavaScript é uma linguagem dinâmica com tipos dinâmicos, o que significa que você não precisa declarar o tipo de dado de uma variável ou constante. O tipo é determinado automaticamente com base no valor atribuído.

// Tipos primitivos:
// - String: representa texto, delimitado por aspas simples (' '), aspas duplas (" ") ou crase (` `)
// - Number: representa números, tanto inteiros quanto de ponto flutuante
// - Boolean: representa valores lógicos, podendo ser true (verdadeiro) ou false (falso)
// - Null: representa a ausência intencional de qualquer valor
// - Undefined: representa uma variável que foi declarada, mas ainda não foi atribuída a um valor
// - Symbol: representa um identificador único e imutável


// ======================================================================


console.log("=== STRING ===")

// String é uma sequência de caracteres usada para representar texto. Em JavaScript, strings podem ser delimitadas por aspas simples (' '), aspas duplas (" ") ou crase (` `).
let firstName = "Brenon"
let lastName = 'Rondello'
let fullName = `Meu nome é 
${firstName} ${lastName}` // Permite interpolação e múltiplas linhas com crase
console.log(fullName)
console.log(typeof fullName) // string

// Passar mais de um parâmetro para o console.log
console.log("Nome:", firstName, "Sobrenome:", lastName)

// Concatenação de strings
let age = 24
let welcomeMessage = "Olá, meu nome é " + firstName + " e eu tenho " + age + " anos."
console.log(welcomeMessage)

// Usando template literals (crase) para interpolação
let greeting = `Olá, meu nome é ${firstName} e eu tenho ${age} anos.`
console.log(greeting)


// ======================================================================


console.log("=== NUMBER ===")

// Number é um tipo de dado que representa tanto números inteiros quanto números de ponto flutuante (decimais).
let integerNum = 42 // Número inteiro
let negativeNum = -7 // Número negativo
let floatNum = 3.14 // Número de ponto flutuante
let notANumber = "Isso não é um número" / 2 // Not a Number (resultado de uma operação inválida)

console.log(integerNum, typeof integerNum) // 42 'number'
console.log(negativeNum, typeof negativeNum) // -7 'number'
console.log(floatNum, typeof floatNum) // 3.14 'number'
console.log(notANumber, typeof notANumber) // NaN


// ======================================================================


console.log("=== BOOLEAN ===")

// Boolean é um tipo de dado que representa valores lógicos, podendo ser true (verdadeiro) ou false (falso).
let isJavaScriptFun = true
let isFishTasty = false
console.log(isJavaScriptFun, typeof isJavaScriptFun) // true 'boolean'
console.log(isFishTasty, typeof isFishTasty) // false 'boolean'


// ======================================================================


console.log("=== NULL ===")

// Null é um tipo especial que representa a ausência intencional de qualquer valor. É usado para indicar que uma variável não possui um valor válido.
let emptyValue = null
console.log(emptyValue, typeof emptyValue) // null 'object' (isso é um comportamento histórico do JavaScript)


// =====================================================================


console.log("=== UNDEFINED ===")

// Undefined é um tipo que indica que uma variável foi declarada, mas ainda não foi atribuída a um valor.
let notAssigned
console.log(notAssigned, typeof notAssigned) // undefined 'undefined'


// ======================================================================


console.log("=== SYMBOL ===")

// Symbol é um tipo de dado que representa um identificador único e imutável. É frequentemente usado para criar propriedades de objetos que não colidem com outras propriedades.
let sym1 = Symbol("descricao")
let sym2 = Symbol("descricao")
console.log(sym1 === sym2) // false (são símbolos diferentes)
console.log(typeof sym1) // 'symbol'


// ======================================================================


console.log("=== CONVERSÃO E COERÇÃO DE TIPOS ===")

// Conversão de tipos é o processo de transformar um valor de um tipo para outro. Em JavaScript, isso pode ser feito explicitamente (conversão explícita) ou automaticamente (coerção de tipos).

// Métodos de conversão explícita:
// - String(): converte um valor para string
// - Number(): converte um valor para número
// - Boolean(): converte um valor para booleano

// Conversão explícita
let numString = "123"
console.log(numString, typeof numString) // "123" 'string'
let convertedNumber = Number(numString) // Converte string para número
console.log(convertedNumber, typeof convertedNumber) // 123 'number'

// Coerção de tipos (automática)
let coercedString = "O número é " + 5 // Número é convertido para string
console.log(coercedString, typeof coercedString) // "O número é 5" 'string'