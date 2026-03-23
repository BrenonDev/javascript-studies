console.log("=== OBTENDO DATA E HORA ===");

// Obtendo a data e hora atual
console.log("Data e Hora Atual:", new Date(0));

// Criando uma data específica (1 de janeiro de 1970 - data de referência inicial do JavaScript)
console.log("Data e Hora Atual:", new Date(0)); // Convertido para o fuso horário local

// Obtendo o timestamp (milissegundos desde 1 de janeiro de 1970 - data de referência inicial do JavaScript)
console.log(new Date().getTime());

// Criando uma data específica (1 de janeiro de 2020)
console.log(new Date(2020, 0, 1));


// ======================================================================


console.log("=== DEFININDO DATA E HORA ===");

// Definindo uma data específica
console.log(new Date(2025, 2, 23)); // 23 de março de 2025 (mês é zero-indexado, ou seja, 0 = janeiro, 1 = fevereiro, etc.)

// Define data e hora específica
console.log(new Date(2025, 2, 23, 13, 14, 15)); // 23 de março de 2025 às 13:14:15

// Definindo uma data e hora específica usando uma string
console.log(new Date("2025-03-23T13:14:15"));

console.log(new Date("March 23, 2025 13:14:15"));
