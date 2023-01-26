let num1 =  4;
const num2 =  7;

console.log(num1 + num2);

//converter number to string sem mudar o seu type "para sempre"
console.log(num1.toString() + num2);
console.log(typeof num1);

//mudando number para string, mudando seu type
// num1 = num1.toString();
// console.log(typeof num1);

//toString tambem serve para converter para binarios 
console.log(num1.toString(2));

//toFixed(quantidade de digitos)    para escolher quantidade de digitos depois da virgula 

const num3 = 12.1231231; 
console.log(num3.toFixed(2));

//retornar se um numero e inteiro ou nao (resposta em true or false)
const num4 = 6;
console.log(Number.isInteger(num4));

//como saber se uma operacao e not a number ou nao (true or false)
let temp = num1 * 'ola';
console.log(Number.isNaN(temp));

//IEEE 754-2008

let n1 = 0.7 //number
let n2 = 0.1 // number

console.log(n1+n2); //imprecisao

// n1 += n2    -->          n1 = n1+n2
n1 += n2; //0.8
n1 += n2; //0.9
n1 += n2; //1.0
n1 += n2; //1.1
n1 += n2; //1.2
n1 += n2; //1.3
n1 += n2; //1.4
n1 += n2; //1.5
n1 += n2; //1.6
n1 += n2; //1.7
n1 += n2; //1.8
n1 += n2; //1.9
n1 += n2; //2.0
n1 = Number(n1.toFixed(2));

console.log(n1);
console.log(Number.isInteger(n1));



