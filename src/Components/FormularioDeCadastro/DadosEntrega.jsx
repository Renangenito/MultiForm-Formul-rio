import { TextField, Button } from "@material-ui/core";
import React from "react";

function DadosEntrega() {
  return (
    <form>
      <TextField
        id="cep"
        type="number"
        label="CEP"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="endereco"
        type="text"
        label="Endereço"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="numero"
        type="number"
        label="Número"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="estado"
        type="text"
        label="Estado"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="cidade"
        type="text"
        label="Cidade"
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
