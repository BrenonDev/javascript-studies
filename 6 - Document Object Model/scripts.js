console.log("=== DOCUMENT OBJECT MODEL (DOM) ===")

// O Document Object Model (DOM) é uma interface de programação para documentos HTML e XML. Ele representa a página para que os programas possam alterar a estrutura, estilo e conteúdo do documento.
// O DOM representa o documento como uma árvore de nós, onde cada nó é um objeto que representa uma parte do documento.
// Com o DOM, você pode usar linguagens de programação, como JavaScript, para manipular elementos HTML dinamicamente.

// Exemplo de árvore DOM simplificada:

//                Document
//                   |
//             Element <html>
//              /          \
//  Element <head>         Element <body>
//             |           /            \
//  Element <title>   Element <h1>     Element <p>
//             |          |              |
//  Text ("Site")     Text ("Título")  Text ("Hello, World!")


// ======================================================================


console.log("=== ACESSANDO ELEMENTOS DO DOM ===")

// Você pode acessar elementos do DOM usando métodos como getElementById, getElementsByClassName, getElementsByTagName, querySelector e querySelectorAll.

// Visualizar o conteúdo do document no console
console.log(document)

// Obter o título da página
console.log(document.title)

// Acessar um elemento pelo ID
const elementoPorID = document.getElementById("guest-1")
console.log(elementoPorID)

// Mostrar as propriedades do elemento
console.dir(elementoPorID)

// Acessar elementos pela classe
const elementosPorClasse = document.getElementsByClassName("guest")
console.log(elementosPorClasse)

// Acessar cada elemento da lista de elementos com a classe "guest"
console.log(elementosPorClasse[0])
console.log(elementosPorClasse.item(1))

// Acessar elementos pela tag
const elementosPorTag = document.getElementsByTagName("li")
console.log(elementosPorTag)