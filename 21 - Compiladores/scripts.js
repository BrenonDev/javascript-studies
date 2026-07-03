console.log("=== CONHECENDO OS COMPILADORES ===");

// COMPILADOR JAVASCRIPT

// Converte código escrito em uma versão específica do JavaScript (ECMAScript) para outra versão, permitindo usar recursos mais recentes da linguagem mesmo em ambientes que não oferecem suporte a essas funcionalidades (por exemplo, em navegadores mais antigos).

// TRANSPILAÇÃO

// A transpilação também é um termo utilizado para se referir a compilação para versões anteriores.

// Parser => Mapeia todos os elementos do código js
// Transformer => Manipula os elementos js para gerar o código compatÍvel
// Generator => Gera o código JS

// Exemplo:

// Código ES6 / ES2015
(x, y) => {return x + y;};

// Código do Babel com preset es2016
"use strict";
(x, y) => {
    return x + y;
};

//Código Babel com preset es2015
"use strict";
(function (x, y) {
    return x + y;
});

// MOTIVAÇÃO

// São essenciais para a evolução contínua da linguagem. Porque permite utilizar as novidades da linguagem mesmo em ambientes que não oferecem suporte a elas.
// Além disso, facilitam a interoperabilidade entre diferentes ferramentas e bibliotecas que podem ser escritas em versões diferentes do ECMAScript.


// ======================================================================


console.log("=== INSTALANDO O BABEL ===");

// Para instalar o Babel, você pode usar o npm (Node Package Manager). Execute o seguinte comando no terminal:
// npm install --save-dev @babel/core @babel/cli @babel/preset-env

// A pasta node_modules é criada automaticamente quando você instala pacotes usando o npm. Ela contém todas as dependências do projeto, incluindo o Babel e seus plugins. Esta pasta pode ser ignorada no controle de versão (como Git) adicionando-a ao arquivo .gitignore, pois ela pode ser recriada a qualquer momento usando o comando npm install, que lê o arquivo package.json e instala todas as dependências listadas nele.

// O arquivo package.json é um arquivo de configuração do projeto Node.js que contém informações sobre o projeto, incluindo suas dependências, scripts e outras configurações. Ele é criado automaticamente quando você inicializa um projeto Node.js usando o comando npm init. O package.json permite que você gerencie facilmente as dependências do projeto e compartilhe o projeto com outros desenvolvedores.

// O arquivo package-lock.json é gerado automaticamente pelo npm quando você instala pacotes. Ele registra a versão exata de cada pacote instalado, garantindo que as mesmas versões sejam usadas em diferentes ambientes e instalações. Isso ajuda a evitar problemas de compatibilidade e garante que o projeto funcione da mesma forma em todas as máquinas.


// ======================================================================


console.log("=== CONFIGURANDO E UTILIZANDO O BABEL ===");

// Para configurar o Babel, você pode criar um arquivo chamado babel.config.js na raiz do seu projeto. Este arquivo deve exportar um objeto de configuração que define os presets e plugins que você deseja usar. Por exemplo, para usar o preset @babel/preset-env, você pode adicionar o seguinte conteúdo ao arquivo babel.config.js:

// Configuração do Babel para suportar navegadores antigos (como o Internet Explorer 11)

/*
const presets = [
    [
        "@babel/preset-env",
        {
            targets: {
                ie: "11"
            }
        }
    ]
]
module.exports = { presets }
*/

// OU

// Configuração do Babel mais recente (Babel 7+)

/*
const presets = ["@babel/preset-env"]
module.exports = { presets }
*/

// Para transpilar o código JavaScript usando o Babel, você pode usar o seguinte comando no terminal:

// .\node_modules\.bin\babel .\scripts.js --out-dir dist


// ======================================================================


console.log("=== CRIANDO UM SCRIPT PARA COMPILAR ===");

// Para criar um script no package.json que execute o Babel, você pode adicionar uma seção "scripts" ao arquivo package.json. Por exemplo:

/*
{
  "scripts": {
    "build": "babel main.js --out-dir ./dist"
  },
  "devDependencies": {
    "@babel/cli": "^8.0.1",
    "@babel/core": "^8.0.1",
    "@babel/preset-env": "^8.0.2"
  }
}
*/

// Com isso, você pode executar o comando npm run build no terminal para transpilar o código JavaScript usando o Babel e gerar os arquivos de saída na pasta dist.


// ======================================================================


console.log("=== UTILIZANDO O ARQUIVO COMPILADO ===");

// Após a execução do comando npm run build, o Babel irá gerar um arquivo compilado na pasta dist. Você pode incluir esse arquivo em seu projeto HTML ou JavaScript para utilizar o código transpilado.

// Depois de cada modificação no código-fonte, você precisará executar novamente o comando npm run build para gerar a versão atualizada do arquivo compilado na pasta dist. Isso garante que as alterações feitas no código-fonte sejam refletidas no arquivo transpilado.


// ======================================================================


