
const totalPendentes = tarefas
                            .filter( t => t.status < 100)
                            .length

document.querySelector("#stats-pending span").innerText = totalPendentes

const totalConcluidas = tarefas  
                            .filter( t => t.status == 100)
                            .length
                            
document.querySelector("#stats-done span").innerText = totalConcluidas


const totalPontos = tarefas.reduce((soma, t) => soma += Number(t.pontos), 0)
document.querySelector("#stats-total span").innerText = totalPontos

const totalPontosGanhos = tarefas
.filter( t=> t.status == 100)
                            .reduce( (soma, t) => soma += Number(t.pontos), 0 )

document.querySelector("#stats-score span").innerText = totalPontosGanhos
                        

