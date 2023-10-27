export default function Button({ title }) {
  // export default function Button(props) {
  function mensagem() {
    // console.log("Eu sou o botao: ", props.title);
    console.log("Eu sou o botao: ", title);
  }

  return (
    <button onClick={mensagem} style={{ marginRight: 10, padding: 10 }}>
      {title}
    </button>
  );
}
