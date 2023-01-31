// ?  if              :  else

const pontos = 100;

// feito com if e else
if (pontos >= 1000){
    console.log('cliente vip');   
} else{
    console.log('cliente normal')
}

// feito com ? : (operacao ternaria)
const nivelUser = pontos >= 1000 ? 'cliente vip' : 'cliente normal';
console.log(nivelUser);

