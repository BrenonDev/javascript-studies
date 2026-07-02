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