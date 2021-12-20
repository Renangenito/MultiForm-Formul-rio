import { Container, Typography } from "@material-ui/core";
import "./App.css";
import FormularioDeCadastro from "./Components/FormularioDeCadastro/FormularioDeCadastro";
import ValidacoesCadastros from "./Context/ValidacoesCadastros";
import { validarCPF, validarSenha } from "./models/cadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">
        Formulário de cadastro
      </Typography>
      <ValidacoesCadastros.Provider value={{ cpf: validarCPF, senha: validarSenha }}>
      <FormularioDeCadastro aoEnviar={aoEnviar} />

      </ValidacoesCadastros.Provider>
    </Container>
  );


  function aoEnviar(dados) {
    console.log(dados);
  }
}

export default App;
