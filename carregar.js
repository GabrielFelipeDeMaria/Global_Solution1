function buscar() {
    const searchTerm = document.querySelector("#search").value.toLowerCase();
    const lista = document.querySelector("#lista");
    lista.innerHTML = ''; 

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    const tarefasFiltradas = tarefas.filter(tarefa => 
        tarefa.titulo.toLowerCase().includes(searchTerm) || 
        tarefa.local.toLowerCase().includes(searchTerm) || 
        tarefa.descricao.toLowerCase().includes(searchTerm)
    );

    tarefasFiltradas.forEach(tarefa => Card(tarefa));
}

function Card(tarefa) {
    const card = document.createElement("article");
    card.id = tarefa.id;

    const content = `
        <header>${tarefa.titulo}</header>
        <p>${tarefa.local}</p>
        <p>${tarefa.descricao}</p>
        <p>${tarefa.satisfacao}</p>
        <p>${tarefa.data}</p>
        <progress id="status" value="${tarefa.status}" max="100"></progress>
        <footer>
            <button onclick="apagar('${tarefa.id}')" class="pico-background-pink-600">apagar</button>
        </footer>
    `;

    card.innerHTML = content;

    document.querySelector("#lista").appendChild(card);
}

document.addEventListener("DOMContentLoaded", function() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.filter(tarefa => tarefa.status < 100).forEach(tarefa => Card(tarefa));
});
