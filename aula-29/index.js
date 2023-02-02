function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto1;
    switch (diaSemana) {
      case 0:
        return diaSemanaTexto1 = "Domingo";
      case 1:
        return diaSemanaTexto1 = "Segunda";
      case 2:
        return diaSemanaTexto1 = "Terça";
      case 3:
        return diaSemanaTexto1 = "Quarta";
      case 4:
        return diaSemanaTexto1 = "Quinta";
      case 5:
        return diaSemanaTexto1 = "Sexta";
      case 6:
        return diaSemanaTexto1 = "Sabado";
      default:
        returndiaSemanaTexto1 = "";
        
    }
  }
  const data = new Date();
  let diaSemana = data.getDay();
  const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
  
  console.log(diaSemana, diaSemanaTexto);
  


//let diaSemanaTexto;
//com if else

// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta';
// } else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sábado';
// } else {
//     diaSemanaTexto = ''
// }
// console.log(diaSemana, diaSemanaTexto);


//com switch case fora de uma function
// switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         break;
//         case 1:
//             diaSemanaTexto = 'Segunda';
//             break;
//             case 2:
//                 diaSemanaTexto = 'Terça';
//                 break;
//                 case 3:
//                     diaSemanaTexto ='Quarta'
//                     break;
//                     case 4:
//                         diaSemanaTexto ='Quinta'
//                         break;
//                         case 5:
//                             diaSemanaTexto ='Sexta'
//                             break;
//                             case 6:
//                                 diaSemanaTexto = 'Sabado'
//                                 break;
//                                 default:
//                                     diaSemanaTexto = ''
//                                     break;    
// }

