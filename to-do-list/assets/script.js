function addTarefa(){
    const tarefaInput = document.getElementById('tarefa');
    const tarefaTexto = tarefaInput.value.trim();

    if(tarefaTexto == ''){
        alert('Por favor, digite uma tarefa.');
        return;
    }

    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const texto = document.createTextNode(tarefaTexto);

    checkbox.type = 'checkbox';

    checkbox.onchange = function () {
        if (checkbox.checked){
            li.classList.add('completo');
        } else {
            li.classList.remove('completo');
        }
    };

    li.appendChild(checkbox);
    li.appendChild(texto);

    const lista = document.getElementById('lista');
    lista.appendChild(li);

    tarefaInput.value = '';
}