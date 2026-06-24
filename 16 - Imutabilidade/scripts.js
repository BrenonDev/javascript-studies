console.log("=== CONHECENDO SOBRE IMUTABILIDADE ===");

// Uma vez algo imutável é criado você não pode modificar seus valores ou propriedades. Em vez disso, você cria uma cópia modificada para manter o original inalterado.

// Atribuição por referência significa que quando você atribui um objeto a outro, ambos apontam para o mesmo local na memória. Portanto, se você modificar uma propriedade do objeto atribuído, isso afetará o objeto original.

// EXEMPLO

const address1 = {
  street: "Rua A",
  number: 123,
}

const address2 = address1; // Atribuição por referência

console.log("Endereço 1:", address1.street); // Rua A
console.log("Endereço 2:", address2.street); // Rua A

address2.street = "Rua B"; 

console.log("Após somente a modificação do endereço 2:");

console.log("Endereço 1:", address1.street); // Rua B
console.log("Endereço 2:", address2.street); // Rua B

// ESTRATÉGIA

// Geralmente há duas maneiras de alterar dados.
// A primeira é mutar o dado alterando diretamente seu valor.
// A segunda maneira é substituir o dado antigo por uma nova cópia com as alterações desejadas.

// NA CRIAÇÃO DE INTERFACE (UI)

// A imutabilidade é utilizada para otimizar a atualização do DOM (Document Object Model) e para fornecer um modelo mais previsível no desenvolvimento de interfaces (UI).

// DETECTAR MUDANÇAS

// Detectar mudanças e objetos mutados é difícil, como eles são modificados diretamente a detecção do que mudou exatamente requer um objeto mutado para ser comparado com as cópias das suas próprias versões anteriores e a árvore inteira do objeto para ser cruzada.
// Detectar mudanças em objetos imutáveis é consideravelmente fácil. Se ele for diferente do anterior, concluímos que o objeto foi alterado.

// BENEFÍCIOS
// Como os dados imutáveis podem determinar facilmente se ocorreram alterações, isso também ajuda a determinar quando um componente deve ser renderizado novamente.


// ======================================================================