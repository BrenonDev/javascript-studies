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


console.log("=== CRIANDO E REMOVENDO ELEMENTOS ===")

// Você pode criar novos elementos do DOM usando o método createElement e removê-los usando o método removeChild ou a propriedade remove.

// Selecionar o elemento pai onde o novo elemento será adicionado
const guests = document.querySelector("ul")

// Criar um novo elemento
const newGuest = document.createElement("li")
const guestName = document.createElement("span")
guestName.textContent = "Último Convidado"

// Adicionar o nome do convidado ao novo elemento
newGuest.append(guestName)

// Adicionar o novo elemento no final da lista de convidados (pode adicionar mais de um elemento)
guests.append(newGuest)

// Adicionar o novo elemento no início da lista de convidados (pode adicionar mais de um elemento)
const anotherGuest = document.createElement("li")
anotherGuest.textContent = "Convidado 0"
guests.prepend(anotherGuest)

// Adiocionar o novo elemento no final da lista de convidados (apenas um elemento)
const lastGuest = document.createElement("li")
lastGuest.textContent = "Convidado X"
guests.appendChild(lastGuest)

// Adicionar uma classe aos novos elementos
newGuest.classList.add("guest")
anotherGuest.classList.add("guest")
lastGuest.classList.add("guest")

// Remover um elemento específico
const guestToRemove = document.querySelector("#guest-2")
guests.removeChild(guestToRemove)

// Remover um elemento diretamente
lastGuest.remove()


// ======================================================================


console.log("=== MANIPULANDO ATRIBUTOS ===")

// Você pode manipular os atributos dos elementos do DOM usando métodos como getAttribute, setAttribute, removeAttribute e hasAttribute.

const inputName = document.querySelector("#name")

// Obter um valor de atributo
const inputType = inputName.getAttribute("type")
console.log(inputType) // text

// Atualizar um atributo (atributo, valor)
inputName.setAttribute("placeholder", "Digite seu nome aqui")

// Remover um atributo
inputName.removeAttribute("placeholder")

// Verificar se um atributo existe
const hasName = inputName.hasAttribute("name")
console.log(hasName) // false


// ======================================================================


console.log("=== EVENTOS ===")

// Você pode adicionar eventos aos elementos do DOM usando o método addEventListener. Eventos são ações que ocorrem no navegador, como cliques, movimentos do mouse, pressionamento de teclas, etc.

window.addEventListener("load", () => {
  console.log("A página foi carregada.")
})

addEventListener("click", (event) => {
  console.log("A página foi clicada.")
  console.log(event) // Retorna todas as informações do evento
  console.log(event.target) // Retorna o elemento que foi clicado
  console.log(event.target.textContent) // Retorna o conteúdo de texto do elemento que foi clicado
  console.log(event.type) // Retorna o tipo do evento
})


// ======================================================================


console.log("=== EVENTO EM UM ELEMENTO ESPECÍFICO ===")

// Você pode adicionar eventos a elementos específicos do DOM para interagir com eles.

const ul = document.querySelector("ul")

ul.addEventListener("scroll", (event) => {
    console.log("A lista de convidados foi rolada.")
    console.log(ul.scrollTop) // Retorna a posição atual da rolagem
    
    if (ul.scrollTop >= ul.scrollHeight - ul.clientHeight) {
    ul.scrollTo({
        top: 0,
        behavior: "smooth",
    }) // Rola a lista de volta para o topo se a rolagem for maior ou igual a 300px
}
})

const buttonSubmit = document.querySelector("button")
buttonSubmit.addEventListener("click", (event) => {
  console.log("Botão de enviar foi clicado.")
})


// ======================================================================


console.log("=== EVENTOS DE FORMULÁRIO ===")

// Você pode adicionar eventos a formulários e seus elementos para manipular o envio de dados e interagir com os usuários.

const form = document.querySelector("form")

form.onsubmit = (event) => {
  event.preventDefault() // Previne o comportamento padrão do formulário
  console.log("Formulário enviado via onsubmit.")
}

form.addEventListener("submit", (event) => {
    event.preventDefault() // Previne o comportamento padrão do formulário
    console.log("Formulário enviado via addEventListener.")
})


// ======================================================================


console.log("=== EVENTOS EM INPUT ===")

// Você pode adicionar eventos a elementos de entrada (input) para interagir com os usuários enquanto eles digitam ou alteram valores.

const inputNameField = document.querySelector("input")

// Evento que detecta a tecla pressionada
inputNameField.addEventListener("keydown", (event) => {
  console.log(`Tecla pressionada (keydown): ${event.key}`)
})

// Evento que detecta a tecla pressionada quando o caractere é inserido
inputNameField.addEventListener("keypress", (event) => {
  console.log(`Tecla pressionada (keypress): ${event.key}`)
})

// Evento que quando o valor do input é alterado ao sair do campo
inputNameField.addEventListener("change", (event) => {
  console.log(`Valor alterado (change): ${event.target.value}`)
})

// Evento que detecta quando o valor do input é alterado em tempo real
inputNameField.addEventListener("input", (event) => {
  console.log(`Valor em tempo real (input): ${event.target.value}`)
})


// ======================================================================


console.log("=== EXPRESSÕES REGULARES (REGEX) ===")

// Expressões regulares (regex) são padrões usados para combinar combinações de caracteres em strings. Elas são frequentemente usadas para validação de entrada, pesquisa e manipulação de texto.

// Exemplo de regex: /\D+/g

// / indica o início da expressão regular
// \D corresponde a qualquer caractere que não seja um dígito (0-9)
// + indica que deve haver uma ou mais ocorrências do padrão anterior
// / indica o fim da expressão regular
// g é uma flag que significa "global", ou seja, a busca será feita em toda a string, não apenas na primeira ocorrência

const sampleText = "User123 logged in at 10:45AM on 2024-06-15."

// Usar regex para encontrar todas as sequências de caracteres que não são dígitos
const regex = /\D+/g
const result = sampleText.match(regex)
console.log(result) // Retorna um array com todas as correspondências encontradas

// RegExr - https://regexr.com/


// ======================================================================


console.log("=== MANIPULANDO VALOR DO INPUT COM REGEX ===")

// Você pode usar expressões regulares para validar e manipular o valor dos campos de entrada (input) em formulários.

const inputRegex = document.querySelector("input")
const formRegex = document.querySelector("form")

// Evento que testa o valo do input ao envio do formulário
inputRegex.addEventListener("input", (event) => {
    // Remover todos os caracteres que não são letras (A-Z, a-z)
    const value = input.value
    const regex = /\D+/g
    
    // Exibir no console o valor do input que corresponde ao regex
    console.log(value.match(regex))
    
    const isValid = regex.test(value)
    console.log(isValid) // Retorna true se houver correspondência, false caso contrário
})

// Evento que manipula o valor do input ao enviar o formulário
formRegex.addEventListener("submit", (event) => {
    event.preventDefault() // Previne o comportamento padrão do formulário
    const regex = /\D+/g
    const value = inputRegex.value.replace(regex, "")
    console.log(value)
})