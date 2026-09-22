function encontrarMaior(num1, num2, num3) {
    // a função 'encontrarMaior' recebe três números e identifica qual deles é o maior
    // se o num1 for maior ou igual ao num2 E ao num3, o num1 é o maior
    if (num1 >= num2 && num1 >= num3) {
        return 'O maior número é: ' + num1;
    }
    // se o num2 for maior ou igual ao num1 E ao num3, o num2 é o maior
    else if (num2 >= num1 && num2 >= num3) {
        return 'O maior número é: ' + num2;
    }
    // se não for nem o num1 nem o num2, o maior só pode ser o num3
    else {
        return 'O maior número é: ' + num3;
    }
}

// console.log vai imprimir qual número é o maior para cada conjunto de testes
console.log(encontrarMaior(10, 5, 2));  // teste 1: o primeiro é o maior (10)
console.log(encontrarMaior(4, 20, 15)); // teste 2: o segundo é o maior (20)
console.log(encontrarMaior(1, 8, 99));  // teste 3: o terceiro é o maior (99)