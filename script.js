console.log("executando js")

function incrementar(id){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefa = tarefas.find(tarefa => tarefa.id == id)
    tarefa.status += 10

    if(tarefa.status > 100) tarefa.status = 100

    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    document.querySelector("#" + id + " progress").value = tarefa.status
}

function decrementar(id){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefa = tarefas.find(tarefa => tarefa.id == id)
    tarefa.status -= 10

    if(tarefa.status < 0) tarefa.status = 0

    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    document.querySelector("#" + id + " progress").value = tarefa.status
}


