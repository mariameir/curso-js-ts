// escopo lexico -  a funcao conhece o local aonde ela foi declarada, tudo que foi
//declarada dentro dela e o que esta nos vizinhos delas.

const nome = 'meir';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    falaNome();
}
usaFalaNome();