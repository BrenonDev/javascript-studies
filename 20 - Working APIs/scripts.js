console.log("=== O QUE É UMA API? ===");

// Uma API (Application Programming Interface) é uma Interface que disponibiliza um conjunto de funcionalidades para serem utilizadas.

// Exemplos: API de CEP, previsão do tempo, cotação de moedas, etc.


// RELAÇÃO CLIENTE E SERVIDOR

// Cliente  ===requisição==>  API
// Cliente  <===resposta====  API


// UTILIZANDO UMA API

// A    rota = caminho    B

// APP    https://meuservidor.com.br/products    API

// https => Protocolo de comunicação
// meuservidor.com.br => Endereço do servidor
// products => Recurso da API


// MÉTODOS HTTP

// GET => Leitura
// POST => Criação
// PUT => Atualização
// DELETE => Deleção
// PATCH => Atualizar parcial


// JSON

// O JSON (JavaScript Object Notation, significa JavaScript Object Notation. É uma notação de objetos utilizado para representar dados.
// É amplamente utilizado na comunicação entre servidores e clientes.

// {
//     "chave": "valor",
// }


// ======================================================================


console.log("=== INSTALANDO O JSON-SERVER ===");

// JSON-SERVER é uma biblioteca que permite criar uma API REST fake, ou seja, uma API falsa para testes.

// Para instalar o JSON-SERVER, é necessário ter o Node.js instalado na máquina.

// Para instalar o JSON-SERVER, abra o terminal e digite o seguinte comando:

// npm install json-server

// Depois de instalado, crie um arquivo chamado server.js e configure o arquivo package.json adicionando o seguinte script:

// "scripts": {
//     "server": "json-server server.json --port=3000"
// }

// Em seguinda, rode o comando no terminal para iniciar o servidor:

// npm run server


// ======================================================================


console.log("=== INSTALANDO UMA VERSÃO ESPECÍFICA ===");

// Para instalar uma versão específica no JSON-SERVER, rode no terminal o seguinte código:

// npm install json-server@1.0.0-alpha.17

// Observação: após o "@" é informado o código da versão


// ======================================================================


console.log("=== CRIANDO UMA API DE EXEMPLO ===");


// Para criar uma API de exemplo, dentro do arquivo chamado server.json adicione o seguinte conteúdo:

// {
//     "products": [
//         {
//             "id": "1",
//             "name": "Mouse",
//             "price": 150.25
//         },
//         {
//             "id": "2",
//             "name": "Teclado",
//             "price": 90
//         },
//         {
//             "id": "3",
//             "name": "Monitor",
//             "price": 500.99
//         }
//     ]
// }

// Em seguinda, rode o comando no terminal para iniciar o servidor:

// npm run server

// A API estará disponível no endereço http://localhost:3000/products

// Observação: para acessar o produto diretamente, basta adicionar o id do produto na URL, por exemplo: http://localhost:3000/products/1


// ======================================================================


console.log("=== UTILIZANDO O FETCH ===");

// O Fetch é uma API nativa do JavaScript que permite fazer requisições HTTP de forma simples e fácil.

// Para utilizar o Fetch, basta chamar a função fetch() passando como parâmetro a URL da API que deseja acessar.

// Exemplos:

fetch("http://localhost:3000/products").then((response) => {
    response.json().then((data) => {
        console.log(data);
    });
});

fetch("http://localhost:3000/products").then(response => response.json()).then(data => console.log(data));


// ======================================================================


console.log("=== UTILIZANDO ASYNC E AWAIT ===");

// O Async e Await são palavras-chave do JavaScript que permitem escrever código assíncrono de forma mais simples e fácil de entender.

// Para utilizar o Async e Await, basta declarar a função como async e utilizar a palavra-chave await antes da chamada da função que retorna uma Promise.

// Exemplo:

async function fetchProducts() {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    console.log(data);
};

fetchProducts();

// Difenças entre o .then() e o Async/Await:
// O .then() é uma forma de lidar com Promises, enquanto o Async/Await é uma forma de lidar com Promises de forma mais simples e fácil de entender. O Async/Await é mais legível e fácil de entender, enquanto o .then() pode se tornar confuso quando há muitas Promises encadeadas.


// ======================================================================


console.log("=== PASSANDO PARÂMETROS NA REQUISIÇÃO ===");

// Para passar parâmetros na requisição, basta adicionar o parâmetro na URL da API que deseja acessar.

// Exemplo:

async function fetchProductById(id) {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const data = await response.json();
    console.log(data);
};

fetchProductById(3);