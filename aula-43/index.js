// escreva uma funcao que recebe um numero e
//retorne o seguinte:
// numero e divisivel por 3 = Fizz
// numero e divisivel por 5 = Buzz
// numero e divisivel por 3 e 5= FizzBuzz
// numero nao e divisivel por 3 e 5 = retorna o proprio numero 
// checar se o numero e realmente um numero 
// use a funcao com numeros de 0 a 100
function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'; 
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0)return 'Buzz';
    else return numero;
}

console.log('teste', fizzBuzz('teste'))
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}