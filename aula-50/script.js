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
    console.log(total);
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
funcao4({ nome: 'maria', sobrenome: 'meir', idade: 24 }); //enviando um objetolietral como um argumento

//desestruturacao de array
function funcao5([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao5(['Maria Meir', 'Souza', 30]);

//                                   ... rest oparator
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros){
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "/") acumulador /= numero;
        if (operador === "*") acumulador *= numero;
    }
    console.log(acumulador)
}
conta("+",0,10,2,3);

// mudando o codigo anterior para uma function expression. Ao utilizar arrow function, desabilitamos o 
// 'arguments'

const conta1 = (operador1, acumulador1, ...numeros1) => {
    console.log(arguments);
};
conta1("+",0,10,2,3);

//outra forma de "declarar" arguments e que pode ser utlizado ate com arrow function
//... args = parametros indeterminados 
const argumentos = (...args) => {
    console.log(args);
};
conta1("+",0,10,2,3);
