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


// Adiciona elementos em uma posição específica usando o método splice() onde o primeiro parâmetro é o índice de início, o segundo é o número de elementos a serem removidos (0 para não remover nenhum) e os parâmetros seguintes são os elementos a serem adicionados
colors.splice(1, 0, "purple", "orange");
console.log(colors);

// Remove elementos em uma posição específica usando o método splice() onde o primeiro parâmetro é o índice de início e o segundo é o número de elementos a serem removidos
const removedColors = colors.splice(2, 2);
console.log(removedColors);
console.log(colors);


// ======================================================================