console.log("=== MAIÚSCULAS E MINÚSCULAS ===");

const text = "Hello World!";

// Converte o texto para maiúsculas
console.log(text.toUpperCase());

// Converte o texto para minúsculas
console.log(text.toLowerCase());


// ======================================================================


console.log("=== OBTENDO O TAMANHO DE UM TEXTO ===");

// O tamanho de um texto é determinado pelo número de caracteres que ele contém, incluindo espaços e pontuações. Em JavaScript, podemos obter o tamanho de um texto usando a propriedade length.
const text2 = "JavaScript é incrível!";

// Obtém o tamanho do texto
console.log("Tamanho do texto: ", text2.length);


const password = "12345";

// Verifica se a senha tem pelo menos 8 caracteres
if (password.length < 8) {
    console.log("A senha é muito curta. Deve conter pelo menos 8 caracteres.");
} else {
    console.log("Senha válida.");
}

let value = 12345;

// Converte o número para string e obtém seu tamanho
console.log(String(value).length);


// ======================================================================


