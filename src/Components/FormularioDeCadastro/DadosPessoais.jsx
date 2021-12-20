import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import React from "react";
import { useState, useContext } from "react";
import validacoesCadastros from "../../Context/ValidacoesCadastros";
import useErros from "../../hooks/useErros";
function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(validacoesCadastros);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);
  

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        onChange={(e) => {
          setNome(e.target.value);
        }}
        id="nome"
        value={nome}
        label="Nome"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        onChange={(e) => setSobrenome(e.target.value)}
        id="sobrenome"
        value={sobrenome}
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        onChange={(e) => setCpf(e.target.value)}
        onBlur={validarCampos}
        id="cpf"
        name="cpf"
        value={cpf}
        error={!erros.cpf.valida}
        helperText={erros.cpf.mensagem}
        label="CPF"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <FormControlLabel
        control={
          <Switch
            onChange={(e) => setPromocoes(e.target.checked)}
            checked={promocoes}
            color="primary"
          />
        }
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Switch
            onChange={(e) => setNovidades(e.target.checked)}
            checked={novidades}
            color="primary"
          />
        }
        label="Novidades"
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
