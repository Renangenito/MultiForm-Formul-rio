import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useState, useContext } from "react";
import validacoesCadastros from "../../Context/ValidacoesCadastros"
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(validacoesCadastros)
 const [erros, validarCampos, possoEnviar] = useErros(validacoes)

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()){
          aoEnviar({email, senha});

        }
      }}
    >
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        id="email"
        type="email"
        label="Email"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        onChange={(e) => setSenha(e.target.value)}
        onBlur={validarCampos}
        error={!erros.senha.valida}
        helperText={erros.senha.mensagem}
        value={senha}
        name="senha"
        id="senha"
        type="password"
        label="Senha"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
      Próximo
      </Button>
    </form>
  );
}
export default DadosUsuario;
