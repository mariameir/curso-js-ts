//formatos para mandar datas
// const data = new Date(); //EM BRANCO = DATA ATUAL
// console.log(data.toDateString());

// const data1 = new Date(0); //VALOR milisegundos desde 1º de Janeiro de 1970
// console.log(data1.toDateString());

// const data2 = new Date(2021, 10, 27, 15 ); //ano, mes, dia, hora, minutos, segundos, milisegundos
// console.log(data2.toDateString());

// const data3 = new Date('2023-08-19 20:12:33'); //dataString
// console.log('Dia ', data.getDate());
// console.log('Mes ', data.getMonth()+1);
// console.log('Ano ', data.getFullYear());
// console.log('Hora ', data.getHours());
// console.log('Minuto ', data.getMinutes());
// console.log('Segundo ', data.getSeconds());
// console.log('Milisegundos ', data.getMilliseconds());
// console.log('Dia de semana ', data.getDay());
// console.log(data3.toDateString());
// console.log(Date.now()); //milisegundos apartir do marco 0

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

function formataData (data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}  ${hora}:${minuto}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
