import { Container, Typography } from '@material-ui/core';
import './App.css';
import FormularioDeCadastro from './FormularioDeCadastro';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">Formulário de cadastro</Typography>
      <FormularioDeCadastro aoEnviar={cadastrar} validarCPF={validaCpf}/>
    </Container>
  );

  function cadastrar(dados) {
    console.log(dados)
  }
  function validaCpf(cpf){
    if(cpf.length !== 11){
      return ({valida: true, mensagem: "CPF deve ter 11 dígitos!"})
    }else{
      return ({valida: false, mensagem: ""})
    }
  }

}

export default App;
