import { Container, Typography } from "@material-ui/core";
import "./App.css";
import FormularioDeCadastro from "./Components/FormularioDeCadastro/FormularioDeCadastro";
import { validarCPF, validarSenha } from "./models/cadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">
        Formulário de cadastro
      </Typography>
      <FormularioDeCadastro aoEnviar={aoEnviar} validacoes={{ cpf: validarCPF, senha: validarSenha }}/>
    </Container>
  );

  function aoEnviar(dados) {
    console.log(dados);
  }
}

export default App;
