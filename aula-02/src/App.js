import "./App.css";
import Bio from "./components/Bio";
import Button from "./components/Button";

function App() {
  const pessoas = [
    { nome: "Asael", idade: 19 },
    { nome: "Camila", idade: 28 },
    { nome: "José", idade: 67 },
  ];

  const buttons = [
    { title: "Botão 1" },
    { title: "Botão 2" },
    { title: "Botão 3" },
  ];

  return (
    <div className="App">
      <h1>Aula 02</h1>
      {/* Comentario */}
      {/* <Bio nome="Asael Alexander" idade="19" />
      <Bio nome={pessoas[1].nome} idade={pessoas[1].idade} />
      <Bio nome={pessoas[2].nome} idade={pessoas[2].idade} /> */}

      {pessoas.map((item, index) => (
        <Bio key={index} nome={item.nome} idade={item.idade} />
      ))}

      {buttons.map((buttons, count) => (
        <Button key={count} title={buttons.title} />
      ))}

      {/* <Button title="Botão 1" />
      <Button title="Botão 2" />
      <Button title="Botão 3" /> */}
    </div>
  );
}

export default App;
