console.log("=== APRENDENDO SOBRE CLASSES ===");

// CLASSES
// No JavaScript as classes são uma forma de criar objetos e definir seu comportamento por meio de construtores e métodos.
// Elas foram introduzidas no ECMAScript 2015 (também conhecido como ES6) para fornecer uma sintaxe mais amigável para a criação de objetos e herança de protótipos (syntax sugar).

// CONSTRUTORES E MÉTODOS
// Uma classe é basicamente um modelo para criar objetos. Ela contém um construtor, que é um método especial chamado quando um objeto é instanciado a partir da classe.
// Além do construtor, você pode adicionar métodos a uma classe. Métodos são funções associadas a objetos e descrevem o comportamento desses objetos.

// HERANÇA
// Uma classe pode herdar propriedades e métodos de outra classe, permitindo a reutilização de código.


// ======================================================================


console.log("=== CRIANDO UMA CLASSE COM UM MÉTODO CONSTRUTOR ===");

class Person {
    constructor(name) {
        console.log("Olá", name);
        
    }
}

const person = new Person("Brenon");


// ======================================================================


console.log("=== CRIANDO PROPRIEDADES DENTRO DAS CLASSES ===");

class Product {
    constructor(name) {
        this.name = name
    }
}

const product1 = new Product("Teclado");

console.log(product1.name);

const product2 = new Product("Mouse");

console.log(product2.name);


// ======================================================================


console.log("=== ADICIONANDO MÉTODOS NAS CLASSES ===");

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    sendEmail() {
        console.log("E-mail enviado para", this.name, "no o endereço", this.email);
        
    }
}

const user = new User("Brenon", "brenon@example.com");
user.sendEmail();


// ======================================================================


console.log("=== O QUE É MÉTODO ESTÁTICO? ===");

class User1{
    showMessage() {
        console.log("Olá, sou um método de instância!");
    }
}

// User1.showMessage(); // Erro: User2.showMessage is not a function


class User2 {
    static showMessage() {
        console.log("Olá, sou um método estático!");
    }
}

User2.showMessage(); // Olá, sou um método estático!


// ======================================================================