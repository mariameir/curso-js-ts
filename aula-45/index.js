// try,catch e finally

try {
    // executa quando nao ha erros 
    // console.log(a);
    console.log('abri um arquivo');
    console.log('manipulei o arquivo e gerou um erro');
    console.log('fechei o arquivo');
} catch (e) {
    // e executada quando ha erros
    console.log('tratando um erro');
} finally {
    console.log('eu sempre sou executado');
}