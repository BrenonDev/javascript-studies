console.log("=== REPETIÇÕES ===");

// Repetição é a execução de um bloco de código várias vezes de acordo com uma condição. Existem diferentes tipos de estruturas de repetição, como for, while e do...while.


// ======================================================================


console.log("=== LOOP WHILE ===");

// O loop while executa um bloco de código enquanto uma condição for verdadeira. A condição é verificada antes da execução do bloco, o que significa que o bloco pode não ser executado nenhuma vez se a condição for falsa desde o início.

let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
console.log("Contagem finalizada!");


// ======================================================================

console.log("=== LOOP INFINITO ===");

// Um loop infinito é um loop que nunca termina porque a condição de parada nunca é satisfeita. Isso pode ocorrer por erro de lógica ou intencionalmente para criar um processo contínuo. É importante ter cuidado ao criar loops infinitos, pois eles podem causar o travamento do programa ou do sistema.

// Exemplo de loop infinito intencional usando while (CUIDADO!):

// while (true) {
//     console.log("Este loop nunca termina!");
// }


// ======================================================================


console.log("=== LOOP DO...WHILE ===");

// O loop do...while é semelhante ao while, mas a condição é verificada após a execução do bloco de código. Isso significa que o bloco de código será executado pelo menos uma vez, mesmo que a condição seja falsa desde o início.

let count2 = 11;
do {
    console.log(count2);
    count2++;
} while (count2 < 10);
console.log("Contagem finalizada!");


// ======================================================================


console.log("=== LOOP FOR ===");

// O loop for é uma estrutura de repetição que é frequentemente usada quando o número de iterações é conhecido. Ele consiste em três partes: a inicialização, a condição e a atualização. A inicialização é executada apenas uma vez no início do loop, a condição é verificada antes de cada iteração, e a atualização é executada após cada iteração.

// Sintaxe do loop for:
// for (variável de controle; condição; incremento/decremento) {
//     // bloco de código a ser executado
// }

const tabuada = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${tabuada} x ${i} = ${tabuada * i}`);
}


// ======================================================================