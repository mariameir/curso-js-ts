const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){ //funcao para criar lista de tarefas
    const li = document.createElement('li')
    return li;
}

function criaTarefa (textoInput){ 
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return; 
    criaTarefa(inputTarefa.value); 
});
