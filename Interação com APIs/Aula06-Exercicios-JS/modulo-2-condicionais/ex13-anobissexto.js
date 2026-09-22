function verificarAnoBissexto(ano) {
    // a função 'verificarAnoBissexto' recebe um ano e checa se ele é bissexto ou não
    // verifica se o ano é divisivel por 4 e nao por 100, ou se é divisivel por 400
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return 'O ano ' + ano + ' é BISSEXTO!';
    } 
    // se não atender as condições, ele não é bissexto!
    else {
        return 'O ano ' + ano + ' NÃO é bissexto!';
    }
}

// console.log vai imprimir a verificação do ano para cada teste
console.log(verificarAnoBissexto(2024)); // teste 1: ano bissexto
console.log(verificarAnoBissexto(2023)); // teste 2: ano normal
console.log(verificarAnoBissexto(2000)); // teste 3: ano bissexto (século)