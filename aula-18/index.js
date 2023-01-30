// CRIACAO DE OBJETOS FORMA SIMPLES
const dados = {
    nome: 'maria',
    idade: 24,
    time: 'palmeiras'
}
console.log(dados.idade);

 //CRIANDO OBJETOS COM FUNCTION
function criarPessoa (nome,sobrenome,idade){
    return {nome, sobrenome, idade}
}

const pessoa1 = criarPessoa(`Maria`,`Castro`,25);
const pessoa2 = criarPessoa(`Luis`,`Felipe`,22);
console.log(pessoa1.idade)


//quando uma funcao esta dentro de um objeto ela e chamada de metodo 
const pessoa4 ={
    nome:'Meir',
    sobrenome: 'Castro',
    idade: 24,

    fala(){
        console.log('Ola, mundo!');
    }
};
pessoa4.fala();