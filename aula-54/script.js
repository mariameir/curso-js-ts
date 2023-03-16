//funcao que da milissigundos aleatorios de 1000 a 3000 = 1 segundos a 3 segundos
function rand(min= 1000, max= 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor (num);
}


function f1(callback){
    setTimeout(function (){
        console.log('Funcao 1');
        if (callback) callback();
    },rand()); //milisimos de segundos que vai demorar para msg aparecer no console
}

function f2(callback){
    setTimeout(function (){
        console.log('Funcao 2');
        if (callback) callback();
    },rand()); 
}
function f3(callback){
    setTimeout(function (){
        console.log('Funcao 3');
        if (callback) callback();
    },rand());
}
    
f1 (function (){
    f2 (function(){
        f3(function(){
            console.log('Ola mundo!');
        })
    });
});
console.log('Testando tempo de resposta.');