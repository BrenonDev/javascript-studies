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


console.log("=== RESOLUÇÃO DE DEPENDÊNCIAS ===");

/*

VERSIONAMENTO SEMÂNTICO

Padrão de atualizações de versões que oferece um modelo fácil de entender o que mudou em uma versão.

9.1.3

9 - Major
.
1 - Minor
.
3 - Patch

Major (versão Principal): Aumenta quando são feitas alterações incompatíveis. Isso significa que, se você atualizar para uma nova versão principal, pode haver alterações que quebrarão a compatibilidade com versões anteriores.

Minor (versao Menor): Aumenta quando sao adicionadas novas funcionalidades de maneira compatível com versões anteriores. As atualizações de versão menor não devem introduzir alterações que quebram a compatibilidade com o código existente.

Patch (versão de Correção): aumenta quando são feitas correções de bugs compatíveis com versões anteriores. Isso significa que essas correções não devem introduzir novas funcionalidades ou quebrar a compatibilidade.


(~)

O til (~) permite atualizações automáticas para versões compatíveis. Isso permite receber patches e correções de bugs.

{
    "dependencies" : {
        "package-name" : "~4.17.20"
    }
}


(^)

O acento circunflexo (^) indica que o npm pode instalar automaticamente a versão mais recente compatível, mas não a próxima versão incompatível. Isso permite receber patches, correções de bugs e pequenas alterações de versão, mas não grandes alterações de versão.

{
    "dependencies" : {
        "package-name" : "^4.17.20"
    }
}


(@)

Quando você usa @ antes da versao, indica uma versao exata. O npm instalará exatamente a versão especificada.

npm install dayjs@1.11.10

*/