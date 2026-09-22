function verificarVotacao(idade) {
    // a funcão recebe um parametro: idade
    // se a idade for menor que 16 anos, nao pode votar
    if (idade < 16) {
        return 'Idade: ' + idade + ' anos | Não pode votar!';
    }
    // se tiver entre 16 e 17 anos ou 70 anos ou mais, o voto é facultativo
    else if ((idade >= 16 && idade < 18) || idade >= 70) {
        return 'Idade: ' + idade + ' anos | Voto facultativo!';
    }
    // se estiver entre 18 e 69 anos, o voto é obrigatorio
    else {
        return 'Idade: ' + idade + ' anos | Voto obrigatório!';
    }
}
// console.log vai imprimir a situação do eleitor para cada idade testada
console.log(verificarVotacao(14)); // teste 1
console.log(verificarVotacao(17)); // teste 2
console.log(verificarVotacao(25)); // teste 3
console.log(verificarVotacao(72)); // teste 4