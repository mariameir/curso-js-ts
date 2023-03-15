//return. retorna um valor. termina a funcao.

function soma(a,b){
    return a + b;    
}
 console.log(soma(7,3))

 // funcao inutil q n retorna nada apenas, akem de exigbir alguma coisa
 function soma2(a,b){
    console.log(a+b);
 }
 soma2(6,6);

 //exemplo de funcao que n reotna nada mas, faz algo util
//  document.addEventListener('click',function(){
//     document.body.style.backgroundColor = 'red';
//  });

 //exemplo de funcao que retorna um objeto de pessoa. exemplo de funcao q cria objetos
 function criaPessoa (nome,sobrenome){
    return{nome,sobrenome};
 }
const p1 = criaPessoa('Maria','Meir');

//mesmo explo q cria objeto pessoas porem de forma tradicional
const p2 = {
    nome:'Maria',
    sobrenome:'Meir'
};
var {nome, sobrenome} = p2;

//destruturando o objeto anterior
console.log(nome);
console.log(sobrenome);

//exibindo os objetos
console.log(p1);
console.log(p2);
