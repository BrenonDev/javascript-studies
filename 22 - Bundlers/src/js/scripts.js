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
