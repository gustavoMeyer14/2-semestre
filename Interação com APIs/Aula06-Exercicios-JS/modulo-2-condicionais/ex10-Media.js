function mediaDoAluno(nota1, nota2) {
    //a função 'mediaDoAluno' recebe dois parametros: nota1, nota2
    
    //a variavel 'media' soma as duas notas e divide por 2.
    let media = (nota1 + nota2) / 2;
    
    //se a media do aluno for maior que 7.0, retorna a string 'Aluno aprovado!'
    if (media >= 7.0) {
        return 'Aluno aprovado! | Média: ' + media;
    }

    //se a media do aluno for menor que 7.0, retorna a string 'Aluno reprovado!'
    else {
        return 'Aluno reprovado! | Média: ' + media;
    }
}
//console.log imprime o resultado
console.log(mediaDoAluno(7, 9)); //teste 1
console.log(mediaDoAluno(6, 4)); // teste 2
console.log(mediaDoAluno(9, 10)); // teste 3