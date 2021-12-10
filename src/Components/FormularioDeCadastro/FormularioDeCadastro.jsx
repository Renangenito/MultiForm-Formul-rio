import DadosEntrega from "./DadosEntrega.jsx";
import DadosPessoais from "./DadosPessoais.jsx";
import DadosUsuario from "./DadosUsuario.jsx";

function FormularioDeCadastro({ aoEnviar, validarCPF }) {
  return (
    <>
      <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
      <DadosUsuario />
      <DadosEntrega />
    </>
  );
}

export default FormularioDeCadastro;
