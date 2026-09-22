function calcularIMC(peso, altura) {
    // a funcão recebe dois parametros: peso, altura
    // calcula o IMC dividindo o peso pela altura ao quadrado
    let imc = peso / (altura * altura);

    // se for menor que 18.5, esta abaixo do peso
    if (imc < 18.5) {
        return 'IMC: ' + imc.toFixed(1) + ' | Abaixo do peso';
    }
    // se estiver entre 18.5 e 24.9, o peso esta normal
    else if (imc >= 18.5 && imc <= 24.9) {
        return 'IMC: ' + imc.toFixed(1) + ' | Peso normal';
    }
    // se estiver entre 25.0 e 29.9, esta com sobrepeso
    else if (imc >= 25.0 && imc <= 29.9) {
        return 'IMC: ' + imc.toFixed(1) + ' | Sobrepeso';
    }
    // se for 30.0 ou mais, e considerado obesidade
    else {
        return 'IMC: ' + imc.toFixed(1) + ' | Obesidade';
    }
}
// console.log vai imprimir a classificação do IMC para cada teste
console.log(calcularIMC(50, 1.75)); // teste 1: abaixo do peso (IMC 16.3)
console.log(calcularIMC(70, 1.75)); // teste 2: peso normal (IMC 22.9)
console.log(calcularIMC(95, 1.75)); // teste 3: obesidade (IMC 31.0)