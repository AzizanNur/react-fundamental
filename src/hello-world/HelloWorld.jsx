function HelloWorld() {
  return (
    <>
      <Header text="Hello Ini Props" />
      <Paragraf />
    </>
  );
}

function Header(props) {
  return (
    <>
      <h1 style={{ color: "red", backgroundColor: "aqua" }}>
        {props.text.toUpperCase()}
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
