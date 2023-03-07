const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() { //funcao para criar lista de tarefas
    const li = document.createElement('li')
    return li;
}

inputTarefa.addEventListener('keypress', function (e) { //funcao q mostra quando uma tecla foi pressionada e qual
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput(){ //limpar imput depois de criar uma nova tarefa
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criarBotaoApagar(li){ //funcao q cria um botao de delete para cada item da lista
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML= 'Apagar'
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('tittle','Apagar essa tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput()
    criarBotaoApagar(li)
    salvarTarefas();
}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){ //checar o quje sendo clicado
    const el = e.target;

    if (el.classList.contains('apagar')){ //define se o botao tem a a class 'apagar' para criar a condicional
        el.parentElement.remove(); //remove o pai do elemento
        salvarTarefas();
    }

});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);

}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();