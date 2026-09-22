function testarOperadores(booleano1, booleano2) {
    // && (AND) retorna true só se os dois forem true
    let resultadoAND = booleano1 && booleano2;
    // || (OR) retorna true se pelo menos um for true
    let resultadoOR = booleano1 || booleano2;
    // ! (NOT) inverte o valor booleano
    let resultadoNOT1 = !booleano1;
    let resultadoNOT2 = !booleano2;
    // junta os resultados e retorna o texto formatado
    return 'AND: ' + resultadoAND + ' | OR: ' + resultadoOR + ' | NOT1: ' + resultadoNOT1 + ' | NOT2: ' + resultadoNOT2;
}

// o console.log imprime os resultados dos operadores para cada combinação
console.log(testarOperadores(true, true));   // teste 1
console.log(testarOperadores(true, false));  // teste 2
console.log(testarOperadores(false, false)); // teste 3