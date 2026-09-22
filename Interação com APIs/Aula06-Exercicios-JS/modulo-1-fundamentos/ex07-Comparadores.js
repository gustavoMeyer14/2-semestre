function compararNumeros(n1, n2, n3) {
    //a variavel 'comp1' verifica se n1 é maior que n2
    let comp1 = n1 > n2;
    //a variavel 'comp2' verifica se n2 é menor que n3
    let comp2 = n2 < n3;
    //a variavel 'comp3' verifica se n1 é igual a n3
    let comp3 = n1 == n3;
    //junta os resultados booleanos (true/false) e retorna o texto
    return 'n1 > n2: ' + comp1 + ' | n2 < n3: ' + comp2 + ' | n1 == n3: ' + comp3;
}

//console.log vai imprimir o resultado booleano de cada comparação
console.log(compararNumeros(10, 5, 10)); // teste 1
console.log(compararNumeros(2, 8, 15));  // teste 2
console.log(compararNumeros(20, 20, 5)); // teste 3