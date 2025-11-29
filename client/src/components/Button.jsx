export default function Button() {
  const handleClick = () => {
    console.log("click");
  };
  return <button onClick={handleClick}>Button</button>;
}
