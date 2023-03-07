// declaracao de uma funcao (function hosting -  the process whereby the interpreter
// appears to move the declaration of functions, variables or classes to the top of their
// scope, prior to execution of the code)

falaOi();

function falaOi(){
    console.log("oie");
}

// first class object (objetos de primeira classe)
// function expression - podemos jogar uma funcao anonima direto num dado
const souUmDado = function(){
    console.log("sou um dado");
};

// arrow function 
const funcaoArrow = () => {
    console.log("sou uma arrow function");
};
funcaoArrow();

// dentro de um objeto
const obj = {
    falar(){
        console.log("Estou falando");
    }
};
obj.falar();