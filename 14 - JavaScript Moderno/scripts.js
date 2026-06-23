"use strict"; // Ativa o modo estrito (strict mode) no escopo global do arquivo JavaScript. Isso significa que todas as variáveis e funções declaradas neste arquivo estarão sujeitas às regras do modo estrito. O modo estrito é uma funcionalidade do JavaScript que ajuda a escrever um código mais seguro e livre de erros, impondo regras mais rigorosas para a sintaxe e o comportamento do código. Ele pode ser ativado globalmente, como neste caso, ou localmente dentro de uma função. Obrigatório iniciar o modo estrito com a declaração "use strict"; no início do arquivo ou da função para que ele tenha efeito.


console.log("=== CONHECENDO O ECMA SCRIPT ===");

// 1995
// O JavaScript foi criado em 1995 por Brendan Eich, enquanto ele trabalhava no Netscape.
// O nome original da linguagem era Mocha, que ainda foi mudado para LiveScript, antes de a linguagem ser de fato nomeada como JavaScript.

// 1996
// No ano de 1996, com o objetivo de padronizar a linguagem a Netspace decidiu juntar o JavaScript à ECMA International.
// AECMA (Associação Europeia dos Fabricantes de Computadores) é uma associação que realiza a especificação e padronização de sistemas da informação.
// Com essa junção, foi criado um novo padrão de linguagem, que foi batizado com a união das palavras “ECMA” e “JavaScript”, resultando no nome “ECMAScript”.
// Em resumo, JavaScript é a linguagem que você escreve e executa nos navegadores, enquanto ECMAScript é a especificação que define como a linguagem JavaScript deve se comportar.
// As versões do ECMAScript (ES6, ES7, etc.) indicam as atualizações e novidades à linguagem ao longo do tempo.

// Dias atuais
// Sempre que há uma nova atualização dos recursos do JavaScript, ela é lançada pelo ECMAScript, que pode ser abreviada como ES.
//É dessa especificação que veio siglas como: ECMAScript 2023, ES2023 ou ES14.
// https://ecma-international.org/


// ======================================================================


console.log("=== CONHECENDO O STRICT MODE ===");

// O modo estrito é uma funcionalidade do JavaScript que ajuda a escrever um código mais seguro e livre de erros.


function showMessage() {

  let personName = "John"; // Correção: declarando a variável com 'let'
  console.log(personName);
}

showMessage();

class Studant {
    get point() {
        return 7;
    }
}

let studant = new Studant();
// console.log(studant.point);

// Tentando atribuir um valor a uma propriedade somente leitura (getter) em modo estrito, o que resultará em um erro, pois não é permitido modificar propriedades que são apenas de leitura.
// studant.point = 10;

console.log(studant.point);

// Tentando deletar uma propriedade do objeto global 'window' em modo estrito, o que resultará em um erro, pois não é permitido deletar propriedades do objeto global.
// delete window.document

// function sum(a, a, c) {
//     // Em modo estrito, a declaração de parâmetros duplicados em uma função é proibida, o que resultará em um erro de sintaxe.
//     return a + a + c;
// }

// const result = sum(1, 3, 2); // Tentando chamar a função 'sum' com parâmetros duplicados, o que resultará em um erro de sintaxe em modo estrito.
// console.log(result); // O resultado será 8, pois o segundo parâmetro 'a' sobrescreve o primeiro, e a função retorna a soma dos valores dos parâmetros.


// ======================================================================


console.log("=== DESESTRUTURAÇÃO DE ARRAYS ===");

// destructuring assignment (desestruturação) é uma funcionalidade do JavaScript que permite extrair valores de arrays ou propriedades de objetos e atribuí-los a variáveis de forma mais concisa e legível.

const numbers = [1, 2, 3, 4, 5];

// Desestruturação de arrays
const [first, second, third] = numbers;

console.log(first); // Saída: 1
console.log(second); // Saída: 2
console.log(third); // Saída: 3

// Desetruturar somente o primeiro
const [firstNumber] = numbers;
console.log(firstNumber); // Saída: 1

// Ignorando o primeiro elemento e desestruturando o segundo
const [_, secondNumber] = numbers;
console.log(secondNumber); // Saída: 2

// Ignorando os dois primeiros elementos e desestruturando o terceiro
const [,,thirdNumber] = numbers;
console.log(thirdNumber); // Saída: 3


// ======================================================================


console.log("=== DESESTRUTURAÇÃO DE OBJETOS ===");

// destructuring assignment (desestruturação) também pode ser aplicada a objetos, permitindo extrair propriedades de objetos e atribuí-las a variáveis de forma mais concisa e legível.

const product = {
    name: "Smartphone",
    price: 999.99,
    brand: "Samsung"
};

// Desestruturação de objetos
const { name, price, brand } = product;

console.log(name); // Saída: Smartphone
console.log(price); // Saída: 999.99
console.log(brand); // Saída: Samsung

// Desestruturando e renomeando as variáveis
const { name: productName, price: productPrice, brand: productBrand } = product;

function newProduct({ name, price, brand }) {
    console.log(`Produto: ${name}, Preço: ${price}, Marca: ${brand}`);
}

newProduct(product); // Saída: Produto: Smartphone, Preço: 999.99, Marca: Samsung


// ======================================================================


console.log("=== CONHECENDO O REST PARAMS ===");

// O Rest Params (...rest) é uma funcionalidade do JavaScript que permite representar um número indefinido de argumentos como um array. Ele é útil quando você deseja criar funções que podem aceitar um número variável de argumentos, sem precisar definir explicitamente cada parâmetro.

function values(...rest) {
    // Mostra a quantidade de argumentos passados para a função, que é armazenada no array 'rest'.
    console.log(rest.length);

    // Exibe o conteúdo do array 'rest' usando o operador de espalhamento (spread operator) para mostrar cada elemento individualmente.
    console.log(...rest);

    // Exibe o conteúdo do array 'rest' como um array completo.
    console.log(rest);
}

values(1, 2, 3, 4, 5); // Saída: 5, 1 2 3 4 5, [1, 2, 3, 4, 5]


// ======================================================================


console.log("=== CONHECENDO O SPREAD OPERATOR ===");

// O Spread Operator (...) é uma funcionalidade do JavaScript que permite expandir elementos de um array ou objeto em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para arrays literais) são esperados. Ele é útil para copiar, combinar ou espalhar elementos de arrays e objetos de forma concisa.

const numbersSpread = [1, 2, 3];

// Usando o Spread Operator para exibir os elementos do array 'numbers' individualmente
console.log(...numbersSpread); // Saída: 1 2 3

// Usando o Spread Operator para criar um novo array com elementos adicionais
const newNumbers = [...numbersSpread, 4, 5];
console.log(newNumbers); // Saída: [1, 2, 3, 4, 5]

const data = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 35 }
];

console.log(data); // Saída: (3) [{…}, {…}, {…}]
console.log(...data); // Saída: { name: "John", age: 30 } { name: "Jane", age: 25 } { name: "Bob", age: 35 }