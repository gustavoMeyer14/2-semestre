function soma(numero1, numero2) {
    //a funcão 'soma' recebe dois parametros: numero1 e numero2
    //esses dois parametros irão armazenar dois numeros;
    let total = numero1 + numero2;
    //a variavel 'total' vai armazenar a soma entre numero1 e numero2
    return 'Valor total: ' + total;
    //vai retornar uma string informando o valor total.
}
//console.log vai imprimir o valor total.
console.log(soma(5, 10)); // teste 1
console.log(soma(35, 20)); // teste 2
console.log(soma(100, 100)); // teste 3