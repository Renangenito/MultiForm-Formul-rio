import { TextField, Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";

function DadosEntrega({aoEnviar}) {
  const [cep, setCep] = useState("")
  const [endereco, setEndereco] = useState("")
  const [numero, setNumero] = useState("")
  const [estado, setEstado] = useState("")
  const [cidade, setCidade] = useState("")
  return (
    <form onSubmit={(event)=>{
      event.preventDefault()
      aoEnviar({cep, endereco, numero, estado, cidade})
    }}>
      <TextField
        onChange={e=> setCep(e.target.value)}
        value={cep}
        id="cep"
        type="number"
        label="CEP"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        onChange={e=> setEndereco(e.target.value)}
        value={endereco}
        id="endereco"
        type="text"
        label="Endereço"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        onChange={e=> setNumero(e.target.value)}
        value={numero}
        id="numero"
        type="number"
        label="Número"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        onChange={e=> setEstado(e.target.value)}
        value={estado}
        id="estado"
        type="text"
        label="Estado"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        onChange={e=> setCidade(e.target.value)}
        value={cidade}
        id="cidade"
        type="text"
        label="Cidade"
        variant="outlined"
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
