function cadastro() {
    const titulo = document.querySelector("#titulo").value
    const local = document.querySelector("#local").value
    const descricao = document.querySelector("#descricao").value
    const satisfacao = document.querySelector("#satisfacao").value
    const data = document.querySelector("#data").value

    const tarefa = {
        id: "id" + new Date().getTime(),
        titulo,
        local,
        descricao,
        satisfacao,
        data,
        status: 0
    }
    
    console.log(tarefa)

    validar(tarefa)

    salvar(tarefa)


}

function validar(tarefa){
    let valido = true
    limparErros()

    if (tarefa.titulo == ""){
        document.querySelector("#titulo").ariaInvalid = true
        document.querySelector("#erro-titulo").innerText = "o título é obrigatório"
        valido = false

        
    }
    if (tarefa.local == ""){
        document.querySelector("#local").ariaInvalid = true
        document.querySelector("#erro-local").innerText = "o local é obrigatório"
        valido = false 
    }
    
    if (tarefa.descricao == ""){
        document.querySelector("#descricao").ariaInvalid = true
        document.querySelector("#erro-descricao").innerText = "a descrição é obrigatória"
        valido = false
    }

    if (tarefa.satisfacao == ""){
        document.querySelector("#satisfacao").ariaInvalid = true
        document.querySelector("#erro-satisfacao").innerText = "satisfacao deve ser positiva"
        valido = false
    }
    
    if (tarefa.data == ""){
        document.querySelector("#data").ariaInvalid = true
        document.querySelector("#erro-data").innerText = "A data deve ser válida"
        valido = false
    }

    if(!valido) throw new Error("dados inválidos")
}

const limparErros = function () {
    document.querySelectorAll("input").forEach( input => input.ariaInvalid = false )
    document.querySelectorAll("small").forEach( small => small.innerText = "")
}

function salvar(tarefa){
    const tarefas = JSON.parse( localStorage.getItem("tarefas") ) || []
    tarefas.push(tarefa)
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    window.location.href = "index.html"
}