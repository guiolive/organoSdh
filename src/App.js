
import './App.css';
import Banner from './components/Banner/Banner';
import CampoTexto from './components/CampoTexto/CampoTexto.js';
import Formulario from './components/Formulario/Formulario';

function App() {
  return (
    <div className="App">

     <Banner/>
     <Formulario/>
     

      <header className="App-header">
       
        <p>
          Bem vindo ao React
        </p>
      
      </header>
    </div>
  );
}

export default App;
