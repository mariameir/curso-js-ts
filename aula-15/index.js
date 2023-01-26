let num1 = 9.5478;
let num2 = Math.floor(num1); //arredonda para cima
let num3 = Math.ceil(num1); //arredonda para cima
let num4 = Math.round(num1); //arredonda para o mais proximo
console.log(num2);
console.log(num3);
console.log(num4);

console.log(Math.max(1,2,34,54,6565,678)); //mostra o maior numero
console.log(Math.min(1,2,34,54,6565,678)); //mostra o menor numero

console.log(Math.random()); //mostra um numero aleatorio maior q 0 zero e menor q 1

const aleatorio= Math.random() * (100 -  0) + 0; //delimita range ex: um numero aleatorio entre 0 e 100
console.log(Math.round(aleatorio));

//raiz quadrada 
let numero = 25;
console.log(numero **0.5)