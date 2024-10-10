import React from "react";

function UseMemoHook() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(number) {
    console.log("calculation done");
    return Math.pow(number, 3);
  }
  // const result = cubeNum(number);
  // the above statement run thte calculation even when the input does not change

  const result = useMemo(() => {
    return cubeNum(number);
  }, [number]);
  // the above statement only render when there is change
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />

      <h1>the result is :{result}</h1>

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        counter+1
      </button>
      <h1>Counter : {counter}</h1>
    </div>
  );
}

export default UseMemoHook;
