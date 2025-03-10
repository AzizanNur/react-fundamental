import { useImmer } from "use-immer";

export default function ContactForm() {
  let [contact, setContact] = useImmer({
    name: "",
    message: "",
  });

  function handleNameChange(e) {
    setContact((contact) => {
      contact.name = e.target.value;
    });
  }

  function handleMessageChange(e) {
    setContact((contact) => {
      contact.message = e.target.value;
    });
  }

  return (
    <>
      <h1 className="">Contact Number UseImmers</h1>
      <form>
        <div>
          <input
            type="name"
            value={contact.name}
            placeholder="nama"
            onChange={handleNameChange}
          />
          <p />
          <input
            type="message"
            value={contact.message}
            placeholder="message"
            onChange={handleMessageChange}
          />
        </div>
      </form>

      <h1 className="">Contact detail</h1>
      <p>Name: {contact.name}</p>
      <p>Message: {contact.message}</p>
    </>
  );
}
