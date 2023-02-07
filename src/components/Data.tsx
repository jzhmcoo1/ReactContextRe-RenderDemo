import { useApp } from "../context/AppContext";

export default function Data() {
  console.log("Data Render");

  const { data, changeData } = useApp();

  return (
    <>
      <div>{JSON.stringify(data)}</div>
      <div>
        <button onClick={changeData}>changeData</button>
      </div>
    </>
  );
}
