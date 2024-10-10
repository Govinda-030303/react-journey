// with empty array depedency, it only run once
import React from "react";

export default function UseEffectHook2() {
  const [count, setCount] = useState(0);
  console.log("inside app render");

  useEffect(() => {
    console.log("inside effect render");
    setTimeout(() => {
      setCount((c) => c + 1);
    }, 2000);
  });

  return (
    <div>
      <h1>I've render the {count} times</h1>
    </div>
  );
}
