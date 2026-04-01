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


console.log("=== FORMATANDO DATA E HORA ===");

let date3 = new Date("2026-03-01T13:14:15");

// Formata para o dia sempre ter 2 dígitos
console.log("Dia com 2 dígitos:", String(date3.getDate()).padStart(2, '0')); // 01

// Formata para o mês sempre ter 2 dígitos (lembrando que os meses são zero-indexados, então adicionamos 1)
console.log("Mês com 2 dígitos:", String(date3.getMonth() + 1).padStart(2, '0')); // 03

// Montando a data e hora no formato DD/MM/YYYY HH:mm:ss
let year = date3.getFullYear();
let month = String(date3.getMonth() + 1).padStart(2, '0');
let day = String(date3.getDate()).padStart(2, '0');
let hours = String(date3.getHours()).padStart(2, '0');
let minutes = String(date3.getMinutes()).padStart(2, '0');
let seconds = String(date3.getSeconds()).padStart(2, '0');
console.log("Data e Hora no formato DD/MM/YYYY HH:mm:ss:", `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`); // 01/03/2026 13:14:15


// ======================================================================


console.log("=== CONVERTENDO UMA DATA PARA STRING ===");

let date4 = new Date("2026-03-23T13:14:15");

// Converte pora String usando toString()
console.log("toString():", date4.toString()); // Mon Mar 23 2026 13:14:15 GMT-0300 (Horário Padrão de Brasília)

// Converte para String usando toDateString()
console.log("toDateString():", date4.toDateString()); // Mon Mar 23 2026

// Converte para String usando toTimeString()
console.log("toTimeString():", date4.toTimeString()); // 13:14:15 GMT-0300 (Horário Padrão de Brasília)


// ======================================================================


console.log("=== EXIBINDO DATA E HORA FORMATADAS DE ACORDO COM A LOCALIDADE ===");

let date5 = new Date("2026-03-01T13:14:15");

// Exibe apenas a data formatada de acordo com a localidade do navegador
console.log("Data Formatada (localidade do navegador):", date5.toLocaleDateString()); // Exemplo: 23/03/2026

// Exibe apenas a hora formatada de acordo com a localidade do navegador
console.log("Hora Formatada (localidade do navegador):", date5.toLocaleTimeString()); // Exemplo: 13:14:15

// Exibe a data e hora formatada para uma localidade específica (por exemplo, para os Estados Unidos)
console.log("Data e Hora Formatada (localidade dos EUA):", date5.toLocaleString('en-US')); // Exemplo: 3/23/2026, 1:14:15 PM

// Exibe a data e hora formatada de acordo com a localidade do navegador
console.log("Data e Hora Formatada (localidade do navegador):", date5.toLocaleString()); // Exemplo: 23/03/2026 13:14:15


// ======================================================================