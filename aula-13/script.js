// escape
const umaString= "e um \"texto\"";
// console.log(umaString);

const outraString= " como faz para aparecer o contrabarra \\"; // apenas acrescentar putra contra barra
console.log(outraString);


// string sao indexidadas. sao iteraveis, ou seja, cada caracter tem um indice
let string3 = "meir";
console.log(string3.charAt(3));

// apontar indice q comeca uma palavra
//indexOf comeca do comeco para o fim
let nome = ("meir");
console.log(nome.indexOf('m',0)) // letra 'a' depois do indice 3

//lastIndexOf comeca do fim para o comeco
let nome2 = ("meir");
console.log(nome.lastIndexOf('m',3))

// substituir  palavra e letras (sem regex)
const frase = "o rato roeu a roupa do rei de roma.";
console.log(frase.replace("rato","porco"));

//com regex (expressoes regulares)
//console.log(frase.replace(/r/g,"*")); // flag "g" substitui todos = globol

//contar caracteres de uma string 
console.log(frase.length);

//fatiar string 
console.log(frase.slice(2,6));//(inicio,fim+1)
console.log(frase.slice(-3)); //length -3

// dividir frases 
console.log(frase.split(" "));
