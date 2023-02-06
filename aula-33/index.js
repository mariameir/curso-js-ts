const pessoa = {
    nome: 'maria',
    sobrenome: 'souza',
    idade:24,
    endereco:{
        rua:'sabia',
        numero: 215
    }
}
// "normal"
console.log(pessoa);

// atribuicao via desestruturacao
const {nome, sobrenome, idade} = pessoa; // 
console.log(nome, sobrenome, idade);

const {endereco :{rua,numero}} = pessoa;
console.log(rua,numero);
