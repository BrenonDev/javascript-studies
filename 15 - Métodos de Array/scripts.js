console.log("=== MÉTODO MAP ===");

// O método map() é uma função de array que cria um novo array com os resultados da chamada de uma função para cada elemento do array original.

const products = ["Smartphone", "Notebook", "Tablet"];

// Percorrendo os itens do array
products.map((product) => {
    console.log(product); // Saída: Smartphone, Notebook, Tablet
});

// Sintaxe reduzida
products.map((product) => console.log(product)); // Saída: Smartphone, Notebook, Tablet

// Retornando um novo array com os itens do array original
const formatted = products.map((product) => {
    // return product.toUpperCase(); // Converte cada item do array para letras maiúsculas

    return {
        id: Math.random(),
        description: product
    }    
});

console.log(formatted); // Saída: [{ id: ..., description: "Smartphone" }, { id: ..., description: "Notebook" }, { id: ..., description: "Tablet" }]


// ======================================================================

