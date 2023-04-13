const numero1 = 54.98;
const numero2 = 36.65;

// Adiciona os dois números
const soma = numero1 + numero2;

// Exibe a soma
console.log('A soma do ' + numero1 + ' e ' + numero2 + ' é: ' +
    soma);

if (navigator.cookieEnabled) {
    alert("O navegador suporta cookies.");
} else {
    alert("O navegador não suporta cookies.");
}

// Utilizando a função console para exibir informações no navegador.
let semaforo = "vermelho";
if (semaforo === "verde") {
    console.log("Siga!");
} else if (semaforo === "vermelho") {
    console.log("Pare!");
} else {
    console.log("Atenção!");
}

const animal = "gato";
switch (animal) {
    case "cachorro":
        console.log("Eu possuo um cachorro.");
        break;
    case "gato":
        console.log("Eu possuo um gato.");
        break;
    case "cobra":
        console.log("Eu possuo uma cobra.");
        break;
    case "papagaio":
        console.log("Eu possuo um papagaio.");
        break;
    default:
        console.log("Eu não possuo um animal de estimação.");
        break;
}


let contador = 1;
while (contador < 10) {
    console.log(contador);
    contador = contador + 2;
}

let array1 = [];

// é usado para criar um novo array com todos os elementos que passaram no teste desejado. 
array1.filter();
//  Método “forEach()”: é usado para executar um método fornecido apenas uma vez para cada elemento do array.   
array1.forEach();
//Método “sort()”: é usado para ordenar os elementos de um array a partir de um critério e retornar o array ordenado.
array1.sort();
// Método “concat()”: é usado para unir dois ou mais arrays em um novo array. 
array1.concat();

array1.map();


// Exibe os números de 1 a 5
// Inicializa as variáveis
const numero = 5;
// Looping de i = 1 até 5
// Em cada interação, a variável i é incrementada de 1 em 1
for (let i = 1; i <= numero; i++) {
    console.log(i); // Exibe o valor de i
}

// Exibe os números de 1 a 5
// Inicializa as variáveis
let i = 1, numero5 = 5;
// Looping de i = 1 até 5
while (i <= numero) {
    console.log(i); // Exibe o valor de i
    i = i + 1; // Incrementa o valor de i de 1 em 1
}

// Declaração da função
function saudacao() {
    console.log("Olá mundo!");
}

// Chamada da função saudacao
saudacao();

// Declaração da função
function saudacao(nome) {
    console.log("Olá " + nome + "!");
}

// Leitura do valor
let valor1 = prompt("Entre com o seu nome: ");

// Chamada da função
saudacao(valor1);

// Programa para realizar a adição de dois números usando função
// Declaração da função
function adicao(a, b) {
    console.log(a + b);
}

// Chamada da função
adicao(3, 4); // Resultado: 7
adicao(2, 9); // Resultado: 11

// Função para somar dois números
// Declaração da função
function adicao(a, b) {
    return a + b;
}

// Coleta duas entradas do usuário
let numero3 = parseFloat(prompt("Entre com o primeiro número: "));
let numero4 = parseFloat(prompt("Entre com o segundo número: "));

// Chamada da função
let resultado = adicao(numero3, numero4);

// Exibe o resultado
console.log("A soma é " + resultado);


// Programa para encontrar o dobro de um número
// Função é declarada dentro de uma variável
let valor = function (numero) {
    return numero * numero;
};

// Impressão do resultado
console.log(valor(4));

// Pode ser usado como valor de variável para outras variáveis
let calculo = valor(3);
console.log(calculo);

let exibir = function () {
    console.log("Eu sou uma função anônima!");
};

// Chamada da função
exibir();

let adicionar1 = function (valorA, valorB) {
    return valorA + valorB;
};

// Chama a função e exibe o resultado
console.log(adicionar1(10, 20)); // Resultado: 30


let adicionar2 = (valorA, valorB) => valorA + valorB;

// Chama a função e exibe o resultado
console.log(adicionar2(10, 20)); // Resultado: 30;


let adicionar3 = (valorA, valorB) => {
    return valorA + valorB;
};

// Chama a função e exibe o resultado
console.log(adicionar3(10, 20)); // Resultado: 30

let dobro1 = numero => numero * 2;
console.log(dobro1(3)); // Resultado: 6

let dobro2 = function (numero) {
    return numero * 2;
};
console.log(dobro2(3)); // Resultado: 6

let mensagem = () => console.log("Olá mundo!");
mensagem();


let soma1 = (a, b) => { // A chave abre uma função multilinha
    let resultado = a + b;
    return resultado; // Se usarmos chaves, precisamos de uma instrução "return" explícita
};

console.log(soma1(1, 2)); // Resultado: 3



        
