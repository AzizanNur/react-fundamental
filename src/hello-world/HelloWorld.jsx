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
      <h1>{text.toUpperCase()}</h1>
    </>
  );
}

function Paragraf() {
  const text = "SELAMAT BELAJAR";
  return (
    <>
      <p>{text.toLowerCase()}</p>
    </>
  );
}

export default HelloWorld;
