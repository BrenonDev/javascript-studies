console.log("=== CONHECENDO SOBRE IMUTABILIDADE ===");

// CONCEITO

// Uma vez algo imutável é criado você não pode modificar seus valores ou propriedades. Em vez disso, você cria uma cópia modificada para manter o original inalterado.

// Atribuição por referência significa que quando você atribui um objeto a outro, ambos apontam para o mesmo local na memória. Portanto, se você modificar uma propriedade do objeto atribuído, isso afetará o objeto original.

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


console.log("=== APLICANDO IMUTABILIDADE ===");

// Atribuição por referência significa que quando você atribui um objeto a outro, ambos apontam para o mesmo local na memória. Portanto, se você modificar uma propriedade do objeto atribuído, isso afetará o objeto original.

// Exemplo de atribuição por referência de Objeto

const address1 = {
  street: "Rua A",
  number: 123,
};

const address2 = address1; // Isso não é uma cópia, é uma atribuição por referência. Portanto, address1 e address2 apontam para o mesmo objeto na memória.

console.log("Endereço 1:", address1.street); // Rua A
console.log("Endereço 2:", address2.street); // Rua A

address2.street = "Rua B"; 

console.log("Após a modificação do endereço 2:");

console.log("Endereço 1:", address1.street); // Rua B
console.log("Endereço 2:", address2.street); // Rua B

// Já a imutabilidade, você cria uma cópia de um objeto para modificar seus valores e mantém o objeto original imutável

// Exemplo de imutabilidade de objeto

console.log("Após a criação de uma cópia do endereço 1, modificando o endereço 3 não afeta o endereço 1:");

// const address3 = { ...address1 };
const address3 = { ...address1, number: 777 }; // Cria o novo objeto com o valor de uma propridade já alterada

address3.street = "Rua C"; // ALtera o valor de um propriedade do novo objeto

console.log("Endereço 1:", address1.street); // Rua B
console.log("N° do endereço 1:", address1.number); // Rua B
console.log("Endereço 3:", address3.street); // Rua C
console.log("N° do endereço 3:", address3.number); // Rua C

// Exemplo de atribuição por referência de Array

const list1 = [1, 2, 3];

const list2 = [ ...list1, 4]; // Cria o novo array com um valor adicionado

list2.push(5); // Adiciona um valor do novo array

console.log(list1);
console.log(list2);


// ======================================================================


console.log("=== SHALLOW COPY E DEEP COPY ===");

// Shallow Copy (cópia superficial): não pega itens aninhados
const Course1 = {
  name: "HTML",
  students: [
    {
      name: "João",
    }
  ],
};

const Course2 = {
  ...Course1,
  name: "CSS",
};

// Vai modificar o studants do Course1 também, porque studants é uma referência e não uma cópia
Course2.students.push({name: "Maria"})

console.log("Criou 2 cursos com estudantes vinculados:");

console.log(Course1, Course2);

// Deep Copy (cópia profunda): cria uma cópia dos itens aninhados
const Course3 = {
  ...Course1,
  name: "JavaScript",
  students: [
    ...Course1.students,
    {
      name: "José",
    }
  ]
}

console.log("Criou 2 cursos com estudantes diferentes:");

console.log(Course1, Course3);


// ======================================================================


console.log("=== SHALLOW FREEZING ===");

const book1 = {
  title: "Objetos Imutáveis",
  category: "JavaScript",
  author: {
    name: "Joao",
    email: "exemplo@email.com",
  },
};

// O JavaScript em si não impõe restrições à modificação dos objetos.
book1.category = "HTML"
console.log(book1);

// Congela o objeto e impede a modificação
Object.freeze(book1);
book1.category = "CSS"
console.log(book1);

// O Object.freeze() não impede modificações profundas em objetos aninhados
book1.author.name = "Maria"
console.log(book1);


// ======================================================================


console.log("=== DEEP FREEZE ===");

const book2 = {
  title: "Objetos Imutáveis",
  category: "JavaScript",
  author: {
    name: "Joao",
    email: "exemplo@email.com",
  },
};

function deepFreeze(object){
  const props = Reflect.ownKeys(object);
  
  // Itera sobre todas as propriedades do objeto
  for (const prop of props) {
    // Obtém o valor associado a propriedade atual
    const value = object[prop];

    // Verifica se o valor é um objeto ou função para continuar aplicando o Deep Freeze em objetos aninhados
    if (value && typeof value === "object" || typeof value === "function") {
      // Object.freeze(value)
      deepFreeze(value)
      
    };
  }
  // Retorna o objeto congelado
  return Object.freeze(object)
};

// Chama a função para congelar o objeto com Deep Freeze (congelamento profundo) 
deepFreeze(book2)

book2.category = "HTML";
book2.author.name = "Maria";

console.log(book2);


// ======================================================================


console.log("=== MANIPULANDO OBJETOS IMUTÁVEIS ===");

const book3 = {
  title: "Objetos Imutáveis",
  category: "JavaScript",
  author: {
    name: "Joao",
    email: "exemplo@email.com",
  },
};

const updatedBook = {
  ...book3,
  title: "Criando um front-end moderno com HTML", // Atualizando o título
  category: "HTML", // Atualizando a categoria
  type: "Programming", // Criando uma nova propriedade
}

// Objeto intacto
console.log(book3);

// Objeto modificado
console.log(updatedBook);

// Utilizando operador de desestruturação (rest operator) para remover propriedades
const {category, ...bookWithoutCategory} = book3;
console.log(bookWithoutCategory);