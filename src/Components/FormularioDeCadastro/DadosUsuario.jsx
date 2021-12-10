import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosUsuario() {
  return (
    <form>
      <TextField
        id="email"
        type="email"
        label="Email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="senha"
        type="password"
        label="Senha"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  );
}
export default DadosUsuario;
