function validarCPF(cpf){
  if(cpf.length !== 11){
    return ({valida: false, mensagem: "CPF deve ter 11 dígitos!!"})
  }else{
    return ({valida: true, mensagem: ""})
  }
}


function validarSenha(senha){
  if(senha.length < 4 || senha.length > 72){
    return ({valida: false, mensagem: "Senha deve ter entre 4 e 72 dígitos!!"})
  }else{
    return ({valida: true, mensagem: ""})
  }
}


export {validarCPF, validarSenha}
