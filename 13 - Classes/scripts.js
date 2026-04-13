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