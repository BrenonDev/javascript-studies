console.log("=== CONHECENDO O SETTIMEOUT ===");

// SetTimeout() executa uma função após um intervalo de tempo especificado

setTimeout(() => {
    console.log("Olá")
}, 4000); // Tempo em milissegundos


// ======================================================================


console.log("=== CONHECENDO O SETINTERVAL ===");

// setInterval() executa uma função a cada intervalo de tempo especificado

let value = 3;

const interval = setInterval(() => {
console.log(value--);

if (value === 0) {
    console.log("Feliz Ano Novo!");

    // Interrompe o intervalo de execuções
    clearInterval(interval);
}
}, 1000)


// ======================================================================


console.log("=== CONHECENDO FUNÇÕES ASSÍNCRONAS ===");

// Quando uma função assíncrona é chamada, ela retorna uma **Promise**.
// Quando a função assíncrona retorna um valor, a Promise será **resolvida** com o valor retornado.
// Quando a função assíncrona lança uma exceção ou algum valor, a Promise será **rejeitada** com o valor lançado.
// Uma função assíncrona pode conter uma expressão await, que pausa a execução da função assíncrona e espera pela resolução da Promise passada, e depois retoma a execução da função assíncrona e retorna o valor resolvido.


// ======================================================================


console.log("=== CONHECENDO PROMISES ===");

// Função que retorna uma Promise
function AsyncFunction() {
    return new Promise((resolve, reject) => {
        // Simula uma operação assíncrona
        setTimeout(() => {
        const isSuccess = true;

        if (isSuccess) {
            resolve("A operação foi concluída com sucesso!")
        } else {
            reject("Algo deu errado")
        };
        }, 3000) // Simula uma operação que leva 3 segundos
    });
};

// Visualizando que o retorno é uma Promise, mas não espera o resultado da função assíncrona, apenas retorna a Promise
// console.log(AsyncFunction());

AsyncFunction().then((response) => { // then() é chamado quando a Promise é resolvida independente do te
    console.log("Sucesso:", response);
}).catch((error) => { // catch() é chamado quando a Promise é rejeitada
    console.log("Erro:", error);
}).finally(() => { // finally() é chamado quando a Promise é resolvida ou rejeitada
    console.log("Fim da execução.");
});


// ======================================================================


console.log("=== CONHECENDO ASYNC E AWAIT ===");

// Função que retorna uma Promise
function AsyncFunction2() {
    return new Promise((resolve, reject) => {
        // Simula uma operação assíncrona
        setTimeout(() => {
        const isSuccess = true;

        if (isSuccess) {
            resolve("A operação foi concluída com sucesso!")
        } else {
            reject("Algo deu errado")
        };
        }, 3000) // Simula uma operação que leva 3 segundos
    });
};

// Função assíncrona que utiliza await para esperar a resolução da Promise retornada pela função AsyncFunction2
// async function fetch() {
//     const response = await AsyncFunction2();
//     console.log(response);
// };

// Função (arrow function) assíncrona que utiliza await para esperar a resolução da Promise retornada pela função AsyncFunction2
// const fetch = async () => {
//     const response = await AsyncFunction2();
//     console.log(response);
// };

// Função assíncrona que utiliza await para esperar a resolução da Promise retornada pela função AsyncFunction2, com tratamento de erros utilizando try/catch/finally
async function fetch() {
    try {
        const response = await AsyncFunction2();
        console.log(response);
    } catch (error) {
        console.log("Erro:", error);
    } finally {
        console.log("Fim da execução.");
    };
};

fetch();


// ======================================================================


console.log("=== CONHECENDO O EVENT LOOP ===");

// CARACTERÍSTICAS DO JAVASCRIPT

// single threaded
// Executa uma coisa por vez.

// no-blocking
// Não trava o contexto da execução.

// asynchronous
// Por ser no-blocking precisa utilizar um paradigma assíncrono para lidar com a execução das coisas.

// concurrent
// As tarefas que executam assíncronamente concorrem uma com as outras pelo processamento.


// CONCORRÊNCIA E EVENT LOOP

// O JavaScript possui um modelo de concorrência baseado em um event loop responsável por gerenciar a execução de código assíncrono e eventos em um único thread, permitindo que o JavaScript seja não bloqueante.


/*
    FLUXO DE EXECUÇÃO DO EVENT LOOP

    Call Stack
    Armazena as chamadas de funções em execução.
    Quando uma função é chamada, ela é empilhada no topo da pilha.

    Conexão: Call Stack → Web APIs
    Tudo passa pela Call Stack.
    Algumas tarefas são executadas nela mesma e outras somente passam por ela
    para serem executadas em uma Web API.

    Web APIs
    Utilização de outros recursos, como:
    - setTimeout
    - DOM
    - fetch

    Callback Queue
    Fila que armazena callbacks e eventos que aguardam para serem processados,
    como:
    - onClick
    - onLoad

    Event Loop
    Verifica a pilha de Call Stack e Callback Queue.
    Se houver um callback aguardando e a Call Stack estiver vazia,
    o callback é removido da fila e colocado na pilha de chamadas para execução.

    Fluxo geral:
    Call Stack → Web APIs → Callback Queue → Event Loop → Call Stack
*/


// EVENT LOOP

// Tudo passa pela Call Stack. Algumas tarefas serão resolvidas nele mesmo e outras somente irá passar pela Call Stack sem fazer nada e será resolvida em alguma Web API.
// O Event Loop é quem fica chegando constantemente a Call Stack e Callback Queue.


// MICRO E MACRO TASKS

// Existem dois tipos principais de tarefas na fila de callback.

// Microtasks:
// São tarefas de alta prioridade que são executadas antes das Macrotasks (temporizadores e promises).

// Macrotasks:
// São tarefas de menor prioridade, como callbacks
// de eventos, setTimeout e setInterval.


// RESUMO

// 1 Execução de Código: O código síncrono é executado de cima para baixo, empilhando e desempilhando funções conforme necessário.
// 2 Eventos Assíncronos: Quando ocorrem eventos assíncronos, como uma requisição concluída, o callback correspondente é enfileirado na fila de callback.
// 3 Verificação do Event Loop: O Event Loop verifica a pilha de chamadas e a fila de callback. Se a pilha estiver vazia, ele move um callback da fila de callback para a pilha de chamadas.
// 4 Microtasks: Antes de verificar novamente a fila de callback, o Event Loop executa todas as microtasks pendentes.


// ======================================================================
