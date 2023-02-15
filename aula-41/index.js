// escreva uma funcao que recebe dois numeros e 
// retorne o maior deles

// function max(y, x) {
//     if (y > x) {
//         return y;
//     } else {
//         return x;
//     }
// }
// console.log(max(2, 1));


//refatorando o codico anterior

const max2 = (y,x) => x > y ? x : y;
console.log(max2(2, 1));