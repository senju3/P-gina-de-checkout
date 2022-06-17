const form = document.querySelector("#meu-form")
form.addEventListener("submit", event => {console.log("enviar formulário")})
//trazer todos os inputs para o js
const fields = document.querySelectorAll("[required]")
//criar um estrutura de repetição usando o for
function customValidation (event) {
    const field = event.target //event no caso é o inválid. Target é o alvo, qual o alvo que disparou esse evento

    //lógica para verificar se existem outros erros  por eu usei o field.setCustomValidity("Esse campo é obrigatório")
    function verifyErrors () {
        let foundError = false;
        //o for in serve para interação com elementos de um objeto 
        for (let error in field.validity) { //validity mostra todos os possiveis erros
            //se nao for customError
            //então verifica se tem erro
            if(error != "customError" && field.validity[error]) {
                foundError = error
            }
        }

        return foundError;
    }
    const error = verifyErrors ()
   
    //trocar mensagem de required
   if (error) {
    field.setCustomValidity("Esse campo é obrigatório")
   } else {
    field.setCustomValidity("")
   }    
}
for( let field of fields ) {
    field.addEventListener("invalid", customValidation) //esse invalid é um evento disponível quando se usa o atributo required
}