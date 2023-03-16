//Closures é basicamente a capacidade de uma funcao ter uma outra funcao e essa funcao
//ter a capacidade de acessar o escopo lexico e retorna dentro dessa funcao, alguma 
//coisa que esteja no escopo lexico.

function retornaFuncao() {
    const nome = 'meir';
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Maria');
const funcao2 = retornaFuncao('Meir');
console.dir(funcao2);
console.dir(funcao);


console.log(funcao(), funcao2());