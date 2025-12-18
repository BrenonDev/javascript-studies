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
    email: "brenon.olivetti.rondello@gmail.com",
    age: 18,
    name: {
        first_name: "Brenon",
        last_name: "Olivetti Rondello",
    },
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