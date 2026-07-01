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


console.log("=== GERENCIADORES DE PACOTES ===");

// GERENCIADORES DE PACOTES

// É uma ferramenta que facilita a instalação, atualização e gerenciamento de bibliotecas e dependências de um projeto.
// O gerenciador de pacotes lida com a resolução de dependências, garantindo que as bibliotecas necessárias estejam disponíveis e em versões compatíveis.

// NPM

// O npm (Node Package Manager) é um dos gerenciadores de pacotes mais populares para JavaScript.
// Usado principalmente no ecossistema do Node.js, mas também é amplamente utilizado em projetos front-end web.
// O npm permite instalar e gerenciar pacotes JavaScript. Também permite executar scripts e bibliotecas instaladas.


// DEPENDÊNCIAS E AMBIENTES

// Produção
// Inclui as dependências (pacotes/bibliotecas) necessárias para a execução do projeto em um ambiente de produção.

// Desenvolvimento
// Inclui as dependências que são necessárias apenas durante o desenvolvimento, mas não são necessárias para a execução do aplicativo em produção (por exemplo transpiladores).


// ======================================================================
