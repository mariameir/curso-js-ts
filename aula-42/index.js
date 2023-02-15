// escreva uma funcao chamada ePaisagem que
// que recebe dois argumentos altura e largura 
//de uma imagem (number).
// retorne true se a imagem estiver em modo paisagem
//if?      //else:
function ePaisagem(largura,altura){
    if (largura > altura){
        return true;
    } else{
        return false
    }
}          
console.log(ePaisagem(12,4334));

//refatorando o codigo anterior part 1 

function ePaisagem2 (largura, altura){
    return largura> altura ? true : false;
}
console.log(ePaisagem2(112,2));

//refatorando o codigo anterior part 2

const ePaisagem3 = (largura,altura) => largura > altura;
console.log(ePaisagem3(3, 112));