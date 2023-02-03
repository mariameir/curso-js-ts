function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto1;
  switch (diaSemana) {
    case 0:
      return diaSemanaTexto1 = "Domingo";
    case 1:
      return diaSemanaTexto1 = "Segunda-feira";
    case 2:
      return diaSemanaTexto1 = "Terça-feira";
    case 3:
      return diaSemanaTexto1 = "Quarta-feira";
    case 4:
      return diaSemanaTexto1 = "Quinta-feira";
    case 5:
      return diaSemanaTexto1 = "Sexta-feira";
    case 6:
      return diaSemanaTexto1 = "Sabado-feira";
    default:
      return diaSemanaTexto1 = "";
      
  }
}

function getMesTexto(mesTexto) {
  let mesTexto1;
  switch (mesTexto) {
    case 0:
      return mesTexto1 = "Janeiro";
    case 1:
      return mesTexto1 = "Fevereiro";
    case 2:
      return mesTexto1 = "Março";
    case 3:
      return mesTexto1 = "Abril";
    case 4:
      return mesTexto1 = "Maio";
    case 5:
      return mesTexto1 = "Junho";
    case 6:
      return mesTexto1 = "Julho";
      case 7:
      return mesTexto1 = "Agosto";
      case 8:
      return mesTexto1 = "Setembro";
      case 9:
      return mesTexto1 = "Outubro";
      case 10:
      return mesTexto1 = "Novembro";
      case 11:
      return mesTexto1 = "Dezembro";
    default:
      return mesTexto1 = "";
      
  }
}
const data = new Date();

let diaMes = data.getDate();
let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

let numeroMes= data.getMonth();
const mesTexto = getMesTexto(numeroMes);

let ano = data.getFullYear();

function zeroAEsquerda (num){
  return num >= 10 ? num : `0${num}`
}
const hora = zeroAEsquerda(data.getHours());
const minuto = zeroAEsquerda(data.getMinutes());

var output = document.getElementById("output");
output.innerHTML = `${diaSemanaTexto}, ${diaMes} de ${mesTexto} de ${ano} ${hora}:${minuto}`;


//mesmo resultado mas em 3 linhas de codigo kkkk
// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleString('pt-BR',{ dateStyle: 'full', timeStyle: 'short'});
