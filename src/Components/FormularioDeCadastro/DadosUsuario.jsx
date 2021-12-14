import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({email, senha});
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
        value={senha}
        id="senha"
        type="password"
        label="Senha"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}
export default DadosUsuario;
