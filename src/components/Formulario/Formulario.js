import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";

function Formulario() {

  const times = [
    "Selecione o cargo",
    "Diretor", 
    "Secretário", 
    "Técnico Administrativo", 
    "Estagiário", 
    "Vigilante",
  ];


  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Formulário enviado')
  }


  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2> Preencha os dados do colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa obrigatorio={true} label="Cargo" itens={times}/>
        <Botao>
          Criar Card
        </Botao>
        
      </form>
    </section>
  );
}

export default Formulario;
