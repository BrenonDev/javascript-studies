console.log("=== MÉTODO MAP ===");

// O método map() é uma função de array que cria um novo array com os resultados da chamada de uma função para cada elemento do array original.

const products = ["Smartphone", "Notebook", "Tablet"];

// Percorrendo os itens do array
products.map((product) => {
    console.log(product); // Saída: Smartphone, Notebook, Tablet
});

// Sintaxe reduzida
products.map((product) => console.log(product)); // Saída: Smartphone, Notebook, Tablet

// Retornando um novo array com os itens do array original
const formatted = products.map((product) => {
    // return product.toUpperCase(); // Converte cada item do array para letras maiúsculas

    return {
        id: Math.random(),
        description: product
    }    
});

console.log(formatted); // Saída: [{ id: ..., description: "Smartphone" }, { id: ..., description: "Notebook" }, { id: ..., description: "Tablet" }]


// ======================================================================


console.log("=== MÉTODO FILTER ===");

// O método filter() é uma função de array que cria um novo array com todos os elementos que passam em um teste implementado por uma função fornecida.

const words = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// Filtrando palavras com mais de 4 letras
const longWords = words.filter((word) => word.length > 4);

console.log(longWords); // Saída: ["JavaScript", "Python"]

const productsFilter = [
    { name: "Smartphone", price: 999.99, promotion: true },
    { name: "Notebook", price: 1999.99, promotion: false },
    { name: "Tablet", price: 499.99, promotion: true }
];
// Filtrando produtos em promoção
const promotion = productsFilter.filter((product) => product.promotion === true);

console.log(promotion); // Saída: [{ name: "Smartphone", price: 999.99, promotion: true }, { name: "Tablet", price: 499.99, promotion: true }]


// ======================================================================


console.log("=== MÉTODO FIND INDEX ===");

// O método findIndex() é uma função de array que retorna o índice do primeiro elemento que satisfaz a função de teste fornecida. Caso nenhum elemento satisfaça a função, ele retorna -1.

const numbers = [10, 20, 30, 40, 50];

// Encontrando o índice do primeiro número maior que 25
const index = numbers.findIndex((number) => number > 25);

// Exibe o índice encontrado
console.log(index); // Saída: 2 (índice do número 30)

// Exibe o valor do índice encontrado
console.log(numbers[index]); // Saída: 30

// Valor não encontrado
const notFoundIndex = numbers.findIndex((number) => number > 100);
console.log(notFoundIndex); // Saída: -1 (nenhum número maior que 100 foi encontrado)


// ======================================================================


console.log("=== MÉTODO FIND ===");

// O método find() é uma função de array que retorna o valor do primeiro elemento que satisfaz a função de teste fornecida. Caso nenhum elemento satisfaça a função, ele retorna undefined.

// Encontrando o primeiro número maior que 25
const foundNumber = numbers.find((number) => number > 25);

// Exibe o valor encontrado
console.log(foundNumber); // Saída: 30

// Exemplo com objetos
const fruits = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Grapes", color: "Green" }
];

// Encontrando a primeira fruta com cor amarela
const yellowFruit = fruits.find((fruit) => fruit.color === "Yellow");

// Exibe a fruta encontrada
console.log(yellowFruit.name); // Saída: "Banana"

// Valor não encontrado
const notFoundFruit = fruits.find((fruit) => fruit.color === "Blue");
console.log(notFoundFruit); // Saída: undefined (nenhuma fruta com cor azul foi encontrada)


// ======================================================================


console.log("=== MÉTODO EVERY ===");

// O método every() é uma função de array que testa se todos os elementos do array passam em um teste implementado por uma função fornecida. Ele retorna true se todos os elementos passarem no teste, caso contrário, retorna false.

const ages = [18, 22, 30, 25];

// Verificando se todos os elementos são maiores ou iguais a 18
const allAdults = ages.every((age) => age >= 18);
console.log(allAdults); // Saída: true

// Verificando se todos os elementos são menores que 30
const allUnder30 = ages.every((age) => age < 30);
console.log(allUnder30); // Saída: false (nem todos os elementos são menores que 30)


// ======================================================================