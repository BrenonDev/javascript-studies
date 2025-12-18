console.log("=== OBJETOS ===");

// Um objeto é uma estrutura que agrupa dados (propriedades) e comportamentos (métodos) relacionados — normalmente uma instância concreta de um tipo ou classe.

// Propriedades: campos que armazenam o estado de um objeto; representam atributos/valores.

// Métodos: funções associadas a um objeto que definem comportamentos; podem ler/alterar propriedades.


// ======================================================================


console.log("=== CRIANDO UM OBJETO ===");

// Cria um objeto vazio
const obj = {};
console.log(obj);
console.log(typeof obj);

// Cria um objeto com propriedades e métodos
const user = {
    name: {
        first_name: "Brenon",
        last_name: "Olivetti Rondello",
    },
    email: "brenon.olivetti.rondello@gmail.com",
    age: 18,
    address: {
        street: "Rua Aurora Torres Cazerta",
        number: 110,
        city: "Sorocaba",
        postal_code: "18051-841",
    },
    message: () => {
        console.log("Hello World!");
    },
};


// ======================================================================


console.log("=== ACESSANDO UM OBJETO ===");

// Acessa propriedades e métodos usando a notação de ponto
console.log(user.email);

// Acessa objeto dentro de objeto usando a notação de colchetes
console.log(user.name.first_name);
console.log(user.name.last_name);

// Executa o método do objeto usando a notação de colchetes
user.message()

// Acessa propriedades e métodos usando a notação de colchetes
console.log(user["email"]);

// Acessa objeto dentro de objeto usando a notação de colchetes
console.log(user["name"]["first_name"]);

// Executa o método do objeto usando a notação de colchetes
user["message"]();


// ======================================================================


console.log("=== ACESSANDO PROPRIEDADES NO CONTEXTO DO OBJETO ===");

// A palavra reservada this faz referência ao objeto que está executando o código no contexto atual e permite acessar as propriedades e métodos do próprio objeto
// Observação: Não funciona arrow function ao usar this

const user2 = {
    name: "Brenon",
    message: function () {
        console.log(`Olá ${this.name}`);
    },
}

user2.message()


// ======================================================================


console.log("=== ATUALIZANDO UM OBJETO ===");

const product = {
    name: "Teclado",
    quantity: 100,
};

// Acessando o objeto
console.log(product);

// Atualiza o valor de uma propriedade pela notação de ponto
product.name = "Mouse";
product.quantity = 90;

console.log(product);

// Atualiza o valor de uma propriedade pela notação de colchetes
product["quantity"] = 50;

console.log(product);


// ======================================================================


console.log("=== ENCADEAMENTO OPCIONAL ===");

// OPTIONAL CHAINING (?.) encadeamento opcional se a propriedade ou função chamada é nullish (null or undefined), a expressão retorna undefined em vez de gerar um erro.
// Útil ao explorar o conteúdo de um objeto quando não existe garantia da existência de determinadas propriedades obrigatórias.

const user3 = {
    id: 1,
    name: "Brenon",
    /*
    address: {
        street: "Rua Aurora Torres Cazerta",
        number: 110,
        city: "Sorocaba",
        geo: {
            latitude: 47.8080,
            longitude: 17.5674,
        },
    },
    */
    message: function() {
        console.log("Hello World!");
    },
};

// Acessa propriedades do objeto de forma segura, evitando gerar erros caso a propriedade não exista
console.log(user3?.address?.street);

// Acessa métodos do objeto de forma segura, evitando gerar erros caso o método não exista
user.message?.()


// ======================================================================