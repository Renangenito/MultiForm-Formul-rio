function validarCPF(cpf){
  if(cpf.length !== 11){
    return ({valida: true, mensagem: "CPF deve ter 11 dígitos!!"})
  }else{
    return ({valida: false, mensagem: ""})
  }
}


function validarSenha(senha){
  if(senha.length < 4 || senha.length > 72){
    return ({valida: true, mensagem: "Senha deve ter entre 4 e 72 dígitos!!"})
  }else{
    return ({valida: false, mensagem: ""})
  }
}


export {validarCPF, validarSenha}
