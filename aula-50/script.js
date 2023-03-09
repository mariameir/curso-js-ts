//quando definimos funcao com a palavra function (n funciona para arrow function)
//temos disponivel um a variavel chamada 'arguments' que recebe todos os argumentos 
//que mandamos para funcao em forma de array

function funcao() {
    console.log(arguments);
}
funcao('valor', 1, 2, 3, 4, 5, 6, 7, 8, 9,);

//funcao que soma todos argumentos mandado para funcao

function funcao1() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total)
}
funcao1(1, 2, 3, 4);

//arguments sustenta todos os argumentos enviados 
function funcao2(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao2(1, 2, 3, 4, 5, 6);

//quando queremos delimitar um valor padrao para um argumento se n evniarmos uma dado
function funcao3(a, b = 1, c = 1) {
    console.log(a + b + c);
}
funcao3(2, 2, 2);

//atribiucao via desestruturacao

//objeto
function funcao4({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
funcao4({ nome: 'maria', sobrenome: 'meir', idade: 24 });

//desestruturacao do array
function funcao5([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao5(['Maria Meir', 'Souza', 30]);