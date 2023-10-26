import './App.css';
import Mensagem from './components/Hello'
import { MeuNome } from './components/MeuNome/MeuNome'

function App() {
  return (
    <div className="App">
      <Mensagem/>
      {/* Bloco de comentario */}
      <MeuNome/>
      <h1>TESTE</h1>
    </div>
  );
}

export default App;
