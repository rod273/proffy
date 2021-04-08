// procurar o botao
// quando clicar no botao 
document.querySelector("#add-time")
.addEventListener("click", cloneField)



//  executar uma ação
function cloneField() {

 //duplicar os campos. q campos?
 fields = document.querySelector(".schedule-item").cloneNode(true)

//colocar na pagina
document.querySelector("#schedule-items").appendChild(fields)
}



