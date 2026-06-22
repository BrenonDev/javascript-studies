"use strict"; // Ativa o modo estrito (strict mode) no escopo global do arquivo JavaScript. Isso significa que todas as variáveis e funções declaradas neste arquivo estarão sujeitas às regras do modo estrito. O modo estrito é uma funcionalidade do JavaScript que ajuda a escrever um código mais seguro e livre de erros, impondo regras mais rigorosas para a sintaxe e o comportamento do código. Ele pode ser ativado globalmente, como neste caso, ou localmente dentro de uma função. Obrigatório iniciar o modo estrito com a declaração "use strict"; no início do arquivo ou da função para que ele tenha efeito.


console.log("=== CONHECENDO O ECMA SCRIPT ===");

// 1995
// O JavaScript foi criado em 1995 por Brendan Eich, enquanto ele trabalhava no Netscape.
// O nome original da linguagem era Mocha, que ainda foi mudado para LiveScript, antes de a linguagem ser de fato nomeada como JavaScript.

// 1996
// No ano de 1996, com o objetivo de padronizar a linguagem a Netspace decidiu juntar o JavaScript à ECMA International.
// AECMA (Associação Europeia dos Fabricantes de Computadores) é uma associação que realiza a especificação e padronização de sistemas da informação.
// Com essa junção, foi criado um novo padrão de linguagem, que foi batizado com a união das palavras “ECMA” e “JavaScript”, resultando no nome “ECMAScript”.
// Em resumo, JavaScript é a linguagem que você escreve e executa nos navegadores, enquanto ECMAScript é a especificação que define como a linguagem JavaScript deve se comportar.
// As versões do ECMAScript (ES6, ES7, etc.) indicam as atualizações e novidades à linguagem ao longo do tempo.

// Dias atuais
// Sempre que há uma nova atualização dos recursos do JavaScript, ela é lançada pelo ECMAScript, que pode ser abreviada como ES.
//É dessa especificação que veio siglas como: ECMAScript 2023, ES2023 ou ES14.
// https://ecma-international.org/

// ======================================================================

console.log("=== CONHECENDO O STRICT MODE ===");

// O modo estrito é uma funcionalidade do JavaScript que ajuda a escrever um código mais seguro e livre de erros.


function showMessage() {

  let personName = "John"; // Correção: declarando a variável com 'let'
  console.log(personName);
}

showMessage();

class Studant {
    get point() {
        return 7;
    }
}

let studant = new Studant();
// console.log(studant.point);

// Tentando atribuir um valor a uma propriedade somente leitura (getter) em modo estrito, o que resultará em um erro, pois não é permitido modificar propriedades que são apenas de leitura.
// studant.point = 10;

console.log(studant.point);

// Tentando deletar uma propriedade do objeto global 'window' em modo estrito, o que resultará em um erro, pois não é permitido deletar propriedades do objeto global.
// delete window.document

function sum(a, a, c) {
    // Em modo estrito, a declaração de parâmetros duplicados em uma função é proibida, o que resultará em um erro de sintaxe.
    return a + a + c;
}

const result = sum(1, 3, 2);
console.log(result); // O resultado será 8, pois o segundo parâmetro 'a' sobrescreve o primeiro, e a função retorna a soma dos valores dos parâmetros.