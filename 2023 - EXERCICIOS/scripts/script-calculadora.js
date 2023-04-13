/*let alcool = parseFloat(prompt("Insira o valor do alcool"))
let gasolina = parseFloat(prompt("Insira o valor da gasolina"))
let calculo = parseFloat(alcool / gasolina)
if (calculo <= 0.7) {
    alert("É melhor abastecer com alcool")
} else {
    alert("É melhor abastecer com gasolina")
}
*/

const mostrarResultado = document.getElementById("mostrarResultado");
//---------------------------------------------------
function capturarValor1() {
    const valor1 = document.getElementById("txtValor1").value;
    const valorConverted = parseFloat(valor1)
    return valorConverted;
}

function capturarValor2() {
    const valor2 = document.getElementById("txtValor2").value;
    const valorConverted = parseFloat(valor2)
    return valorConverted;
}

//--------------------------------------------------------

function somarValores() {
    let result = capturarValor1() + capturarValor2()
    console.log(result)
    const labelResultado = document.getElementById("labelResultado");
    labelResultado.innerHTML = `<p>O Resultado da Soma do número ${capturarValor1()} e o número ${capturarValor2()} é: </p>`
    const mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML = result;
    return result
}

function subtrairValores() {
    let result = capturarValor1() - capturarValor2()
    console.log(result)
    const labelResultado = document.getElementById("labelResultado");
    labelResultado.innerHTML = `<p>O Resultado da Subtração do número ${capturarValor1()} e o número ${capturarValor2()} é: </p>`
    const mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML = result;
    return result
}

function multiplicarValores() {
    let result = capturarValor1() * capturarValor2()
    console.log(result)
    const labelResultado = document.getElementById("labelResultado");
    labelResultado.innerHTML = `<p>O Resultado da Multiplicação do número ${capturarValor1()} e o número ${capturarValor2()} é: </p>`
    const mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML = result;
    return result
}

function dividirValores() {
    let result = capturarValor1() / capturarValor2()
    console.log(result)
    const labelResultado = document.getElementById("labelResultado");
    labelResultado.innerHTML = `<p>O Resultado da Divisão do número ${capturarValor1()} e o número ${capturarValor2()} é: </p>`
    const mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML = result.toFixed(6);
    return result
}







