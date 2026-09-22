function incrementarNumero(numero) {
    //guarda o valor inicial recebido no parâmetro
    let valorInicial = numero;
    //o operador '++' incrementa (soma +1) ao valor da variável 'numero'
    numero++;
    //junta o valor inicial com o valor incrementado e retorna o texto
    return 'Valor inicial: ' + valorInicial + ' | Valor incrementado (++): ' + numero;
}

//console.log vai imprimir o valor original e o valor após o incremento
console.log(incrementarNumero(5)); // teste 1: 5 vira 6
console.log(incrementarNumero(19)); // teste 2: 19 vira 20
console.log(incrementarNumero(0)); // teste 3: 0 vira 1