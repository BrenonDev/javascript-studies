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

// O método construtor é um método especial que é chamado automaticamente quando um objeto é criado a partir da classe. Ele é usado para inicializar as propriedades do objeto.

class Person {
    constructor(name) {
        console.log("Olá", name);
        
    }
}

const person = new Person("Brenon");


// ======================================================================


console.log("=== CRIANDO PROPRIEDADES DENTRO DAS CLASSES ===");

// Propriedades são variáveis associadas a objetos. Elas armazenam informações sobre o estado do objeto. Em uma classe, você pode definir propriedades dentro do construtor usando a palavra-chave this.

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

// Métodos são funções associadas a objetos e descrevem o comportamento desses objetos. Eles podem ser definidos dentro da classe e chamados em instâncias da classe.

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

// Métodos estáticos são métodos que pertencem à classe em si, e não a instâncias da classe. Eles podem ser chamados diretamente na classe, sem a necessidade de criar um objeto a partir dela.

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


console.log("=== COMO APLICAR HERANÇA COM CLASSES? ===");

// A herança é um conceito fundamental em programação orientada a objetos que permite que uma classe (chamada de classe filha ou subclasse) herde propriedades e métodos de outra classe (chamada de classe pai ou superclasse). No JavaScript, a herança é implementada usando a palavra-chave extends.

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeNoise() {
        console.log("Alguma som genérico do animal.");
    }
}

class Dog extends Animal {
    // Não tem nada aqui, mas herda tudo da classe Animal.
}

const dog = new Dog("Rex");
console.log(dog.name); // A classe Dog herda a propriedade name da classe Animal.
dog.makeNoise(); // A classe Dog herda o método makeNoise da classe Animal, então ele pode ser chamado mesmo sem ser definido na classe Dog.


// ======================================================================


console.log("=== SOBRESCREVENDO MÉTODOS ===");

// Sobrescrever métodos é o processo de fornecer uma nova implementação para um método que já existe em uma classe pai. Isso permite que a classe filha tenha um comportamento diferente para esse método.

class Cat extends Animal {
    makeNoise() {
        console.log("Miau!"); // Sobrescreve o método makeNoise da classe Animal para fornecer um comportamento específico para a classe Cat.
    }

    run() {
        console.log(this.name, "está correndo!"); // A classe Cat pode ter seus próprios métodos além dos que herda da classe Animal.
    }
}

const cat = new Cat("Whiskers");
console.log(cat.name);
cat.makeNoise();
cat.run();


// ======================================================================


console.log("=== APRENDENDO SOBRE HERANÇA E CADA DE PROTÓTIPOS ===");

// CLASSES x PROTOTYPE
// JavaScript é dinâmico e não dispõe de uma implementação de uma class (a palavra-chave class foi introduzida no ES2015, mas é syntax sugar, o JavaScript permanece baseado em prototype).

// PROTOTYPE
// Quando se trata de herança, o JavaScript tem somente um construtor: objetos. Cada objeto tem um link interno para um outro objeto chamado prototype.
// O objeto prototype também tem um atributo prototype, e assim por diante até o que o valor null seja encontrado como sendo o seu prototype. O null que, por definição, não tem prototype, e age como um link final nesta cadeia de protótipos (prototype chain).

// RESUMO
// Quando um objeto é criado ele possui automaticamente uma propriedade que referência outro objeto e esse objeto é chamado de Prototype;
// O objeto prototype herda propriedades e métodos do seu protótipo ascendente. Essas propriedades não pertencem ao objeto em si, mas sim ao prototype do objeto;
// O Prototype é o mecanismo pelo qual os objetos JavaScript herdam recursos uns dos outros;
// A cadeia termina quando chegamos a um protótipo que tem null por protótipo;
// Um objeto pode utilizar qualquer propriedade ou método que existir nesse encadeamento de Protótipos.


// ======================================================================