console.log("=== O QUE SÃO PACOTES? ===");

// PACOTES

// Pacotes (ou bibliotecas) fornecem funcionalidades prontas que você pode reutilizar em seus próprios projetos. Isso economiza tempo e esforço, evitando a necessidade de reescrever funcionalidades.
// Você pode acelerar o desenvolvimento, porque não precisa criar tudo do zero. Isso é especialmente útil para tarefas repetitivas ou padrões de programação comuns.

// DISTRIBUIÇÃO

// Bons pacotes são mantidas pela comunidade ou por organizações dedicadas. Isso significa que elas são atualizadas para corrigir bugs, melhorar o desempenho e fornecer novos recursos.
// Ao usar pacotes, você pode se beneficiar dessas atualizações sem ter que implementá-las você mesmo.


// ======================================================================


console.log("=== UTILIZANDO O DAY.JS PELO BROWSER ===");

// https://day.js.org/docs/en/installation/browser

// No HTML:

// <!-- Adiciona pacote/biblioteca no projeto -->
// <script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
// <script type="module" src="main.js"></script>

const now = dayjs();

console.log(now.format("DD/MM/YYYY"));


// ======================================================================
