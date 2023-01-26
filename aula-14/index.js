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

//




