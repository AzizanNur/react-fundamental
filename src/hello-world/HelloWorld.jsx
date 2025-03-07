import "./HelloWorld.css";

function HelloWorld() {
  const props = {
    text: "Hello World",
    background: "red",
    color: "blue",
  };
  return (
    <>
      <Header {...props} />
      <Paragraf />
    </>
  );
}

function Header(props) {
  const { text = "ini nilai default text", background, color } = props;
  return (
    <>
      <h1 style={{ color: color, backgroundColor: background }}>
        {text.toUpperCase()}
      </h1>
    </>
  );
}

function Paragraf() {
  const text = "SELAMAT BELAJAR";
  return (
    <>
      <p className="paragraph">{text.toLowerCase()}</p>
    </>
  );
}

export default HelloWorld;
