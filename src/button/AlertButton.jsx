export default function AlertButton({ text }) {
  const handleAlert = () => {
    alert("halo ini button");
  };
  return <button onClick={handleAlert}>{text}</button>;
}
