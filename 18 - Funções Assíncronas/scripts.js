console.log("=== CONHECENDO O SETTIMEOUT ===");

// SetTimeout() executa uma função após um intervalo de tempo especificado

setTimeout(() => {
console.log("Olá")
}, 4000); // Tempo em milissegundos


// ======================================================================


console.log("=== CONHECENDO O SETINTERVAL ===");

// setInterval() executa uma função a cada intervalo de tempo especificado

let value = 3;

const interval = setInterval(() => {
  console.log(value--);

  if (value === 0) {
    console.log("Feliz Ano Novo!");

    // Interrompe o intervalo de execuções
    clearInterval(interval);
  }
}, 1000)


// ======================================================================


console.log("=== CONHECENDO FUNÇÕES ASSÍNCRONAS ===");

// Quando uma função assíncrona é chamada, ela retorna uma **Promise**.
// Quando a função assíncrona retorna um valor, a Promise será **resolvida** com o valor retornado.
// Quando a função assíncrona lança uma exceção ou algum valor, a Promise será **rejeitada** com o valor lançado.
// Uma função assíncrona pode conter uma expressão await, que pausa a execução da função assíncrona e espera pela resolução da Promise passada, e depois retoma a execução da função assíncrona e retorna o valor resolvido.


// ======================================================================


console.log("=== CONHECENDO PROMISES ===");

// Função que retorna uma Promise

function AsyncFunction() {
  return new Promise((resolve, reject) => {
    // Simula uma operação assíncrona
    setTimeout(() => {
      const isSuccess = false;

      if (isSuccess) {
        resolve("A operação foi concluída com sucesso!")
      } else {
        reject("Algo deu errado")
      };
    }, 3000) // Simula uma operação que leva 3 segundos
  });
};

// Visualizando que o retorno é uma Promise, mas não espera o resultado da função assíncrona, apenas retorna a Promise
// console.log(AsyncFunction());

AsyncFunction().then((response) => { // then() é chamado quando a Promise é resolvida independente do te
  console.log("Sucesso:", response);
}).catch((error) => { // catch() é chamado quando a Promise é rejeitada
  console.log("Erro:", error);
}).finally(() => { // finally() é chamado quando a Promise é resolvida ou rejeitada
  console.log("Fim da execução.");
});


// ======================================================================
