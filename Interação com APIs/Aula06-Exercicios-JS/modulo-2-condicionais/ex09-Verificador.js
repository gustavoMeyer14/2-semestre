function verificadorDeNumero(numero) {
    //a função 'verificadorDeNumero' recebe o parametro 'numero'
    if (numero > 0) {
        return 'É positivo!';
    }
    //impõe uma condição: se o numero for maior que zero, ele é positivo e retorna a string 'É positivo!'

    else if (numero < 0) {
        return 'É negativo!';
    }
    //impõe outra condição: se o numero for menor que zero, ele é negativo e retorna a string 'É negativo!'

    else {
        return 'É igual a zero';
    }
    //se acaso nenhuma das condições atender o numero, o numero é considerado igual a zero e retorna a string 'É igual a zero!'
}
//console.log vai imprimir a string correspondente ao numero
console.log(verificadorDeNumero(10)); //teste 1
console.log(verificadorDeNumero(-54)); //teste 2
console.log(verificadorDeNumero(0)); //teste 3