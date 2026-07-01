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
