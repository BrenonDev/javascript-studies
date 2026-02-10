console.log("=== ARRAYS ===");

// Arrays são estruturas de dados que armazenam uma coleção de elementos, podendo ser de qualquer tipo, como números, strings, objetos, etc. Em JavaScript, os arrays são criados usando colchetes [] e os elementos são separados por vírgulas. Eles possuem uma série de métodos e propriedades que facilitam a manipulação dos dados, como adicionar, remover, ordenar, filtrar, entre outros. Os arrays são indexados, ou seja, cada elemento tem um índice numérico que começa em 0.


// ======================================================================


console.log("=== CRIANDO UM ARRAY COM UM CONSTRUTOR ===");

// Cria um array vazio usando o construtor Array
const newArray = new Array();
console.log(newArray);
console.log(newArray.length);

// Cria um array com um número específico de elementos usando o construtor Array
const available = new Array(10);
console.log(available);
console.log(available.length);


// ======================================================================


console.log("=== CRIANDO E ACESSANDO UM ARRAY ===");

// Cria um array usando a notação literal de colchetes
const fruits = ["apple", "banana", "orange"];

// Exibe o array completo
console.log(fruits);

// Exibe o tipo do array
console.log(typeof fruits);

// Exibe o tamanho do array usando a propriedade length
console.log(fruits.length);

// Acessa elementos do array usando índices
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]); // Acessa um índice que não existe, retorna undefined

// Acessa dinamicamente o último elemento do array usando a propriedade length - 1
console.log(fruits[fruits.length - 1]);


// ======================================================================


console.log("=== CONVERTENDO STRING EM ARRAY ===");

// Converte uma string em um array usando o método split()
const name = "John Doe";
const nameArray = name.split(" ");
console.log(nameArray);

// Cria um array de caracteres a partir de uma string usando o método split() com uma string vazia como separador
const charsArray = name.split("");
console.log(charsArray);


// ======================================================================


console.log("=== ADICIONANDO E REMOVENDO UM ITEM DO ARRAY ===");

// Cria um array inicial
const colors = [];
console.log(colors);

// Adiciona elementos ao final do array usando o método push()
colors.push("red");
colors.push("green");
colors.push("blue");
console.log(colors);

// Adiciona elementos ao início do array usando o método unshift()
colors.unshift("yellow");
console.log(colors);

// Remove o último elemento do array usando o método pop()
const lastColor = colors.pop();
console.log(lastColor);
console.log(colors);

// Remove o primeiro elemento do array usando o método shift()
const firstColor = colors.shift();
console.log(firstColor);
console.log(colors);


// ======================================================================


console.log("=== USANDO O ÍNDICE ===");

// Cria um array de números
const numbers = [10, 20, 30, 40, 50];
console.log(numbers);

// Encontra o índice de um elemento específico usando o método indexOf(), que retorna o índice do primeiro elemento encontrado ou -1 se não for encontrado
const position1 = numbers.indexOf(30);
const position2 = numbers.indexOf(60);
console.log(position1);
console.log(position2);

// Remove um elemento específico usando o método splice() em conjunto com indexOf() para encontrar o índice do elemento a ser removido. O primeiro parâmetro de splice() é o índice encontrado, o segundo é o número de elementos a serem removidos (1 para remover apenas o elemento encontrado)
const indexToRemove = numbers.indexOf(20);
if (indexToRemove !== -1) {
    numbers.splice(indexToRemove, 1);
}
console.log(numbers);

// Adiciona um elemento específico usando o método splice() em conjunto com indexOf() para encontrar o índice do elemento após o qual o novo elemento deve ser adicionado. O primeiro parâmetro de splice() é o índice encontrado + 1 para adicionar após o elemento encontrado, o segundo é 0 para não remover nenhum elemento, e o terceiro é o novo elemento a ser adicionado
const indexToAdd = numbers.indexOf(30);
numbers.splice(indexToAdd + 1, 0, 25);
console.log(numbers);


// ======================================================================


console.log("=== TIPOS DE DADOS EM ARRAYS ===");

// Tipos de dados em arrays podem ser variados, incluindo números, strings, objetos, funções, etc. Em JavaScript, um array pode conter elementos de diferentes tipos de dados ao mesmo tempo. Por exemplo:
const myArray = [
    "Hello",
    42,
    true,
    function() { return "This is a function"; },
    { 
        name: "Alice", 
        age: 30
    }
]

console.log(myArray[0]); // String
console.log(myArray[1]); // Número
console.log(myArray[2]); // Booleano
console.log(myArray[3]()); // Função
console.log(myArray[4].name, myArray[4].age); // Objeto


// ======================================================================


console.log("=== VERIFICANDO SE UM ELEMENTO EXISTE NO ARRAY ===");

// Verifica se um elemento existe em um array usando o método includes(), que retorna true se o elemento for encontrado e false caso contrário
const animals = ["cat", "dog", "rabbit"];
console.log(animals.includes("dog"));
console.log(animals.includes("hamster"));