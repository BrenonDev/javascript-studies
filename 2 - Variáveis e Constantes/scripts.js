
// VAR

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


// CASE-SENSITIVE

// Quando uma linguagem de programação é case-sensitive significa que ela é sensível a letras maiúsculas e minúsculas

var product = "Teclado Mecânico"
var Product = "Mouse Gamer"

console.log(product)
console.log(Product)


// ======================================================================


// LET

// Declarar uma variável sem valor

let userName

console.log(userName)

// let userName = "Brenon" // ERRO: variável já declarada

userName = "Brenon" // permite apenas a substituição do valor


// ======================================================================


// CONST

const pi = 3.14

console.log(pi)

// pi = 3.1415 // ERRO: não é possível substituir o valor de uma constante

// const password // ERRO: constante deve ser inicializada com um valor


// ======================================================================


// ESCOPO

// Definição: escopo é a área do código onde uma variável pode ser acessada.

// Global: variável declarada no escopo global pode ser acessada em qualquer lugar do código
// Local: variável declarada dentro de uma função só pode ser acessada dentro dessa função
// Bloco: variável declarada dentro de um bloco (delimitado por {}) só pode ser acessada dentro desse bloco


// ======================================================================

// HOISTING

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

// EXEMPLO DE ESCOPO E HOISTING

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

