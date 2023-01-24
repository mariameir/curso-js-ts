// Maria Meir tem 24 anos, pesa 43 kg, tem 1.53 de altura e seu IMC é de 18.369003374

const nome = "Maria Meir";
const idade = 24;
const peso = 43;
const altura = 1.53;
let imc;// peso / (altura*altura)
imc = peso/(altura*altura);
const ano = 2023; 
let anoNascimento = ano - idade;
console.log(nome,"tem", "anos,","pesa","kg, tem","de altura e seu IMC é de", imc);
console.log(anoNascimento);