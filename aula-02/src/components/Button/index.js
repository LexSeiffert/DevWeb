export default function Button(props) {
  console.log(props);
  return (
    <button style={{ marginRight: 10, padding: 10 }}> {props.title}</button>
  );
}
