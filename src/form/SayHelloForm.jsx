export default function SayHelloForm() {
  return (
    <>
      <form>
        <input id="name" />
        <button
          onClick={(e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            document.getElementById("show_hello").innerText = `Hello ${name}`;
          }}
        >
          Say Hellow
        </button>
      </form>
      <h1 id="show_hello">Hello World</h1>
    </>
  );
}
