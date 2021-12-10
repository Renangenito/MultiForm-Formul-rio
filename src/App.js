import { Container, Typography } from '@material-ui/core';
import './App.css';
import FormularioDeCadastro from './Components/FormularioDeCadastro/FormularioDeCadastro';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">Formulário de cadastro</Typography>
      <FormularioDeCadastro aoEnviar={aoEnviar} validarCPF={validarCPF} />
    </Container>
  );

  function aoEnviar(dados) {
    console.log(dados)
  }
  
function validarCPF(cpf){
  if(cpf.length !== 11){
    return ({valida: true, mensagem: "CPF deve ter 11 dígitos!!"})
  }else{
    return ({valida: false, mensagem: ""})
  }
}

}

export default App;
