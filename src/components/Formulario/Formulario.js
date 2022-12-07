import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";

function Formulario() {
  return (
    <section className="formulario">
      <form>
        <h2> Preencha os dados do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
      </form>
    </section>
  );
}

export default Formulario;
