let varA = "A";//B 
let varB = "B";//C
let varC = "C";//A

const temporaria = varA;

varA = varB;
varB = varC;
varC = temporaria;

console.log(varA, varB,varC);