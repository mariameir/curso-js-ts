//EXEMPLOS DE FUNCTIONS

//  #1
function teste(nome){
    return  `Bom dia, ${nome}!`;
}

const variavel = teste('Meir');
console.log(variavel);

//  #2
function soma (x,y){
    const resultado = x + y;
    return  resultado;
}

console.log(soma( 3, 2 ));

//  #3 FUNCAO ANONIMA (UMA FUNCAO DENTRO DE UMA VARIAVEL)
const raiz = function(n){
    return n ** 0.5;
};
console.log(raiz(25));

//  #4 ARROW FUNCTION
const raiz1 = n => n** 0.5;
console.log(raiz1(16));