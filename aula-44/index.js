// tratando e lancando erros com catch throw

//catch
// try{
//     console.log(naoExisto);
// } catch(error){
//     console.log('naoExisto nao existe');
//     console.log(error);

// }

//catch throw
function soma (x,y){
    if (typeof x !== 'number' || typeof y !== 'number' ){
        //throw ('Y e x precisam ser numeros.');
        throw new ReferenceError('Y e x precisam ser numeros.');
    }
    return x + y;
}

try {
    console.log(soma(1,2));
    console.log(soma('1',2));
} catch (error){
    console.log(error);
}
