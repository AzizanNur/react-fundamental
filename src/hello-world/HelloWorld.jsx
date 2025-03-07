function HelloWorld() {
  return (
    <>
      <Header text="Hello Ini Props Oke" />
      <Paragraf />
    </>
  );
}

function Header(props) {
  const { text } = props;
  return (
    <>
      <h1 style={{ color: "red", backgroundColor: "aqua" }}>
        {text.toUpperCase()}
      </h1>
    </>
  );
}

function Paragraf() {
  const text = "SELAMAT BELAJAR";
  const style = { color: "orange", backgroundColor: "yellow" };
  return (
    <>
      <p style={style}>{text.toLowerCase()}</p>
    </>
  );
}

export default HelloWorld;
