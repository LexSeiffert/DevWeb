import "./App.css";
import Bio from "./components/Bio";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <h1>Aula 02</h1>
      {/* Comentario */}
      <Bio nome="Asael Alexander" idade="19" />
      <Bio nome="?" idade="??" />
      <Bio nome="???" idade="????" />
      <Button title="Botão 1" />
      <Button title="Botão 2" />
      <Button title="Botão 3" />
    </div>
  );
}

export default App;
