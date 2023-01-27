//arays sao indexados

const nomes = ['maria','pedro','julia'];
console.log(nomes);

nomes.push('higor'); //adiciona no final do array
console.log(nomes);

nomes[0]= 'eduardo'; // altera item do array
console.log(nomes);

nomes.unshift('bruno');//adiciona no comeco do array
console.log(nomes);

//a const removido salva o item apagado do array
const removido = nomes.pop(); //pop remove do final. 
console.log(removido);
console.log(nomes);

nomes.shift(); //shitf remove do final. 
console.log(nomes);

//  delete nomes[1];                   // remove item do array mantendo o indice vazio
//  console.log(nomes);

nomes.push('paula');
nomes.push('fernanda');
nomes.push('gabriel');
console.log(nomes);
console.log(nomes.slice(0, 3)); //fatia arrays