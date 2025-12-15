console.log("=== DEPURAÇÃO DE CÓDIGO ===")

// Depuração é o processo de identificar e corrigir erros ou bugs no código.
// Breakpoints são pontos definidos no código onde a execução será pausada para inspeção.
// Ferramentas de desenvolvedor nos navegadores modernos permitem definir breakpoints, inspecionar variáveis e executar o código passo a passo.

const input = document.querySelector("input")
const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault() // Previne o comportamento padrão do formulário

    const value = input.value
    const hasNumberRegex = /\d+/g

    if (hasNumberRegex.test(value)) {
        console.log("O valor contém números.")
    } else {
        console.log("O valor não contém números.")
    }
}