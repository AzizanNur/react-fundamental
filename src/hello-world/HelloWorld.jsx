function HelloWorld() {
  return (
    <>
      <Header />
      <Paragraf />
    </>
  );
}

function Header() {
  const text = "hello world";
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
