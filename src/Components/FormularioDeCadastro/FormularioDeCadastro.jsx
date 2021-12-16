import DadosEntrega from "./DadosEntrega.jsx";
import DadosPessoais from "./DadosPessoais.jsx";
import DadosUsuario from "./DadosUsuario.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";

function FormularioDeCadastro({ aoEnviar, validacoes }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});
  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  const formularios = [
    <DadosUsuario aoEnviar={coletaDados} validacoes={validacoes}/>,
    <DadosPessoais aoEnviar={coletaDados} validacoes={validacoes} />,
    <DadosEntrega aoEnviar={coletaDados} validacoes={validacoes}/>,
    <Typography variant="h4" align="center" color="primary">Obrigado por se cadastrar!!</Typography>,
  ];

  function coletaDados(dados) {
    setDadosColetados({ ...dadosColetados, ...dados });
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }
  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioDeCadastro;
