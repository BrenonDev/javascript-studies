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


// ======================================================================


console.log("=== QUERY SELECTOR ===")

// querySelector e querySelectorAll são métodos mais flexíveis para selecionar elementos do DOM usando seletores CSS.
// querySelector retorna o primeiro elemento que corresponde ao seletor CSS fornecido.
// querySelectorAll retorna todos os elementos que correspondem ao seletor CSS fornecido, como uma NodeList.

// Selecionar o elemento com o ID
const guest2 = document.querySelector("#guest-2")
console.log(guest2)

// Selecionar o primeiro elemento com a classe
const primeiroGuest = document.querySelector(".guest")
console.log(primeiroGuest)

// Selecionar todos os elementos com a classe
const todosGuests = document.querySelectorAll(".guest")
console.log(todosGuests)


// ======================================================================


console.log("=== MANIPULANDO O CONTÉUDO ===")

// Você pode manipular o conteúdo dos elementos do DOM usando propriedades como:

// textContent: Define ou retorna o conteúdo textual de um nó e seus descendentes.
// innerText: Define ou retorna o conteúdo textual "visível" de um elemento.
// innerHTML: Define ou retorna o conteúdo HTML de um elemento.

// Exibir o conteúdo vísivel e invisível do elemento
const guest1 = document.querySelector("#guest-1")
console.log(guest1.textContent)

// Exibir somente o conteúdo visível do elemento
console.log(guest1.innerText)

// Exibe o conteúdo HTML do elemento
console.log(guest1.innerHTML)

// Modificar o conteúdo do elemento
guest1.textContent = "Convidado 1 - Novo Texto"
console.log(guest1.textContent)

// Modificar o conteúdo visível do elemento
guest1.innerText = "Convidado 1 - Atualizado"
console.log(guest1.innerText)

// Modificar o conteúdo HTML do elemento
guest1.innerHTML = "<i>Convidado 1 - Itálico</i>"
console.log(guest1.innerHTML)


// ======================================================================


console.log("=== ALTERANDO ESTILOS ===")

// Você pode alterar os estilos dos elementos do DOM usando a propriedade style.

// Adicionar estilo ao elemento
const input = document.querySelector("#name")
input.classList.add("input-error")

// Remover estilo do elemento
input.classList.remove("input-error")

// Alternar estilo do elemento se já existe a classe, remove; se não existe, adiciona
input.classList.toggle("input-error")

// Alterar estilo diretamente via JavaScript
const button = document.querySelector("button")
button.style.backgroundColor = "#4CAF50"


// ======================================================================