const frutas = ['Uva', 'Pera', 'Banana'];

//iterando o vetor Frutas (com contador)
for (let i=0; i < frutas.length; i++){ //contador que le indices "na mao"
    console.log(frutas[i]);
}

console.log("__________________")


for (let indice in frutas){ // le indices do array
    console.log(frutas[indice])
}

console.log("__________________")

const pessoa ={
    nome:"maria",
    sobrenome: "souza",
    idade:24
}

for (let chaves in pessoa){
    console.log(pessoa[chaves])
}

console.log("__________________")

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}
