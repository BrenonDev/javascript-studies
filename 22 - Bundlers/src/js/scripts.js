console.log("=== CONHECENDO OS BUNDLERS ===");

// BUNDLERS

// Agrupa (empacota) diversos arquivos e suas dependências em um ou mais pacotes com o objetivo de otimizar o carregamento de páginas web.


// EXEMPLO

// O bundler agrupa (empacota) os arquivos e suas dependências em um único arquivo.

/*
<script type="module" src="fetchProducts. js"></script>
<script type="module" src="addProduct. js"></script>
<script type="module" src="updateProduct. js"></script>
<script type="module" src="removeProduct. js"></script>
↓ 
<script type="module" src="bundle.js"></script>
*/


// FUNCIONAMENTO

// No geral, a operação de um empacotador é dividida em duas etapas: geração do gráfico de dependência e empacotamento.


// MAPEANDO UM GRÁFICO DE DEPENDÊNCIA

// 1. A primeira coisa que um empacotador de módulo faz é gerar um mapa de relacionamento de todos os arquivos servidos. Este processo é denominado Resolução de Dependências.
// 2. O empacotador requer um arquivo de entrada (geralmente o arquivo principal). Em seguida analisa o arquivo de entrada para entender suas dependências.
// 3. Depois disso, ele percorre as dependências para determinar as dependências dessas dependências.


// AGRUPAMENTO

// Depois de receber entradas e passar por suas dependências durante a fase de Resolução de Dependências, um bundler entrega ativos estáticos que o navegador pode processar com êxito.
// Este estágio de saída é denominado Packing. Durante esse processo, o empacotador aproveitará a resolução de dependência para integrar nossos vários arquivos de código e retornar um único pacote para o navegador carregar.


// ======================================================================


console.log("=== INSTALANDO E EXECUTANDO O WEBPACK ===");

// Para instalar o Webpack, você pode usar o seguinte comando no terminal:

// npm install --save-dev webpack webpack-cli

// Para executar o Webpack, você pode configurar o script "build" no arquivo package.json. Por exemplo:

/*
{
  "scripts": {
    "build": "webpack ./src/js/index.js"
  },
  "devDependencies": {
    "webpack": "^5.108.3",
    "webpack-cli": "^7.1.0"
  }
}
*/

// Com isso, você pode executar o comando npm run build no terminal para empacotar os arquivos JavaScript usando o Webpack e gerar o arquivo de saída na pasta dist.


// ======================================================================


console.log("=== CONFIGURANDO O WEBPACK ===");

// Antes de configurar o Webpack, o arquivo package.json deve conter as dependências do Webpack e o script chamando somente o webpack. Aqui está um exemplo de como o arquivo package.json pode ser configurado:

/*
{
  "scripts": {
    "build": "webpack"
  },
  "devDependencies": {
    "webpack": "^5.108.3",
    "webpack-cli": "^7.1.0"
  }
}
*/

// Deste modo, o Webpack irá procurar automaticamente pelo arquivo webpack.config.js na raiz do projeto para obter as configurações necessárias para empacotar os arquivos JavaScript.

// Para configurar o Webpack, você pode criar um arquivo chamado webpack.config.js na raiz do seu projeto. Aqui está um exemplo de configuração básica:

/*
const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src", "js", "index.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "development"
};
*/

// A biblioteca path é usada para lidar com caminhos de arquivos e diretórios de forma independente do sistema operacional. No exemplo acima, estamos usando o método path.resolve() para criar caminhos absolutos para os arquivos de entrada e saída.

// A propriedade entry especifica o arquivo de entrada principal do seu projeto, que é o ponto de partida para o Webpack analisar as dependências.

// A propriedade output define o nome do arquivo de saída (main.js) e o diretório onde ele será gerado (dist).

// A propriedade mode define o modo de compilação do Webpack. No exemplo acima, estamos usando o modo "development" para facilitar a depuração durante o desenvolvimento. Para produção, você pode usar o modo "production" para otimizar o código final.

// Com essa configuração, ao executar o comando npm run build, o Webpack irá empacotar os arquivos JavaScript e gerar o arquivo main.js na pasta dist.


// ======================================================================


console.log("=== COMO INCLUIR O HTML ===");

// Para incluir o HTML no processo de empacotamento do Webpack, você pode usar o plugin html-webpack-plugin. Este plugin gera automaticamente um arquivo HTML que inclui o arquivo JavaScript empacotado.

// Para instalar o plugin, você pode usar o seguinte comando no terminal:

// npm install --save-dev html-webpack-plugin

// Em seguida, você pode configurar o plugin no arquivo webpack.config.js. Aqui está um exemplo de configuração:

/*
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src", "js", "index.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    plugins: [
        new HTMLWebpackPlugin()
    ]
};
*/

// Com essa configuração, o plugin html-webpack-plugin irá gerar um arquivo HTML na pasta dist que inclui automaticamente o arquivo main.js empacotado pelo Webpack. Isso facilita a inclusão do JavaScript no seu projeto sem precisar criar manualmente um arquivo HTML.


// ======================================================================
