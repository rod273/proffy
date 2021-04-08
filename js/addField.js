// procurar o botao
// quando clicar no botao 
document.querySelector("#add-time")
.addEventListener("click", cloneField)



//  executar uma ação
function cloneField() {

 //duplicar os campos. q campos?
  const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

  //pegar os campos.. q campos?
  const fields = newFieldContainer.querySelectorAll("input")

 //para cada campo limpar

 fields.forEach(function(field) {

     //pegar o field do momento e limpa ele
     field.value=""


 })


//colocar na pagina
document.querySelector("#schedule-item").appendChild(newFieldContainer)
}



