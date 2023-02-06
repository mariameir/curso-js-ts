const nome = ["maria","meir","fernanda"]


//iterando com for classico
for (i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log("_______________________")

//iterando com for in

for(let index in nome ){
    console.log(nome[index]);
}

console.log("_______________________")

 
// com for of o objeto n e iteravel
for(let valor of nome){
    console.log(valor)
}

console.log("_______________________")

//iterando com forEach
nome.forEach(function(valor, indice){
    console.log(valor, indice);

});