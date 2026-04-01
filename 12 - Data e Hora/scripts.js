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
console.log(new Date(2026, 2, 23)); // 23 de março de 2026 (mês é zero-indexado, ou seja, 0 = janeiro, 1 = fevereiro, etc.)

// Define data e hora específica
console.log(new Date(2026, 2, 23, 13, 14, 15)); // 23 de março de 2026 às 13:14:15

// Definindo uma data e hora específica usando uma string
console.log(new Date("2026-03-23T13:14:15"));

console.log(new Date("March 23, 2026 13:14:15"));


// ======================================================================


console.log("=== METODOS DE DATA E HORA ===");

let date = new Date("2026-03-23T13:14:15");

// Dia da semana (0 = domingo, 1 = segunda-feira, ..., 6 = sábado)
console.log("Dia da Semana:", date.getDay()); // 1 (segunda-feira)

// Dia do mês (1-31)
console.log("Dia do Mês:", date.getDate()); // 23

// Mês (0-11, onde 0 = janeiro, 1 = fevereiro, ..., 11 = dezembro)
console.log("Mês:", date.getMonth()); // 2 (março)

// Ano (4 dígitos)
console.log("Ano:", date.getFullYear()); // 2026

// Hora (0-23)
console.log("Hora:", date.getHours()); // 13

// Minutos (0-59)
console.log("Minutos:", date.getMinutes()); // 14

// Segundos (0-59)
console.log("Segundos:", date.getSeconds()); // 15

// Milissegundos (0-999)
console.log("Milissegundos:", date.getMilliseconds()); // 0 (não especificado, então é 0)


// ======================================================================


console.log("=== MODIFICANDO DATA E HORA ===");

let date2 = new Date("2026-03-23T13:14:15");

// Modifica o ano
date2.setFullYear(2025);
console.log("Ano Modificado:", date2.getFullYear()); // 2025

// Modifica o mês (0-11)
date2.setMonth(11);
console.log("Mês Modificado:", date2.getMonth()); // 11 (dezembro)

// Modifica o dia do mês (1-31)
date2.setDate(25);
console.log("Dia do Mês Modificado:", date2.getDate()); // 25

// Modifica a hora (0-23)
date2.setHours(10);
console.log("Hora Modificada:", date2.getHours()); // 10

// Modifica os minutos (0-59)
date2.setMinutes(30);
console.log("Minutos Modificados:", date2.getMinutes()); // 30

// Modifica os segundos (0-59)
date2.setSeconds(45);
console.log("Segundos Modificados:", date2.getSeconds()); // 45

// Modifica os milissegundos (0-999)
date2.setMilliseconds(500);
console.log("Milissegundos Modificados:", date2.getMilliseconds()); // 500


// ======================================================================