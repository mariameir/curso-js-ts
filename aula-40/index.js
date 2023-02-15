const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11];

// for (let numero of numeros){
//     console.log(numero);   //cria uma funcao para mostrar o array 
// }

//mesmo codigo porem pulando o numero 5 e 8

for (let numero of numeros){

    if (numero ===5){
        continue;
    }

    if (numero ===8){
        continue;
    }

    if (numero === 10){

        break;
        
    }

    console.log(numero);
}