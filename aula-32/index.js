//desestruturacao (arrays)

let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const letras = [b,c,a];
[a,b,c] = letras;
console.log(a,b,c);

//exemplo 2 
//               0  1  2  3  4  7  8  9  10
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [primeiroNumero, segundoNumero, ...resto]= numeros; //  ...rest
console.log(primeiroNumero,segundoNumero)
console.log(resto);

// ...resto = junta o resto e ...spread = espalha


//array dentro de array
const num = [[12, 34, 56], [78, 98, 45], [23, 45, 32]];
console.log(num[1][1])
