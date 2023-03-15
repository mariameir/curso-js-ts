function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto; //usando dentro da funcao interna, parametro da
                                     // funcao exterma
    }
    return falaResto; // retorna a funcao falaResto sem executar ela isso significa
                      // que esta retornando a funcao em si 
}

const olaMundo = falaFrase('Olá')
console.log(olaMundo('mundo!'));

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

//funcao que duplica, triplica, quadriplica valor
// function duplica(n){
//     return n*2;
// }
// function triplica(n){
//     return n*3;
// }
// function quadriplica(n){
//     return n*4;
// }
// console.log(duplica(10));
// console.log(triplica(10));
// console.log(quadriplica(10));


//funcao que duplica, triplica, quadriplica valor. feita de outra forma
function criaMultiplicador(multiplicador){
    //multiplicador esta nesse escopo
    return function(n){
        return n * multiplicador;
    };  
}

const duplica= criaMultiplicador(2); 
const triplica= criaMultiplicador(3); 
const quadriplica= criaMultiplicador(4); 

console.log(duplica(1));
console.log(triplica(1));
console.log(quadriplica(1));

