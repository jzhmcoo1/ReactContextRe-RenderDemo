import { useApp } from "../context/AppContext";

export default function Count() {
  console.log("Count Render");

  const { count, addCount } = useApp();

  return (
    <>
      <div>{count}</div>
      <div>
        <button onClick={addCount}>Plus one</button>
      </div>
    </>
  );
}
