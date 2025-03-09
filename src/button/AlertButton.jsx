export default function AlertButton({ text, message }) {
  const handleAlert = () => {
    alert(message);
  };
  return <button onClick={handleAlert}>{text}</button>;
}
