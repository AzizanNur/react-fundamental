export default function AlertButton({ text, message }) {
  const handleAlert = (e) => {
    console.info(e.target);
    alert(message);
  };
  return <button onClick={handleAlert}>{text}</button>;
}
